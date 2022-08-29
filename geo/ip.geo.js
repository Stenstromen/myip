const geoip = require("fast-geoip");

async function fetchGeo(ipaddr) {
  const geo = await geoip.lookup(ipaddr);
  const response = `IP address:             ${ipaddr}
Country:                ${geo.country}
Is EU?:                 ${geo.eu == 1 ? "Yes" : "No"}
Latitude:               ${geo.ll[0]}
Longitude:              ${geo.ll[1]}
Timezone:               ${geo.timezone}
Accuracy Radius (km):   ${geo.area}`;
  return response;
}

module.exports = fetchGeo;
