
const fetcher = (url, { method = 'GET', body, headers = {} }) => {
    try {
        const response = fetch(url, {
            method,
            body: body ? JSON.stringify(body) : null,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        }).then(res => res.json());

        console.log(`Response for ${url} Method: ${method}`, response)

        return response
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export default fetcher; 