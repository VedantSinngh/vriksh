export function HighlightsSection() {
  const highlights = [
    "Fitness Lab and Room",
    "Swimming Pools",
    "Parking Facility",
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-start space-x-2">
        <h3 className="font-semibold text-[#6D7175]">Highlights:</h3>
        <div className="flex flex-col space-y-2">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src="/click.png" alt="icon" className="h-5 w-5" />
              <span className="text-[#6D7175]">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
