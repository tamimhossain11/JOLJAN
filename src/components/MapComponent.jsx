import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/MapComponent.css';

const MapComponent = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    // Dhaka, Bangladesh coordinates (approximate central location)
    const dhakaCoords = [23.8103, 90.4125];

    // Initialize map if not already initialized
    if (!mapInstanceRef.current && window.L) {
      const map = window.L.map(mapRef.current).setView(dhakaCoords, 12);
      mapInstanceRef.current = map;

      // Add marker for Dreams of Bangladesh
      window.L.marker(dhakaCoords)
        .addTo(map)
        .bindPopup(`
          <div style="text-align: center; font-family: sans-serif;">
            <strong style="font-size: 16px; color: #0ea5e9;">Dreams of Bangladesh</strong>
            <p style="margin: 5px 0; color: #666;">RoboBoat 2026 Team</p>
            <p style="margin: 0; font-size: 12px; color: #999;">Dhaka, Bangladesh</p>
          </div>
        `)
        .openPopup();

      // Set tile layer based on theme
      updateTileLayer(map, isDark);
    }
  }, []);

  useEffect(() => {
    // Update map theme when isDark changes
    if (mapInstanceRef.current) {
      updateTileLayer(mapInstanceRef.current, isDark);
    }
  }, [isDark]);

  const updateTileLayer = (map, isDark) => {
    // Remove existing tile layers
    map.eachLayer((layer) => {
      if (layer instanceof window.L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    // Add new tile layer based on theme
    const tileLayer = isDark
      ? window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        })
      : window.L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        });

    tileLayer.addTo(map);
  };

  useEffect(() => {
    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="map-container" />;
};

export default MapComponent;
