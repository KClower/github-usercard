/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "KClower",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "LohanGuedes",
"ronniedroid",
"OkelleyDevelopment",
"AceMouty",
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitHubCard(obj){
const card = document.createElement("div"),
      cardImg = document.createElement("img"),
      cardInfo = document.createElement("div"),
      cardName = document.createElement("h3"),
      cardUserName = document.createElement("p"),
      cardLocation = document.createElement("p"),
      cardProfile = document.createElement("p"),
      cardWebAddress = document.createElement("a"),
      cardFolowers = document.createElement("p"),
      cardFollowing = document.createElement("p"),
      cardBio = document.createElement("p")

      card.classList.add("card");
      cardInfo.classList.add("class-info");
      cardName.classList.add("name");
      cardUserName.classList.add("username");

      cardImg.src = obj.avatar_url
      cardName.textContent = obj.name
      cardUserName.textContent = obj.login
      cardLocation.textContent = obj.location
      cardProfile.textContent = "Profile: "
      cardWebAddress.textContent = obj.html_url
      cardWebAddress.href = obj.html_url
      cardFolowers.textContent = `Followers: ${obj.followers}`
      cardFollowing.textContent = `Following: ${obj.following}`
      cardBio.textContent = obj.bio

      card.appendChild(cardImg);
      card.appendChild(cardInfo);
      cardProfile.appendChild(cardWebAddress);
      cardInfo.appendChild(cardName);
      cardInfo.appendChild(cardUserName);
      cardInfo.appendChild(cardLocation);
      cardInfo.appendChild(cardProfile); 
      cardInfo.appendChild(cardFolowers);
      cardInfo.appendChild(cardFollowing);
      cardInfo.appendChild(cardBio);

   return card
}

const entryPoint = document.querySelector(".cards")


 //       MULTIPLE USERS (RANDOM ORDER)
  followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(response => {
     entryPoint.append(gitHubCard(response.data));
  }).catch(error => {
    console.log("THIS DID NOT WORK", error)
  })
})

//     MULTIPLE USERS ( IN ORDER AS ARRAY)

// const requests = []

// followersArray.forEach(follower => {
//   const request = axios.get(`https://api.github.com/users/${follower}`)
//   requests.push(request)
// })
// Promise.all(requests)
// .then(responses => {
 
//   responses.forEach(response => {
//     entryPoint.append(gitHubCard(response.data))
//   })
// })

//      SINGLE USER
// axios.get("https://api.github.com/users/KClower")
// .then(response => {
//   console.log(response.data)
//   entryPoint.append(gitHubCard(response.data));
// })
// .catch(error =>{
//   console.log("the data was not returned", error)
// });

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
