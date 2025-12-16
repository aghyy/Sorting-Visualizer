import React, { memo } from 'react';

const Bar2d = memo(({ value, color, barHeight, length, index }) => {
    const hidden = (() => {
        if (length < 60) return false;
        if (length < 90) return index % 2 === 1;
        if (length < 120) return index % 3 !== 0;
        if (length < 180) return true;
        return true;
    })();

    const colors = [
        ['rgba(0, 123, 255, 0.5)', 'rgba(0, 123, 255, 0.2)'],
        ['rgba(255, 48, 79, 0.5)', 'rgba(255, 48, 79, 0.2)'],
        ['rgba(131, 232, 90, 0.5)', 'rgba(131, 232, 90, 0.2)'],
        ['rgba(235, 123, 19, 0.5)', 'rgba(235, 123, 19, 0.2)'],
    ];

    const barWidthPx = Math.max(4, Math.min(24, Math.floor(600 / length)));

    const barStyle = {
        height: `${barHeight > 0 ? barHeight : 0}%`,
        backgroundColor: colors[color][0],
        transition: '0.3s',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    };

    const barValueStyle = {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        transform: 'scale(.6)',
        visibility: hidden ? 'hidden' : 'visible',
    };

    const barWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        width: `${barWidthPx}px`,
        position: 'relative',
        flex: `0 0 ${barWidthPx}px`,
    };

    const tooltipStyle = {
        bottom: `calc(${barHeight > 0 ? barHeight : 0}% + 25px)`,
    };

    return (
        <div className='bar-2d-wrapper' style={barWrapperStyle}>
            <div className='bar-2d'>
                <div style={barStyle}></div>
            </div>
            <div className="bar-tooltip" style={tooltipStyle}>{value}</div>
            {!hidden && (
                <div className='bar-2d-value' style={barValueStyle}>
                    {value}
                </div>
            )}
        </div>
    );
});

export default Bar2d;