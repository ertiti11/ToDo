import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');


// fetch a paginated records list
export const records = await pb.collection('tasks').getFullList({
    sort: '-created',
});

export const resultList = await pb.collection('tasks').getList(1, 50, {
    filter: 'tag="asdf"',
});


export async function getTasksWithKeyword(keyword) {
    return await pb.collection('tasks').getList(1, 50, {
        filter: `tag="${keyword}"`,
    });

    // Resto del código para trabajar con el resultList
}



