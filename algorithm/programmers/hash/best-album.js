function solution(genres, plays) {
  const hashMap = new Map();

  genres.map((genres, index) => [genres, plays[index]])
    .forEach(([genres, play], index) => {
      const data = hashMap.get(genres) || { total: 0, songs: [] };
      hashMap.set(genres, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2)
      });
    });

  console.log(hashMap);

  return [...hashMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap(item => item[1].songs)
    .map(song => song.index);
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));