const { User } = require('./models'); // Adjust path as needed

async function testInsert() {
    try {
        const newUser = await User.create({ name: 'Test User'});
        console.log('New user created:', newUser.toJSON());
    } catch (error) {
        console.error('Error inserting user:', error);
    }
}

testInsert();