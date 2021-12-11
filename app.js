fetch("./data.json")
.then(response => {
  return response.json();
})
.then(data => {
    const decade60 = data.filter(e => e.Decade == 60).slice(0,16).map(e => {
        e.chartData = {
            danceability: e.danceability,
            energy: e.energy,
            speechiness: e.speechiness,
            liveness: e.liveness,
            valence: e.valence 
        }
        return e;
    });
    // data.filter(function (e){ return e.Decade == 60})
    const decade70 = data.filter(e => e.Decade == 70).slice(0,16).map(e =>{
        e.chartData = {
            danceability: e.danceability,
            energy: e.energy,
            speechiness: e.speechiness,
            liveness: e.liveness,
            valence: e.valence 
        }
        return e;
    })
    const decade80 = data.filter(e => e.Decade == 80).slice(0,16).map(e =>{
        e.chartData = {
            danceability: e.danceability,
            energy: e.energy,
            speechiness: e.speechiness,
            liveness: e.liveness,
            valence: e.valence 
        }
        return e;
    })
    const decade90 = data.filter(e => e.Decade == 90).slice(0,16).map(e =>{
        e.chartData = {
            danceability: e.danceability,
            energy: e.energy,
            speechiness: e.speechiness,
            liveness: e.liveness,
            valence: e.valence 
        }
        return e;
    })
    const decade00 = data.filter(e => e.Decade == 2000).slice(0,16).map(e =>{
        e.chartData = {
            danceability: e.danceability,
            energy: e.energy,
            speechiness: e.speechiness,
            liveness: e.liveness,
            valence: e.valence 
        }
        return e;
    })

    // console.log(decade60)

// .single polygon {
//     fill: #8A23FF;
// }


RadarChart.defaultConfig.color = function() {};
RadarChart.defaultConfig.radius = 0;
RadarChart.defaultConfig.w = 115;
RadarChart.defaultConfig.h = 115;



function dataset(da) {
    // console.log(Object.entries(da))
    return {
        axes: Object.entries(da).map(function(axis) {
            return {axis: axis[0], value: axis[1]};
        })
    };
}



// var chart = RadarChart.chart();
// var cfg = chart.config(); // retrieve default config
// var svg = d3.select('body').append('svg')
//   .attr('width', cfg.w + cfg.w + 50)
//   .attr('height', cfg.h + cfg.h / 4);
// svg.append('g').classed('single', 1).datum(dataset()).call(chart);
var tip = d3.select("body")
    .append("div")
    .attr("class", "tip")
    .style("opacity", 0);
    
var drawChart = function (decade) {
document.querySelector('#chart').innerHTML = "";
    for (var i = 0; i < decade.length; i++) {
        var svgWrapper = document.createElement('div');
        svgWrapper.className = "svg_wrapper"+i;
        document.querySelector('#chart').appendChild(svgWrapper);
        
        var chart = RadarChart.chart();
        var cfg = chart.config(); // retrieve default config
        var svg = d3.select('.svg_wrapper'+i)
        .append('svg')
        .classed('polygon'+i, 1)
        .attr('width', cfg.w + 50)
        .attr('height', cfg.h);
        svg.append('g').classed('single', 1)
        .datum([dataset(decade[i].chartData)])
        .on("mousemove", (d, i) => {
            // console.log(d)
            const tooltipData = d[0].axes;
            tip.html(`
            <div class="tooltip">
                <div>${tooltipData[0].axis} : ${tooltipData[0].value}</div>
                <div>${tooltipData[1].axis} : ${tooltipData[1].value}</div>
                <div>${tooltipData[2].axis} : ${tooltipData[2].value}</div>
                <div>${tooltipData[3].axis} : ${tooltipData[3].value}</div>
                <div>${tooltipData[4].axis} : ${tooltipData[4].value}</div>
            </div>
            `)
            .style("left", d3.event.pageX + 10 + "px")
            .style("top", d3.event.pageY + "px")
            .style("opacity", 1)
        }).on("mouseout", () => {
            tip.style("opacity", 0)
        })
        .call(chart);
        
        const description = document.createElement('div')
        description.innerHTML = `<div class = "info" style='color:white;'>
            <div class = "name">${decade[i].Name}</div>
            <div class = "artist">${decade[i].Artist}</div>
        </div>
        `;
        svgWrapper.appendChild(description)
    
    }
}

drawChart(decade60);
    var titleTag = document.querySelector(".title1");
    var titleTag2 = document.querySelector(".title2");
    titleTag.innerText = "1960'S";
    titleTag.style.color = "#8A23FF";
    titleTag2.style.color = "#8A23FF";
    
    // console.log([...document.querySelectorAll(".single polygon")][1])
    const polygons = [...document.querySelectorAll(".single polygon")];
    polygons.forEach(e => e.style.fill = "#8A23FF");

document.querySelector('.button60s').onclick = function(){
    drawChart(decade60);
    var titleTag = document.querySelector(".title1");
    var titleTag2 = document.querySelector(".title2");
    titleTag.innerText = "1960'S";
    titleTag.style.color = "#8A23FF";
    titleTag2.style.color = "#8A23FF";
    
    // console.log([...document.querySelectorAll(".single polygon")][1])
    const polygons = [...document.querySelectorAll(".single polygon")];
    polygons.forEach(e => e.style.fill = "#8A23FF");

};

document.querySelector('.button70s').onclick = function(){
    drawChart(decade70);
    var titleTag = document.querySelector(".title1");
    var titleTag2 = document.querySelector(".title2");
    titleTag.innerText = "1970'S";
    titleTag.style.color = "#DF44A6";
    titleTag2.style.color = "#DF44A6";
    const polygons = [...document.querySelectorAll(".single polygon")];
    polygons.forEach(e => e.style.fill = "#DF44A6");
};
    
    


document.querySelector('.button80s').onclick = function(){
    drawChart(decade80);
    var titleTag = document.querySelector(".title1");
    var titleTag2 = document.querySelector(".title2");
    titleTag.innerText = "1980'S";
    titleTag.style.color = "#D4F570";
    titleTag2.style.color = "#D4F570";
    const polygons = [...document.querySelectorAll(".single polygon")];
    polygons.forEach(e => e.style.fill = "#D4F570");
};

document.querySelector('.button90s').onclick = function(){
    drawChart(decade90);
    var titleTag = document.querySelector(".title1");
    var titleTag2 = document.querySelector(".title2");
    titleTag.innerText = "1990'S";
    titleTag.style.color = "#22FFF2";
    titleTag2.style.color = "#22FFF2";
    const polygons = [...document.querySelectorAll(".single polygon")];
    polygons.forEach(e => e.style.fill = "#22FFF2");
};

document.querySelector('.button00s').onclick = function(){
    drawChart(decade00);
    var titleTag = document.querySelector(".title1");
    var titleTag2 = document.querySelector(".title2");
    titleTag.innerText = "2000'S";
    titleTag.style.color = "#227AFF";
    titleTag2.style.color = "#227AFF";
    const polygons = [...document.querySelectorAll(".single polygon")];
    polygons.forEach(e => e.style.fill = "#227AFF");
};









});