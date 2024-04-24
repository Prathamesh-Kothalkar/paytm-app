const zod = require('zod');

const signinBody=zod.object({
    username:zod.string().email(),
    password:zod.string().min(6),
})

module.exports=signinBody;