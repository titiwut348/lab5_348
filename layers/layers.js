ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32648").setExtent([-49008.854995, 1384318.640278, -46753.881572, 1385570.035086]);
var wms_layers = [];


        var lyr_googlesatellite_0 = new ol.layer.Tile({
            'title': 'google satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_rmutr_1 = new ol.format.GeoJSON();
var features_rmutr_1 = format_rmutr_1.readFeatures(json_rmutr_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource_rmutr_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rmutr_1.addFeatures(features_rmutr_1);
var lyr_rmutr_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rmutr_1, 
                style: style_rmutr_1,
                popuplayertitle: 'rmutr',
                interactive: true,
    title: 'rmutr<br />\
    <img src="styles/legend/rmutr_1_0.png" /> ทางเข้า<br />\
    <img src="styles/legend/rmutr_1_1.png" /> วงเวียนเสาธง<br />\
    <img src="styles/legend/rmutr_1_2.png" /> <br />'
        });

lyr_googlesatellite_0.setVisible(true);lyr_rmutr_1.setVisible(true);
var layersList = [lyr_googlesatellite_0,lyr_rmutr_1];
lyr_rmutr_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_rmutr_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_rmutr_1.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', });
lyr_rmutr_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});