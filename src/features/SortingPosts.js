export const categorizePosts = (posts) => {
    const categorized = {
        // todo - include audio
        text: [],
        video: [],
        image: [],
        gallery: [] // For the gallery of videos  
    };

    posts.forEach(post => {
        switch (post.type) {
            case 'text':
                categorized.text.push(post);
                break;
            case 'video':
                categorized.video.push(post);
                break;
            case 'image':
                categorized.image.push(post);
                break;
            case 'gallery':
                categorized.gallery.push(post);
                break;
            default:
                break;
        }
    });

    return categorized;
};

export const buildOrderedPosts = (categorizedPosts) => {
    const orderedPosts = [];

    // Define the display pattern  
    const pattern = [
        { type: 'video', count: 1 },
        { type: 'text', count: 2 },
        { type: 'image', count: 1 }, // Example with 5 images in single gallery  
        { type: 'text', count: 4 },
        { type: 'gallery', count: 4 },
    ];

    pattern.forEach(req => {
        const { type, count } = req;

        if (type === 'text') {
            for (let i = 0; i < count && categorizedPosts.text.length; i++) {
                orderedPosts.push(categorizedPosts.text.shift());
            }
        } else if (type === 'video') {
            for (let i = 0; i < count && categorizedPosts.video.length; i++) {
                orderedPosts.push(categorizedPosts.video.shift());
            }
        } else if (type === 'image') {
            for (let i = 0; i < count && categorizedPosts.image.length; i++) {
                orderedPosts.push(categorizedPosts.image.shift());
            }
            // if (categorizedPosts.images.length > 0) {
            //     orderedPosts.push(categorizedPosts.image.shift());
            // }
        } else if (type === 'gallery') {
            for (let i = 0; i < count && categorizedPosts.gallery.length; i++) {
                orderedPosts.push(categorizedPosts.gallery.shift());
            }
        }
    });

    return orderedPosts;
};