import qs from 'qs';

export const computeUrl = (limit, launchYear, successfulLaunch, successfulLanding) => {
    let computeUrl = '';
    if (limit) {
        computeUrl = `${computeUrl}&limit=${limit}`;
    }
    if (launchYear) {
        computeUrl = `${computeUrl}&launchYear=${launchYear}`;
    }
    if (successfulLaunch) {
        computeUrl = `${computeUrl}&successfulLaunch=${successfulLaunch}`;
    }
    if (successfulLanding) {
        computeUrl = `${computeUrl}&successfulLanding=${successfulLanding}`;
    }
    computeUrl = `?${computeUrl.slice(1)}`;
    return computeUrl;
}

export const getAllQueryParams = () => {
    const queryParams = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    return queryParams;
}

const urlKeysMapping =  {
    "limit": "limit",
    "launchYear": "launch_year",
    "successfulLaunch": "launch_success",
    "successfulLanding": "land_success"
}

export const convertParamsIntoString = (obj) => {
    let queryString = [];
    Object.keys(obj).map(val => {
        let key = urlKeysMapping[val];
        if (obj[val] == "True") {
            queryString.push(`${key}=true`);
        } else if (obj[val] == "False") {
            queryString.push(`${key}=false`);
        } else {
            queryString.push(`${key}=${obj[val]}`);
        }
    });
    return queryString.join("&");
}
