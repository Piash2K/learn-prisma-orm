import { prisma } from "./lib/prisma";

async function run() {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       name: "Piash Islam",
  //       email: "piash@gmail.com",
  //     },
  //   });

  //   console.log("Created User:", createUser);

  //create post for user id = 1
  // const createPost= await prisma.post.create({
  //     data:{
  //         title:"This is title",
  //         content: "This is a big content",
  //         authorId: 5
  //     }
  // })
  // console.log("Created Post:", createPost)

  //create profile
  // const createProfile = await prisma.profile.create({
  //     data:{
  //         bio:"Web dev at ph",
  //         userId: 1
  //     }
  // })
  // console.log("Created Profile", createProfile)

  //retrieve all data
  // const users = await prisma.user.findMany({
  //     // include:{
  //     //     posts: true,
  //     //     profile: true
  //     // }
  //     select:{
  //         posts: true,
  //         profile: true
  //     }
  // })
  // console.dir(users, {depth: Infinity})

  //update user data
//   const updateUser = await prisma.profile.update({
//     where: {
//       userId: 1,
//     },
//     data: {
//       bio: " Web Developer and learner",
//       dateOfBirth: "2026-02-18T06:51:42.781Z",
//     },
//     select: {
//       id: true,
//       bio: true,
//       user: {
//         select: {
//           name: true,
//           email: true,
//         },
//       },
//     },
//   });

//   console.log("Updated user:", updateUser);

//delete user

// const deleteUser = await prisma.user.delete({
//     where:{
//         id: 1
//     }
// })
// console.log(deleteUser)

//get user data by id

const getUserDataByID= await prisma.user.findUnique({
    where: {
        id: 1
    },
    include:{
        posts: true,
        profile: true
    }
})
console.log(getUserDataByID)
}

run();
