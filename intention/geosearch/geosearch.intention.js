/**
 * @namespace geoSearch
 * @description An intention that provides geo location search
 */

import 'rz-geosearch';

const provinceList = [{"code":"10","abbr":"NL","name":"Newfoundland and Labrador"},{"code":"11","abbr":"PE","name":"Prince Edward Island"},{"code":"12","abbr":"NS","name":"Nova Scotia"},{"code":"13","abbr":"NB","name":"New Brunswick"},{"code":"24","abbr":"QC","name":"Quebec"},{"code":"35","abbr":"ON","name":"Ontario"},{"code":"46","abbr":"MB","name":"Manitoba"},{"code":"47","abbr":"SK","name":"Saskatchewan"},{"code":"48","abbr":"AB","name":"Alberta"},{"code":"59","abbr":"BC","name":"British Columbia"},{"code":"60","abbr":"YU","name":"Yukon"},{"code":"61","abbr":"NT","name":"Northwest Territories"},{"code":"62","abbr":"NU","name":"Nunavut"},{"code":"72","abbr":"UF","name":"Undersea Feature"},{"code":"73","abbr":"IW","name":"International Waters"},{"code":-1,"abbr":"...","name":"..."}];
const typeList = [{"code":"PROV","name":"Province"},{"code":"TERR","name":"Territory"},{"code":"CITY","name":"City"},{"code":"TOWN","name":"Town"},{"code":"VILG","name":"Village"},{"code":"HAM","name":"Hamlet"},{"code":"UTM","name":"Upper Tier Municipality"},{"code":"LTM","name":"Lower Tier Municipality"},{"code":"STM","name":"Single Tier Municipality"},{"code":"MUN1","name":"Other Municipal-District Area-Major Agglom."},{"code":"MUN2","name":"Other Municipal-District Area-Miscellaneous"},{"code":"UNP","name":"Unincorporated place"},{"code":"IR","name":"Indian Reserve"},{"code":"GEOG","name":"Geographical Area"},{"code":"PARK","name":"Conservation Area"},{"code":"MIL","name":"Military Area"},{"code":"RIV","name":"River"},{"code":"RIVF","name":"River Feature"},{"code":"FALL","name":"Falls"},{"code":"LAKE","name":"Lake"},{"code":"SPRG","name":"Spring"},{"code":"SEA","name":"Sea"},{"code":"SEAF","name":"Sea Feature"},{"code":"SEAU","name":"Undersea Feature"},{"code":"CHAN","name":"Channel"},{"code":"RAP","name":"Rapids"},{"code":"BAY","name":"Bay"},{"code":"CAPE","name":"Cape"},{"code":"BCH","name":"Beach"},{"code":"SHL","name":"Shoal"},{"code":"ISL","name":"Island"},{"code":"CLF","name":"Cliff"},{"code":"MTN","name":"Mountain"},{"code":"VALL","name":"Valley"},{"code":"PLN","name":"Plain"},{"code":"CAVE","name":"Cave"},{"code":"CRAT","name":"Crater"},{"code":"GLAC","name":"Glacier"},{"code":"FOR","name":"Forest"},{"code":"VEGL","name":"Low Vegetation"},{"code":"MISC","name":"Miscellaneous"},{"code":"RAIL","name":"Railway Feature"},{"code":"ROAD","name":"Road Feature"},{"code":"AIR","name":"Air Navigation Feature"},{"code":"MAR","name":"Marine Navigation Feature"},{"code":"HYDR","name":"Hydraulic Construction"},{"code":"RECR","name":"Recreational Site"},{"code":"RES","name":"Natural Resources Site"},{"code":"CAMP","name":"Miscellaneous Campsite"},{"code":"SITE","name":"Miscellaneous Site"},{"code":"NTS","name":"NTS"},{"code":"FSA","name":"Postal Code"},{"code":"SCALE","name":"Scale"},{"code":"COORD","name":"Latitude/Longitude"},{"code":-1,"name":"..."}];

function findProvinceObj(province) {
    return provinceList.find(p => {
        return p.name === province;
    });
}

export default {
    query: q => {
        return new Promise((resolve) => {
            let geoSearch = new GeoSearch();
            geoSearch.query(q).onComplete.then(q => {
                let results = q.results.map(item => ({
                    name: item.name,
                    bbox: item.bbox,
                    type: {
                        name: item.type
                    },
                    position: [item.LatLon.lon, item.LatLon.lat],
                    location: {
                        city: item.location,
                        latitude: item.LatLon.lat,
                        longitude: item.LatLon.lon,
                        province: findProvinceObj(item.province)
                    }
                }));
                resolve(results);
            });
        });
    },
    fetchProvinces: () => {
        return new Promise((resolve) => {
            resolve(provinceList);
        });
    },
    fetchTypes: () => {
        return new Promise((resolve) => {
            resolve(typeList);
        });
    }
}
