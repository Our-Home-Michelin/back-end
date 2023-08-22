/*
title : RCP_NM (메뉴명)
recipeType : RCP_PAT2 (요리종류 :국,찌개 등)
recipeServing : INFO_WGT (n인분)
process : MANUALnn(조리법 01~nn단계)
ingredients : HASH_TAG (주재료)
imageUrl : MANUAL_IMGnn (이미지 URL  01~nn개의 사진)
likeCount : 좋아요 숫자 (공공API에 없다! 0으로 넣어둠)
*/

import * as fs from 'fs';
const jsonFile = fs.readFileSync('./recipe.json', 'utf8');
const jsonData = JSON.parse(jsonFile);

const recipeList = jsonData.COOKRCP01.row;



recipeList.forEach(recipe => {

    // 객체 key sort
    let newRecipe = {}
    Object.keys(recipe).sort().forEach((key) => {
        newRecipe[key] = recipe[key];
    })

    newRecipe["process"] = "";
    newRecipe["imageUrl"] = "";
    for (const key in newRecipe) {
        // console.log(recipe[key]); value값 띄우기
        if (key.includes("MANUAL") && !key.includes("MANUAL_IMG")) {
            if (newRecipe[key] != "")
                newRecipe["process"] += newRecipe[key] + "|";
        }
        if (key.includes("MANUAL_IMG")) {
            if (newRecipe[key] != "")
                newRecipe["imageUrl"] += newRecipe[key] + " ";
        }
    }
    newRecipe["process"] = newRecipe["process"].replace(/\n/g, '');

    // 마지막 | 제거
    newRecipe["process"] = newRecipe["process"].slice(0, -1);
    newRecipe["imageUrl"] = newRecipe["imageUrl"].slice(0, -1);

    // 데이터 생성
    let recipeObj = {
        title: `${newRecipe.RCP_NM}`,
        recipeType: `${newRecipe.RCP_PAT2}`,
        recipeServing: `${newRecipe.INFO_WGT}`,
        process: `${newRecipe.process}`,
        ingredients: `${newRecipe.HASH_TAG}`,
        imageUrl: `${newRecipe.imageUrl}`,
        likeCount: 0
    }
    console.log(recipeObj);
});






