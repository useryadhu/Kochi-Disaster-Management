var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KERALA_1 = new ol.format.GeoJSON();
var features_KERALA_1 = format_KERALA_1.readFeatures(json_KERALA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KERALA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KERALA_1.addFeatures(features_KERALA_1);
var lyr_KERALA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KERALA_1, 
                style: style_KERALA_1,
                interactive: true,
                title: '<img src="styles/legend/KERALA_1.png" /> KERALA'
            });
var format_VULNARIBILITYFORFLOOD_2 = new ol.format.GeoJSON();
var features_VULNARIBILITYFORFLOOD_2 = format_VULNARIBILITYFORFLOOD_2.readFeatures(json_VULNARIBILITYFORFLOOD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VULNARIBILITYFORFLOOD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VULNARIBILITYFORFLOOD_2.addFeatures(features_VULNARIBILITYFORFLOOD_2);
var lyr_VULNARIBILITYFORFLOOD_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VULNARIBILITYFORFLOOD_2, 
                style: style_VULNARIBILITYFORFLOOD_2,
                interactive: true,
    title: 'VULNARIBILITY FOR FLOOD<br />\
    <img src="styles/legend/VULNARIBILITYFORFLOOD_2_0.png" /> VERY HIGH<br />\
    <img src="styles/legend/VULNARIBILITYFORFLOOD_2_1.png" /> HIGH<br />\
    <img src="styles/legend/VULNARIBILITYFORFLOOD_2_2.png" /> MODERATE<br />\
    <img src="styles/legend/VULNARIBILITYFORFLOOD_2_3.png" /> LOW<br />\
    <img src="styles/legend/VULNARIBILITYFORFLOOD_2_4.png" /> LESS<br />'
        });
var format_WATERBODY_3 = new ol.format.GeoJSON();
var features_WATERBODY_3 = format_WATERBODY_3.readFeatures(json_WATERBODY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATERBODY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATERBODY_3.addFeatures(features_WATERBODY_3);
var lyr_WATERBODY_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WATERBODY_3, 
                style: style_WATERBODY_3,
                interactive: true,
                title: '<img src="styles/legend/WATERBODY_3.png" /> WATERBODY'
            });
var format_LOCAL_BODIES_4 = new ol.format.GeoJSON();
var features_LOCAL_BODIES_4 = format_LOCAL_BODIES_4.readFeatures(json_LOCAL_BODIES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOCAL_BODIES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOCAL_BODIES_4.addFeatures(features_LOCAL_BODIES_4);
var lyr_LOCAL_BODIES_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOCAL_BODIES_4, 
                style: style_LOCAL_BODIES_4,
                interactive: true,
                title: '<img src="styles/legend/LOCAL_BODIES_4.png" /> LOCAL_BODIES'
            });
var format_NH_5 = new ol.format.GeoJSON();
var features_NH_5 = format_NH_5.readFeatures(json_NH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NH_5.addFeatures(features_NH_5);
var lyr_NH_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NH_5, 
                style: style_NH_5,
                interactive: true,
                title: '<img src="styles/legend/NH_5.png" /> NH'
            });
var format_SAFESTESCAPEROUTE_6 = new ol.format.GeoJSON();
var features_SAFESTESCAPEROUTE_6 = format_SAFESTESCAPEROUTE_6.readFeatures(json_SAFESTESCAPEROUTE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAFESTESCAPEROUTE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAFESTESCAPEROUTE_6.addFeatures(features_SAFESTESCAPEROUTE_6);
var lyr_SAFESTESCAPEROUTE_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAFESTESCAPEROUTE_6, 
                style: style_SAFESTESCAPEROUTE_6,
                interactive: true,
                title: '<img src="styles/legend/SAFESTESCAPEROUTE_6.png" /> SAFEST ESCAPE ROUTE'
            });
