const API_ENDPOINT = 'https://api.github.com/users'

export const fetch_user = (user_id) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_ENDPOINT}/${user_id}`).then(results => {
            return resolve(results.json())
        }).catch(err => reject(err))
    })
}