const categorizePosts = (posts) => {
    const categorized = {
        // todo - include audio
        text: [],
        video: [],
        images: [],
        videos: [] // For the gallery of videos  
    };

    posts.forEach(post => {
        switch (post.type) {
            case 'text':
                categorized.text.push(post);
                break;
            case 'video':
                categorized.video.push(post);
                break;
            case 'images':
                categorized.images.push(post);
                break;
            case 'videos':
                categorized.videos.push(post);
                break;
            default:
                break;
        }
    });

    return categorized;
};

const buildOrderedPosts = (categorizedPosts) => {
    const orderedPosts = [];

    // Define the display pattern  
    const pattern = [
        { type: 'video', count: 1 },
        { type: 'text', count: 2 },
        { type: 'images', count: 1 }, // Example with 5 images in single gallery  
        { type: 'text', count: 4 },
        { type: 'videos', count: 4 },
    ];

    pattern.forEach(req => {
        const { type, count } = req;

        if (type === 'video') {
            for (let i = 0; i < count && categorizedPosts.video.length; i++) {
                orderedPosts.push(categorizedPosts.video.shift());
            }
        } else if (type === 'text') {
            for (let i = 0; i < count && categorizedPosts.text.length; i++) {
                orderedPosts.push(categorizedPosts.text.shift());
            }
        } else if (type === 'images') {
            if (categorizedPosts.images.length > 0) {
                orderedPosts.push(categorizedPosts.images.shift());
            }
        } else if (type === 'videos') {
            for (let i = 0; i < count && categorizedPosts.videos.length; i++) {
                orderedPosts.push(categorizedPosts.videos.shift());
            }
        }
    });

    return orderedPosts;
};