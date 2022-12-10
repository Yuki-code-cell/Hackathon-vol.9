const DataArray = [
  { url: "https://111.com", comment: 1, },
  { url: "https://222.com", comment: 2, },
  { url: "https://333.com", comment: 3, }

];
module.exports = DataArray;

console.log(DataArray[0][0]);
console.log(DataArray[1][0]);
console.log(DataArray[2][0]);

const dataList =
[
  {
    "theme": "template1",
    "description": "templateの一番目です",
    "faq": [
      {
        "question": "一番目の質問です",
        "answer": ""
      }
    ]
  },
  {
    "theme": "template2",
    "description": "templateの一番目です",
    "faq": [
      {
        "question": "一番目の質問です",
        "answer": ""
      }
    ]
  },
  {
    "theme": "template3",
    "description": "templateの一番目です",
    "faq": [
      {
        "question": "一番目の質問です",
        "answer": ""
      }
    ]
  }
];

export default dataList;
