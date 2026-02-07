import axios from 'axios';

// Configure Geoserver API endpoint
const GEOSERVER_URL = process.env.NEXT_PUBLIC_GEOSERVER_URL || 'http://localhost:8080/geoserver';

export const geoserverAPI = {
  // Get WMS capabilities
  getWMSCapabilities: async (workspace?: string) => {
    try {
      const url = workspace
        ? `${GEOSERVER_URL}/${workspace}/wms`
        : `${GEOSERVER_URL}/wms`;
      
      const response = await axios.get(`${url}?service=WMS&version=1.1.0&request=GetCapabilities`);
      return response.data;
    } catch (error) {
      console.error('Error fetching WMS capabilities:', error);
      throw error;
    }
  },

  // Get WFS capabilities
  getWFSCapabilities: async (workspace?: string) => {
    try {
      const url = workspace
        ? `${GEOSERVER_URL}/${workspace}/wfs`
        : `${GEOSERVER_URL}/wfs`;
      
      const response = await axios.get(`${url}?service=WFS&version=2.0.0&request=GetCapabilities`);
      return response.data;
    } catch (error) {
      console.error('Error fetching WFS capabilities:', error);
      throw error;
    }
  },

  // Get feature data
  getFeatures: async (typeName: string, params?: any) => {
    try {
      const response = await axios.get(`${GEOSERVER_URL}/wfs`, {
        params: {
          service: 'WFS',
          version: '2.0.0',
          request: 'GetFeature',
          typeName,
          outputFormat: 'application/json',
          ...params
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching features:', error);
      throw error;
    }
  },

  // Get layer info
  getLayerInfo: async (workspace: string, layer: string) => {
    try {
      const response = await axios.get(
        `${GEOSERVER_URL}/rest/workspaces/${workspace}/layers/${layer}.json`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching layer info:', error);
      throw error;
    }
  }
};
