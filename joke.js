let jokes = [
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine.",
    "Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why was the math book sad? Because it had too many problems.",
    "What do you call fake spaghetti? An impasta.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call a snobbish criminal going down stairs? A condescending con descending.",
    "What do you call an alligator in a vest? An investigator.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the chicken cross the playground? To get to the other slide.",
    "Why did the chicken go to the seance? To talk to the other side.",
    "Why did the cow go to outer space? To see the moooon.",
    "Why did the frog call his insurance company? He had a jump in his car.",
    "Why did the girl smear peanut butter on the road? To go with the traffic jam.",
    "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
    "Why did the man put his money in the freezer? He wanted cold hard cash.",
    "Why did the man run around his bed? To catch up on his sleep.",
    "Why did the man take his clock to the vet? Because it had ticks.",
    "Why did the man throw his clock out the window? He wanted to see time fly.",
    "Why did the mummy call the doctor? Because he was coffin.",
    "Why did the music teacher need a ladder? To reach the high notes.",
    "Why did the orange stop in the middle of the hill? It ran out of juice.",
    "Why did the pastry chef go to school? To become a whipped cream.",
    "Why did the picture go to jail? Because it was framed.",
    "Why did the pirate refuse to say the alphabet? Because he always got lost at C.",
    "Why did the police officer go to the grocery store? To buy a crime scene.",
    "Why did the potato cross the road? To get to the other fry.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the traffic light turn red? Because it wanted to stop.",
    "Why did the tree go to the dentist? To get a root canal.",
    "Why did the two 4's skip lunch? They already 8.",
    "Why did the vampire need mouthwash? Because he had bat breath.",
    "Why did the whale cross the ocean? To get to the other tide.",
    "Why did the woman run around her bed? To catch up on her sleep.",
    "Why did the yogi refuse anesthesia? He wanted to transcend dental medication.",
    "Why didn't the bicycle stand up by itself? It was two-tired.",
    "Why didn't the chicken cross the road? Because"]
let random_number = Math.floor(Math.random() * jokes.length);
let random_joke = jokes[random_number];
document.getElementById("joke-change").innerHTML = random_joke