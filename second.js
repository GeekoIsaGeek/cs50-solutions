/* Pseudo Code
1. ვაერთიანებთ ყველა შუალედში შემავალ ელემენტებს მასივში
2. გადავუვლით მასივის ყველა ელემენტს და აღვრიცხავთ თითოეული ელემენტის რაოდენობას, სხვა სიტყვებით, რამდენი ადამიანი იყო
	კონკრეტულ დროს წვეულებაზე
3. რამდენჯერაც გამეორდება დრო, იმდენჯერ გავზრდით/დავაინკრემენტებთ დამსწრეების რაოდენობას
4. დავსორტავთ მიღებულ მასივს ადამიანების რაოდენობის მიხედვით და ამოვიღებთ პირველ ელემენტს, 
	სადაც key იქნება დრო, value ხალხის რაოდენობა
*/

//prettier-ignore
const timeframes = [
	6, 7, 8, 		// (6-8)
	7, 8, 9, 10,   // (7-10)
	9, 10, 11, 12, // (9-12)
	11, 12, 13,    // (11-13)
	5, 6, 7, 8,    // (5-8)
];

/* ვაცხადებთ ობიექტს, where -> key იქნება საათი, value ხალხის რაოდენობა
	{
		6 (საათი) : 1 (ადამიანი),
		7 : 3,
		8 : 2
	};
*/
const peopleOccuranceByHours = {};

timeframes.forEach((hour) => {
	if (!peopleOccuranceByHours[hour]) {
		peopleOccuranceByHours[hour] = 1;
	} else {
		peopleOccuranceByHours[hour]++;
	}
});

const sortedHours = Object.entries(peopleOccuranceByHours).sort((a, b) => b[1] - a[1]);

const mostPeople = sortedHours[0][1];
const mostCommonHour = sortedHours[0][0];

console.log(`ყველაზე მეტი, ${mostPeople} ადამიანი, წვეულებაზე იმყოფებოდა ${mostCommonHour} საათზე`);
