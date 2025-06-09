if (filtered.length > 0) {
  gameList.innerHTML = filtered.map(createCard).join("");
} else {
  gameList.innerHTML = "<p>No games found. Please try another search.</p>";
}
