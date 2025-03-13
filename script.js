function vote(party) {
    const status = document.getElementById("status");
    if (status.innerText === "Voted") {
        alert("You have already voted!");
        return;
    }

    alert(`You voted for ${party}`);
    status.innerText = "Voted";
    status.style.color = "green";
}
