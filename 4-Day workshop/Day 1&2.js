var lib = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
 ];
 
 function displayReadingStatus(lib) {
     for (var i = 0; i < library.length; i++) {
         var book = library[i];
         var bookInfo = book.title + ' by ' + book.author;
         if (book.readingStatus) {
             console.log('Already read: ' + bookInfo);
         } else {
             console.log('Not yet read: ' + bookInfo);
         }
     }
 }
 
 displayReadingStatus(lib);
 

//  Q2
function delayCallback(callback) {
    setTimeout(callback, 2000); 
}
function myCallback() {
    console.log('Callback function invoked after 2 seconds');
}
delayCallback(myCallback);


// Q3
function validateInteger(n) {
    
    if (!Number.isInteger(n)) {

        throw new Error('Invalid input: The number must be an integer.');
    }

    console.log(`Input number ${n} is an integer.`);
}


try {
    validateInteger(5);      
    validateInteger(3.14);   
} catch (error) {
    console.error(error.message);
}


function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            
            const userProfile = {
                userId: userId,
                name: 'John Doe',
                email: 'john.doe@example.com',
            };
            resolve(userProfile);
        }, 1000); 
    });
}


function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            const userPosts = [
                { id: 1, title: 'Post 1', content: 'This is the first post.' },
                { id: 2, title: 'Post 2', content: 'This is the second post.' },
            ];
            resolve(userPosts);
        }, 1500);
    });
}


function getUserData(userId) {
    
    return Promise.all([
        fetchUserProfile(userId),
        fetchUserPosts(userId)
    ]).then(([profile, posts]) => {
       
        return {
            profile: profile,
            posts: posts
        };
    }).catch(error => {
        
        console.error('Error fetching user data:', error);
        throw error; 
    });
}
const userId = '123';

getUserData(userId)
    .then(userData => {
        console.log('User Data', userData);
    })
    .catch(error => {
        console.error('Error', error.message);
    });