var format_GATHERINGPOINT_7 = new ol.format.GeoJSON();
var features_GATHERINGPOINT_7 = format_GATHERINGPOINT_7.readFeatures(json_GATHERINGPOINT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GATHERINGPOINT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GATHERINGPOINT_7.addFeatures(features_GATHERINGPOINT_7);
var lyr_GATHERINGPOINT_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GATHERINGPOINT_7, 
                style: style_GATHERINGPOINT_7,
                interactive: true,
                title: '<img src="styles/legend/GATHERINGPOINT_7.png" /> GATHERING POINT'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KERALA_1.setVisible(true);lyr_VULNARIBILITYFORFLOOD_2.setVisible(true);lyr_WATERBODY_3.setVisible(true);lyr_LOCAL_BODIES_4.setVisible(true);lyr_NH_5.setVisible(true);lyr_SAFESTESCAPEROUTE_6.setVisible(true);lyr_GATHERINGPOINT_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KERALA_1,lyr_VULNARIBILITYFORFLOOD_2,lyr_WATERBODY_3,lyr_LOCAL_BODIES_4,lyr_NH_5,lyr_SAFESTESCAPEROUTE_6,lyr_GATHERINGPOINT_7];
lyr_KERALA_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ISO3166-2': 'ISO3166-2', 'admin_leve': 'admin_leve', 'boundary': 'boundary', 'is_in_coun': 'is_in_coun', 'name': 'name', 'name_ar': 'name_ar', 'name_cs': 'name_cs', 'name_en': 'name_en', 'name_eo': 'name_eo', 'name_hi': 'name_hi', 'name_ja': 'name_ja', 'name_kn': 'name_kn', 'name_ku': 'name_ku', 'name_ml': 'name_ml', 'name_pa': 'name_pa', 'name_ru': 'name_ru', 'name_ta': 'name_ta', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zh': 'name_zh', 'ref': 'ref', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'local_auth': 'local_auth', 'ward': 'ward', 'leisure': 'leisure', 'protect_cl': 'protect_cl', 'place': 'place', });
lyr_VULNARIBILITYFORFLOOD_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'name_ml': 'name_ml', 'natural': 'natural', 'type': 'type', 'water': 'water', 'name_hi': 'name_hi', 'alt_name_e': 'alt_name_e', 'alt_name_1': 'alt_name_1', 'alt_name_f': 'alt_name_f', 'gns_dsg': 'gns_dsg', 'gns_uni': 'gns_uni', 'name_ar': 'name_ar', 'name_be': 'name_be', 'name_cs': 'name_cs', 'name_de': 'name_de', 'name_en': 'name_en', 'name_eo': 'name_eo', 'name_es': 'name_es', 'name_fa': 'name_fa', 'name_fr': 'name_fr', 'name_hr': 'name_hr', 'name_hu': 'name_hu', 'name_ia': 'name_ia', 'name_kn': 'name_kn', 'name_ko': 'name_ko', 'name_lt': 'name_lt', 'name_mk': 'name_mk', 'name_no': 'name_no', 'name_pl': 'name_pl', 'name_ru': 'name_ru', 'name_sk': 'name_sk', 'name_ta': 'name_ta', 'name_uk': 'name_uk', 'name_zh': 'name_zh', 'place': 'place', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'tidal': 'tidal', 'intermitte': 'intermitte', 'is_in': 'is_in', 'is_in_arch': 'is_in_arch', 'is_in_coun': 'is_in_coun', 'is_in_stat': 'is_in_stat', 'alt_name': 'alt_name', 'is_in_co_1': 'is_in_co_1', 'ele': 'ele', 'descriptio': 'descriptio', 'postal_cod': 'postal_cod', 'surface': 'surface', 'access': 'access', 'website': 'website', 'name_dv': 'name_dv', 'wheelchair': 'wheelchair', 'tourism': 'tourism', 'url': 'url', 'operator': 'operator', 'wikimedia_': 'wikimedia_', 'landuse': 'landuse', 'amenity': 'amenity', 'is_in_cont': 'is_in_cont', 'contact_em': 'contact_em', 'contact_fa': 'contact_fa', 'contact_ph': 'contact_ph', 'leisure': 'leisure', 'addr_city': 'addr_city', 'population': 'population', 'AND_a_i': 'AND_a_i', 'alt_name_a': 'alt_name_a', 'man_made': 'man_made', 'is_capital': 'is_capital', 'is_in_sea': 'is_in_sea', 'designatio': 'designatio', 'constructi': 'constructi', 'short_name': 'short_name', 'building': 'building', 'religion': 'religion', 'bridge_sup': 'bridge_sup', 'wetland': 'wetland', 'salt': 'salt', 'seasonal': 'seasonal', 'produce': 'produce', 'crop': 'crop', 'reservoir_': 'reservoir_', 'fishing': 'fishing', 'landcover': 'landcover', 'addr_postc': 'addr_postc', 'ringId': 'ringId', 'distance': 'distance', 'id': 'id', 'kcr': 'kcr', });
lyr_WATERBODY_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'name_ml': 'name_ml', 'natural': 'natural', 'type': 'type', 'water': 'water', 'name_hi': 'name_hi', 'alt_name_e': 'alt_name_e', 'alt_name_1': 'alt_name_1', 'alt_name_f': 'alt_name_f', 'gns_dsg': 'gns_dsg', 'gns_uni': 'gns_uni', 'name_ar': 'name_ar', 'name_be': 'name_be', 'name_cs': 'name_cs', 'name_de': 'name_de', 'name_en': 'name_en', 'name_eo': 'name_eo', 'name_es': 'name_es', 'name_fa': 'name_fa', 'name_fr': 'name_fr', 'name_hr': 'name_hr', 'name_hu': 'name_hu', 'name_ia': 'name_ia', 'name_kn': 'name_kn', 'name_ko': 'name_ko', 'name_lt': 'name_lt', 'name_mk': 'name_mk', 'name_no': 'name_no', 'name_pl': 'name_pl', 'name_ru': 'name_ru', 'name_sk': 'name_sk', 'name_ta': 'name_ta', 'name_uk': 'name_uk', 'name_zh': 'name_zh', 'place': 'place', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'tidal': 'tidal', 'intermitte': 'intermitte', 'is_in': 'is_in', 'is_in_arch': 'is_in_arch', 'is_in_coun': 'is_in_coun', 'is_in_stat': 'is_in_stat', 'alt_name': 'alt_name', 'is_in_co_1': 'is_in_co_1', 'ele': 'ele', 'descriptio': 'descriptio', 'postal_cod': 'postal_cod', 'surface': 'surface', 'access': 'access', 'website': 'website', 'name_dv': 'name_dv', 'wheelchair': 'wheelchair', 'tourism': 'tourism', 'url': 'url', 'operator': 'operator', 'wikimedia_': 'wikimedia_', 'landuse': 'landuse', 'amenity': 'amenity', 'is_in_cont': 'is_in_cont', 'contact_em': 'contact_em', 'contact_fa': 'contact_fa', 'contact_ph': 'contact_ph', 'leisure': 'leisure', 'addr_city': 'addr_city', 'population': 'population', 'AND_a_i': 'AND_a_i', 'alt_name_a': 'alt_name_a', 'man_made': 'man_made', 'is_capital': 'is_capital', 'is_in_sea': 'is_in_sea', 'designatio': 'designatio', 'constructi': 'constructi', 'short_name': 'short_name', 'building': 'building', 'religion': 'religion', 'bridge_sup': 'bridge_sup', 'wetland': 'wetland', 'salt': 'salt', 'seasonal': 'seasonal', 'produce': 'produce', 'crop': 'crop', 'reservoir_': 'reservoir_', 'fishing': 'fishing', 'landcover': 'landcover', 'addr_postc': 'addr_postc', });
lyr_LOCAL_BODIES_4.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Pop_Den': 'Pop_Den', 'Pop_Den01': 'Pop_Den01', 'percentinc': 'percentinc', });
lyr_NH_5.set('fieldAliases', {'NAME': 'NAME', });
lyr_SAFESTESCAPEROUTE_6.set('fieldAliases', {'NAME': 'NAME', });
lyr_GATHERINGPOINT_7.set('fieldAliases', {'id': 'id', 'PLACE': 'PLACE', });
lyr_KERALA_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ISO3166-2': 'TextEdit', 'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'is_in_coun': 'TextEdit', 'name': 'TextEdit', 'name_ar': 'TextEdit', 'name_cs': 'TextEdit', 'name_en': 'TextEdit', 'name_eo': 'TextEdit', 'name_hi': 'TextEdit', 'name_ja': 'TextEdit', 'name_kn': 'TextEdit', 'name_ku': 'TextEdit', 'name_ml': 'TextEdit', 'name_pa': 'TextEdit', 'name_ru': 'TextEdit', 'name_ta': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_zh': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'local_auth': 'TextEdit', 'ward': 'TextEdit', 'leisure': 'TextEdit', 'protect_cl': 'TextEdit', 'place': 'TextEdit', });
lyr_VULNARIBILITYFORFLOOD_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'name_ml': 'TextEdit', 'natural': 'TextEdit', 'type': 'TextEdit', 'water': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name_e': 'TextEdit', 'alt_name_1': 'TextEdit', 'alt_name_f': 'TextEdit', 'gns_dsg': 'TextEdit', 'gns_uni': 'TextEdit', 'name_ar': 'TextEdit', 'name_be': 'TextEdit', 'name_cs': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_eo': 'TextEdit', 'name_es': 'TextEdit', 'name_fa': 'TextEdit', 'name_fr': 'TextEdit', 'name_hr': 'TextEdit', 'name_hu': 'TextEdit', 'name_ia': 'TextEdit', 'name_kn': 'TextEdit', 'name_ko': 'TextEdit', 'name_lt': 'TextEdit', 'name_mk': 'TextEdit', 'name_no': 'TextEdit', 'name_pl': 'TextEdit', 'name_ru': 'TextEdit', 'name_sk': 'TextEdit', 'name_ta': 'TextEdit', 'name_uk': 'TextEdit', 'name_zh': 'TextEdit', 'place': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'tidal': 'TextEdit', 'intermitte': 'TextEdit', 'is_in': 'TextEdit', 'is_in_arch': 'TextEdit', 'is_in_coun': 'TextEdit', 'is_in_stat': 'TextEdit', 'alt_name': 'TextEdit', 'is_in_co_1': 'TextEdit', 'ele': 'TextEdit', 'descriptio': 'TextEdit', 'postal_cod': 'TextEdit', 'surface': 'TextEdit', 'access': 'TextEdit', 'website': 'TextEdit', 'name_dv': 'TextEdit', 'wheelchair': 'TextEdit', 'tourism': 'TextEdit', 'url': 'TextEdit', 'operator': 'TextEdit', 'wikimedia_': 'TextEdit', 'landuse': 'TextEdit', 'amenity': 'TextEdit', 'is_in_cont': 'TextEdit', 'contact_em': 'TextEdit', 'contact_fa': 'TextEdit', 'contact_ph': 'TextEdit', 'leisure': 'TextEdit', 'addr_city': 'TextEdit', 'population': 'TextEdit', 'AND_a_i': 'TextEdit', 'alt_name_a': 'TextEdit', 'man_made': 'TextEdit', 'is_capital': 'TextEdit', 'is_in_sea': 'TextEdit', 'designatio': 'TextEdit', 'constructi': 'TextEdit', 'short_name': 'TextEdit', 'building': 'TextEdit', 'religion': 'TextEdit', 'bridge_sup': 'TextEdit', 'wetland': 'TextEdit', 'salt': 'TextEdit', 'seasonal': 'TextEdit', 'produce': 'TextEdit', 'crop': 'TextEdit', 'reservoir_': 'TextEdit', 'fishing': 'TextEdit', 'landcover': 'TextEdit', 'addr_postc': 'TextEdit', 'ringId': 'TextEdit', 'distance': 'TextEdit', 'id': 'TextEdit', 'kcr': 'TextEdit', });
lyr_WATERBODY_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'name_ml': '', 'natural': 'TextEdit', 'type': 'TextEdit', 'water': 'TextEdit', 'name_hi': '', 'alt_name_e': '', 'alt_name_1': '', 'alt_name_f': '', 'gns_dsg': '', 'gns_uni': '', 'name_ar': '', 'name_be': '', 'name_cs': '', 'name_de': '', 'name_en': '', 'name_eo': '', 'name_es': '', 'name_fa': '', 'name_fr': '', 'name_hr': '', 'name_hu': '', 'name_ia': '', 'name_kn': '', 'name_ko': '', 'name_lt': '', 'name_mk': '', 'name_no': '', 'name_pl': '', 'name_ru': '', 'name_sk': '', 'name_ta': '', 'name_uk': '', 'name_zh': '', 'place': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'tidal': 'TextEdit', 'intermitte': '', 'is_in': 'TextEdit', 'is_in_arch': '', 'is_in_coun': '', 'is_in_stat': '', 'alt_name': 'TextEdit', 'is_in_co_1': '', 'ele': 'TextEdit', 'descriptio': '', 'postal_cod': '', 'surface': 'TextEdit', 'access': 'TextEdit', 'website': 'TextEdit', 'name_dv': '', 'wheelchair': 'TextEdit', 'tourism': 'TextEdit', 'url': 'TextEdit', 'operator': 'TextEdit', 'wikimedia_': '', 'landuse': 'TextEdit', 'amenity': 'TextEdit', 'is_in_cont': '', 'contact_em': '', 'contact_fa': '', 'contact_ph': '', 'leisure': 'TextEdit', 'addr_city': '', 'population': 'TextEdit', 'AND_a_i': 'TextEdit', 'alt_name_a': '', 'man_made': 'TextEdit', 'is_capital': 'TextEdit', 'is_in_sea': '', 'designatio': '', 'constructi': '', 'short_name': 'TextEdit', 'building': 'TextEdit', 'religion': 'TextEdit', 'bridge_sup': '', 'wetland': 'TextEdit', 'salt': 'TextEdit', 'seasonal': 'TextEdit', 'produce': 'TextEdit', 'crop': 'TextEdit', 'reservoir_': '', 'fishing': 'TextEdit', 'landcover': 'TextEdit', 'addr_postc': '', });
lyr_LOCAL_BODIES_4.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Pop_Den': 'Range', 'Pop_Den01': 'Range', 'percentinc': 'TextEdit', });
lyr_NH_5.set('fieldImages', {'NAME': 'TextEdit', });
lyr_SAFESTESCAPEROUTE_6.set('fieldImages', {'NAME': 'TextEdit', });
lyr_GATHERINGPOINT_7.set('fieldImages', {'id': 'TextEdit', 'PLACE': 'TextEdit', });
lyr_KERALA_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ISO3166-2': 'no label', 'admin_leve': 'no label', 'boundary': 'no label', 'is_in_coun': 'no label', 'name': 'no label', 'name_ar': 'no label', 'name_cs': 'no label', 'name_en': 'no label', 'name_eo': 'no label', 'name_hi': 'no label', 'name_ja': 'no label', 'name_kn': 'no label', 'name_ku': 'no label', 'name_ml': 'no label', 'name_pa': 'no label', 'name_ru': 'no label', 'name_ta': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_zh': 'no label', 'ref': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'local_auth': 'no label', 'ward': 'no label', 'leisure': 'no label', 'protect_cl': 'no label', 'place': 'no label', });
lyr_VULNARIBILITYFORFLOOD_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'name_ml': 'no label', 'natural': 'no label', 'type': 'no label', 'water': 'no label', 'name_hi': 'no label', 'alt_name_e': 'no label', 'alt_name_1': 'no label', 'alt_name_f': 'no label', 'gns_dsg': 'no label', 'gns_uni': 'no label', 'name_ar': 'no label', 'name_be': 'no label', 'name_cs': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_eo': 'no label', 'name_es': 'no label', 'name_fa': 'no label', 'name_fr': 'no label', 'name_hr': 'no label', 'name_hu': 'no label', 'name_ia': 'no label', 'name_kn': 'no label', 'name_ko': 'no label', 'name_lt': 'no label', 'name_mk': 'no label', 'name_no': 'no label', 'name_pl': 'no label', 'name_ru': 'no label', 'name_sk': 'no label', 'name_ta': 'no label', 'name_uk': 'no label', 'name_zh': 'no label', 'place': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'tidal': 'no label', 'intermitte': 'no label', 'is_in': 'no label', 'is_in_arch': 'no label', 'is_in_coun': 'no label', 'is_in_stat': 'no label', 'alt_name': 'no label', 'is_in_co_1': 'no label', 'ele': 'no label', 'descriptio': 'no label', 'postal_cod': 'no label', 'surface': 'no label', 'access': 'no label', 'website': 'no label', 'name_dv': 'no label', 'wheelchair': 'no label', 'tourism': 'no label', 'url': 'no label', 'operator': 'no label', 'wikimedia_': 'no label', 'landuse': 'no label', 'amenity': 'no label', 'is_in_cont': 'no label', 'contact_em': 'no label', 'contact_fa': 'no label', 'contact_ph': 'no label', 'leisure': 'no label', 'addr_city': 'no label', 'population': 'no label', 'AND_a_i': 'no label', 'alt_name_a': 'no label', 'man_made': 'no label', 'is_capital': 'no label', 'is_in_sea': 'no label', 'designatio': 'no label', 'constructi': 'no label', 'short_name': 'no label', 'building': 'no label', 'religion': 'no label', 'bridge_sup': 'no label', 'wetland': 'no label', 'salt': 'no label', 'seasonal': 'no label', 'produce': 'no label', 'crop': 'no label', 'reservoir_': 'no label', 'fishing': 'no label', 'landcover': 'no label', 'addr_postc': 'no label', 'ringId': 'no label', 'distance': 'no label', 'id': 'no label', 'kcr': 'no label', });
lyr_WATERBODY_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'name_ml': 'no label', 'natural': 'no label', 'type': 'no label', 'water': 'no label', 'name_hi': 'no label', 'alt_name_e': 'no label', 'alt_name_1': 'no label', 'alt_name_f': 'no label', 'gns_dsg': 'no label', 'gns_uni': 'no label', 'name_ar': 'no label', 'name_be': 'no label', 'name_cs': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_eo': 'no label', 'name_es': 'no label', 'name_fa': 'no label', 'name_fr': 'no label', 'name_hr': 'no label', 'name_hu': 'no label', 'name_ia': 'no label', 'name_kn': 'no label', 'name_ko': 'no label', 'name_lt': 'no label', 'name_mk': 'no label', 'name_no': 'no label', 'name_pl': 'no label', 'name_ru': 'no label', 'name_sk': 'no label', 'name_ta': 'no label', 'name_uk': 'no label', 'name_zh': 'no label', 'place': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'tidal': 'no label', 'intermitte': 'no label', 'is_in': 'no label', 'is_in_arch': 'no label', 'is_in_coun': 'no label', 'is_in_stat': 'no label', 'alt_name': 'no label', 'is_in_co_1': 'no label', 'ele': 'no label', 'descriptio': 'no label', 'postal_cod': 'no label', 'surface': 'no label', 'access': 'no label', 'website': 'no label', 'name_dv': 'no label', 'wheelchair': 'no label', 'tourism': 'no label', 'url': 'no label', 'operator': 'no label', 'wikimedia_': 'no label', 'landuse': 'no label', 'amenity': 'no label', 'is_in_cont': 'no label', 'contact_em': 'no label', 'contact_fa': 'no label', 'contact_ph': 'no label', 'leisure': 'no label', 'addr_city': 'no label', 'population': 'no label', 'AND_a_i': 'no label', 'alt_name_a': 'no label', 'man_made': 'no label', 'is_capital': 'no label', 'is_in_sea': 'no label', 'designatio': 'no label', 'constructi': 'no label', 'short_name': 'no label', 'building': 'no label', 'religion': 'no label', 'bridge_sup': 'no label', 'wetland': 'no label', 'salt': 'no label', 'seasonal': 'no label', 'produce': 'no label', 'crop': 'no label', 'reservoir_': 'no label', 'fishing': 'no label', 'landcover': 'no label', 'addr_postc': 'no label', });
lyr_LOCAL_BODIES_4.set('fieldLabels', {'Id': 'no label', 'Name': 'inline label', 'Pop_Den': 'no label', 'Pop_Den01': 'no label', 'percentinc': 'no label', });
lyr_NH_5.set('fieldLabels', {'NAME': 'no label', });
lyr_SAFESTESCAPEROUTE_6.set('fieldLabels', {'NAME': 'no label', });
lyr_GATHERINGPOINT_7.set('fieldLabels', {'id': 'no label', 'PLACE': 'no label', });
lyr_GATHERINGPOINT_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});