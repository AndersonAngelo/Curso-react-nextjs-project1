export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    
    const [posts, photo] = await Promise.all([postsResponse, photosResponse]);

    const photoJson = await photo.json();
    const postJson = await posts.json();

    const postsAndPhotos = postJson.map((post, index) => {
      return { ...post, cover: photoJson[index].url}
    });

    return postsAndPhotos;
};