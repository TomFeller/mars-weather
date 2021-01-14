
 const GET = "GET";
const apiKey = "nH66eeaBON75qSaWAydf2NSPQ77SfeUW4RBmb5eN"
const api = "https://api.nasa.gov";

export const fetchApi = async (
    method = GET,
    extension,
    successHandler = success => {},
    data = {},
    errorHandler = error => {},
) => {

    const url = `${api}/${extension}/?api_key=${apiKey}&feedtype=json&ver=1.0`;

    const BODY = JSON.stringify(data);
    const METHOD = method.toUpperCase();
    const URL = url;

    const fetchData = (
        METHOD === GET ?
            {method: METHOD} :
            {method: METHOD, body: BODY}
    );

    await fetch(
        URL,
        fetchData
    ).then(
        response => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json()
        }
    ).then(
        success => {
            successHandler(success)
        }
    ).catch(
        error => errorHandler(error)
    );
};
