import React, { Component } from 'react';
import * as d3 from 'd3';
import './tree-chart.css';

class TreeChart extends Component {

    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    index = 0;
    duration = 750;
    root;
    svg;

    margin = () => { return {top: 20, right: 90, bottom: 30, left: 90}};
    width = () => (960 - this.margin().left - this.margin().right);
    height = () => (800 - this.margin().top - this.margin().bottom);

    treemap = d3.tree().size([this.height(), this.width()]);

    _update() {
        this.svg = d3.select(this.svgEl);
        const _ctx = this;
        this.svg.attr('width', this.width() + this.margin().right + this.margin().left)
        .attr('height', this.height() + this.margin().top + this.margin().bottom)
        .append("g").attr("transform", "translate("
          + this.margin().left + "," + this.margin().top + ")");


          
        const {data} = this.props;
        this.root = d3.hierarchy(data, (d) => { return d.children; });
        this.root.x0 = _ctx.height() / 2;
        this.root.y0 = 0;

        this.update(this.root);
    }

    update(source) {
        var treeData = this.treemap(this.root);

        // Compute the new tree layout.
        var nodes = treeData.descendants(),
            links = treeData.descendants().slice(1);

        // Normalize for fixed-depth.
        nodes.forEach((d) => { d.y = d.depth * 180});

        // Update the nodes...
        var node = this.svg.selectAll('g.node')
        .data(nodes, (d) => {return d.id || (d.id = ++this.index); });

        // Enter any new modes at the parent's previous position.
        var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", (d) => {
            return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on('click', this.click);

        // Add Circle for the nodes
        nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style("fill", (d) => {
            return d._children ? "#42096d" : "#fff";
        });

        // Add labels for the nodes
        nodeEnter.append('text')
        .attr("dy", ".35em")
        .attr("x", (d) => {
            return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", (d) => {
            return d.children || d._children ? "end" : "start";
        })
        .text((d) => { return d.data.name; });

         // UPDATE
        var nodeUpdate = nodeEnter.merge(node);

        // Transition to the proper position for the node
        nodeUpdate.transition()
            .duration(this.duration)
            .attr("transform", (d) => { 
                return "translate(" + d.y + "," + d.x + ")";
            });

            // Update the node attributes and style
        nodeUpdate.select('circle.node')
            .attr('r', 10)
            .style("fill", (d) => {
                return d._children ? "#42096d" : "#fff";
            }).style("stroke", (d) => {
                return d._children ? "none" : "rgb(71, 16, 173)";
            })
            .attr('cursor', 'pointer');

        // Remove any exiting nodes
        var nodeExit = node.exit().transition()
            .duration(this.duration)
            .attr("transform", (d) => {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        // On exit reduce the node circles size to 0
        nodeExit.select('circle')
        .attr('r', 1e-6);

        // On exit reduce the opacity of text labels
        nodeExit.select('text')
        .style('fill-opacity', 1e-6);

        // Update the links...
        var link = this.svg.selectAll('path.link')
            .data(links, (d) => { return d.id; });

            // Enter any new links at the parent's previous position.
        var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', (d) => {
            var o = {x: source.x0, y: source.y0}
            return this.diagonal(o, o)
        });

        // UPDATE
        var linkUpdate = linkEnter.merge(link);

        // Transition back to the parent element position
        linkUpdate.transition()
        .duration(this.duration)
        .attr('d', (d) => { return this.diagonal(d, d.parent) });

        // Remove any exiting links
        var linkExit = link.exit().transition()
        .duration(this.duration)
        .attr('d', (d) => {
            var o = {x: source.x, y: source.y}
            return this.diagonal(o, o)
        })
        .remove();

        // Store the old positions for transition.
        nodes.forEach((d) => {
            d.x0 = d.x;
            d.y0 = d.y;
        });

    }


    diagonal(s, d) {
        var path = `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`
    
        return path
      }
    
      click(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
        this.update(d);
      }

    componentDidMount() {
        this._update();
    }

    componentDidUpdate() {
        this._update();
    }

    render() {

        
        return <svg  ref={el => this.svgEl = el} />
    }
}

export default TreeChart;