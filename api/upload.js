export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

const MUX_ID = '004310b6-3d93-4799-9d08-f966924bc618';
const MUX_SECRET = '+2mbKI+H8WlNRgXYtVKn06g4vAlXieQyAiXJ9+VupygFo3lwg0uavkUiCF6DWbssp1vItBEdjNJ';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const credentials = Buffer.from(MUX_ID + ':' + MUX_SECRET).toString('base64');
  const authHeader = 'Basic ' + credentials;

  // Obtenir URL d'upload
  if (req.method === 'GET' && req.query.action === 'upload-url') {
    try {
      const muxRes = await fetch('https://api.mux.com/video/v1/uploads', {
        method: 'POST',
        headers: { 'Authorization': authHeader, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cors_origin: '*',
          new_asset_settings: { playback_policy: ['public'], max_resolution_tier: '1080p' },
          timeout: 3600
        })
      });

      const muxData = await muxRes.json();
      if (!muxRes.ok) return res.status(500).json({ error: 'Erreur Mux', details: muxData });

      return res.status(200).json({
        upload_url: muxData.data.url,
        upload_id: muxData.data.id
      });

    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // Vérifier statut upload et récupérer playback_id
  if (req.method === 'GET' && req.query.action === 'get-playback') {
    try {
      const { upload_id } = req.query;

      // Récupérer l'upload pour avoir l'asset_id
      const uploadRes = await fetch('https://api.mux.com/video/v1/uploads/' + upload_id, {
        headers: { 'Authorization': authHeader }
      });
      const uploadData = await uploadRes.json();
      const asset_id = uploadData.data?.asset_id;

      if (!asset_id) {
        return res.status(200).json({ status: 'waiting', playback_id: null });
      }

      // Récupérer l'asset pour avoir la playback_id
      const assetRes = await fetch('https://api.mux.com/video/v1/assets/' + asset_id, {
        headers: { 'Authorization': authHeader }
      });
      const assetData = await assetRes.json();
      const playback_id = assetData.data?.playback_ids?.[0]?.id;
      const status = assetData.data?.status;

      return res.status(200).json({ status, playback_id, asset_id });

    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(404).json({ error: 'Route not found' });
}
