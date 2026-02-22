import React from 'react';
import { useLocation } from 'react-router-dom';

const BackgroundVideo = ({ isLoading }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const showVideo = isLoading; // Only show video during loading

    // Don't render any background for home page - hero section has its own video
    // For other pages, show static image background
    if (isHome && !isLoading) {
        return null;
    }

    return (
        <div
            className="background-wrapper"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                overflow: 'hidden',
                background: '#000',
            }}
        >
            {/* Video Layer - Only rendered during loading */}
            {showVideo ? (
                <div
                    className="background-video-inner"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) scale(1.3)',
                        width: '100vw',
                        height: '100vh',
                        minWidth: '177.77vh',
                        minHeight: '56.25vw',
                    }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/BdAPLEA6Wfc?autoplay=1&mute=1&controls=0&loop=1&playlist=BdAPLEA6Wfc&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&enablejsapi=1"
                        title="Background Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none',
                            border: 'none',
                            opacity: 0.8
                        }}
                    />
                </div>
            ) : (
                /* Static Image Layer - For non-home pages */
                <div
                    className="background-image-inner"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(/boat11.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.6 // Adjust contrast for text readability
                    }}
                />
            )}

            {/* Global Overlay for contrast */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
};

export default BackgroundVideo;
