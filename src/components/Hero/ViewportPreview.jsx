import { useState } from "react";

const viewportOptions = [
  {
    width: 375,
    label: "mobile",
  },
  {
    width: 768,
    label: "tablet",
  },
  {
    width: 1280,
    label: "desktop",
  },
];

export default function ViewportPreview() {
  const [viewport, setViewport] = useState(1280);

  const activeViewport = viewportOptions.find(
    (item) => item.width === viewport
  );

  return (
    <div className="viewport-preview">
      <div
        className="viewport-preview__bar"
        role="group"
        aria-label="Preview width"
      >
        {viewportOptions.map((item) => (
          <button
            key={item.width}
            type="button"
            className="viewport-preview__button"
            aria-pressed={viewport === item.width}
            onClick={() => setViewport(item.width)}
          >
            {item.width}
          </button>
        ))}

        <span className="viewport-preview__readout">
          {viewport}px · {activeViewport.label}
        </span>
      </div>

      <div className="viewport-preview__stage">
        <div
          className="viewport-preview__frame"
          data-width={viewport}
        >
          <div className="viewport-preview__chrome">
            <span />
            <span />
            <span />
          </div>

          <div className="viewport-preview__body">
            <div className="mock-heading" />
            <div className="mock-subheading" />

            <div className="mock-grid">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <p className="viewport-preview__note">
        Every build is checked at these three widths before it ships.
      </p>
    </div>
  );
}