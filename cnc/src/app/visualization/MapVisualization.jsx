import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function MapVisualization({map_data, width_in, height_in, scale_factor, marginLeft}) {
  const svgRef = useRef();

  useEffect(() => {
    const width  = width_in;
    const height = height_in;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`);

    svg.selectAll("*").remove();

    const projection    = d3.geoMercator().scale(1).translate([0, 0]);
    const pathGenerator = d3.geoPath().projection(projection);

    const bounds = pathGenerator.bounds(map_data);
    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    const xCenter = (bounds[0][0] + bounds[1][0]) / 2;
    const yCenter = (bounds[0][1] + bounds[1][1]) / 2;

    const scale = scale_factor / Math.max(dx / width, dy / height);
    const translate = [width / 2 - scale * xCenter, height / 2 - scale * yCenter];

    projection.scale(scale).translate(translate);

    const fittedPath = d3.geoPath().projection(projection);

    svg.selectAll("path")
      .data(map_data.features)
      .enter()
      .append("path")
      .attr("d", fittedPath)
      .attr("fill", "rgba(34, 34, 201, 0.4)")
      .attr("stroke", "yellow")
      .attr("stroke-width", 1);
  }, [map_data]);

  return (
      /*<svg ref={svgRef} style={{ width: "100%", height: "500px" }} />*/
      <svg ref={svgRef} style={{ width: `${width_in}px`, height: `${height_in}px`, marginLeft: `${marginLeft}px`}}/>

  );
}
