export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

const MUX_ID = process.env.MUX_ID || 'd7942670-6123-4784-a3ce-8837f6022e2b';
const MUX_SECRET = process.env.MUX_SECRET || 'bzycqzWKWB4qw+7KicW2miUUx48F+Xb3+DzUQjBBCMcwTzAzyertDFqBjcNCNAjvp7Jb3bYAyjT';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET' && req.query.action === 'upload-url') {
    try {
      const credentials = Buffer.from(`${MUX_ID}:${MUX_SECRET}`).toString('base64');

      const muxRes = await fetch('https://api.mux.com/video/v1/uploads', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cors_origin: '*',
          new_asset_settings: {
            playback_policy: ['public'],
            max_resolution_tier: '1080p'
          },
          timeout: 3600
        })
      });

      const muxData = await muxRes.json();

      if (!muxRes.ok) {
        console.error('Mux error:', muxData);
        return res.status(500).json({ error: 'Erreur Mux', details: muxData });
      }

      return res.status(200).json({
        upload_url: muxData.data.url,
        upload_id: muxData.data.id,
        asset_id: muxData.data.asset_id
      });

    } catch (err) {
      console.error('Server error:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  if (req.method === 'GET' && req.query.action === 'asset-status') {
    try {
      const { upload_id } = req.query;
      const credentials = Buffer.from(`${MUX_ID}:${MUX_SECRET}`).toString('base64');

      const muxRes = await fetch(`https://api.mux.com/video/v1/uploads/${upload_id}`, {
        headers: { 'Authorization': `Basic ${credentials}` }
      });

      const muxData = await muxRes.json();
      return res.status(200).json(muxData.data);

    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(404).json({ error: 'Route not found' });
}
