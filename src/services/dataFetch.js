export default function getContent(endpoint) {
    //promise resolve || reject
    return new Promise((resolve, reject) => {
        //passing the endpoint
        fetch(endpoint)
            .then(res => {
                res.json()
                    //data as my param
                    .then(data => {
                        resolve(data);
                    })
                    .catch(err => {
                        reject(err);
                    });
            })
            .catch(err => {
                reject(err);
            });
    });
}
