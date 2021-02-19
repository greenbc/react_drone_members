const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6ImI0NzMzYzJkNDUxMGVkZmYzMzQyZDBlYThkM2I1MjBlMjY4NWE0NGYxMzQxZTE1YSIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE3IDE2OjE3OjA3LjE3OTcwMFwiIn0.FZIYMrkZ265VNjwqi1Jp31hHg69EwBZVDkN6vSYM1MU' // TODO: Add API-Access-Key

const heroku_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6ImZjZmUwODc0NTA4ZWQxNWRlYWNkZWI5MGRkYjk3MjZmMjNmOWQ0YzYzYzdmM2UzYSIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE4IDE3OjQ2OjEwLjcyNjEyOVwiIn0.B6JssW2qPNchHz_jzkDG9n7EAxh1Vpx2HxarRrOnyEk'
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://drone-collections-api-bg.herokuapp.com/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://drone-collections-api-bg.herokuapp.com/drones/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to Delete data from server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://drone-collections-api-bg.herokuapp.com/drones/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update data from server')
        }

        return await response.json()
    },
    create: async (data:any = {}) => {
        const response = await fetch(`https://drone-collections-api-bg.herokuapp.com/drones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    }
}