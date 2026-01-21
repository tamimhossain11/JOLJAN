# Map Component Setup

The interactive map on the Contact page uses **Leaflet.js** loaded via CDN (no npm installation required).

## Features

✅ **Theme Support**: Map automatically switches between dark and light themes
- **Dark Theme**: Uses dark CartoDB basemap
- **Light Theme**: Uses Voyager CartoDB basemap

✅ **Custom Marker**: Shows Dreams of Bangladesh location in Dhaka
✅ **Interactive Popup**: Displays team information
✅ **Fully Responsive**: Works on all devices
✅ **Smooth Transitions**: Theme changes are seamless

## Map Styles

The map uses CartoDB's beautiful basemaps:
- **Dark Mode**: `dark_all` - Perfect for dark theme
- **Light Mode**: `voyager` - Clean, modern look for light theme

## Location

Currently set to Dhaka, Bangladesh (coordinates: 23.8103, 90.4125)

To change the location, edit `/src/components/MapComponent.jsx` and update the `dhakaCoords` array.

## No Installation Required

The map uses Leaflet from CDN (already added to `index.html`), so no npm packages need to be installed!
