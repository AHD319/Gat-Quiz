const mathQuestions = [
    // --- Under 100 ---
    { questionNumber: 2, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/2_A.png' },
    { questionNumber: 2, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/2_D.png' },
    { questionNumber: 3, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/3_D.png' },
    { questionNumber: 4, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/4_C.png' },
    { questionNumber: 5, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/5_B.png' },
    { questionNumber: 6, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/6_A.png' },
    { questionNumber: 7, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/7_D.png' },
    { questionNumber: 8, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/8_C.png' },
    { questionNumber: 9, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/9_A.png' },
    { questionNumber: 10, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/10_C.png' },
    { questionNumber: 11, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/11_A.png' },
    { questionNumber: 12, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/12_B.png' },
    { questionNumber: 13, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/13_C.png' },
    { questionNumber: 14, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/14_D.png' },
    { questionNumber: 15, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/15_B.png' },
    { questionNumber: 16, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/16_B.png' },
    { questionNumber: 17, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/17_C.png' },
    { questionNumber: 18, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/18_D.png' },
    { questionNumber: 19, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/19_B.png' },
    { questionNumber: 20, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/20_C.png' },
    { questionNumber: 21, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/21_C.png' },
    { questionNumber: 22, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/22_B.png' },
    { questionNumber: 24, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/24_C.png' },
    { questionNumber: 25, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/25_A.png' },
    { questionNumber: 26, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/26_C.png' },
    { questionNumber: 27, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/27_B.png' },
    { questionNumber: 28, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/28_C.png' },
    { questionNumber: 30, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/30_C.png' },
    { questionNumber: 31, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/31_D.png' },
    { questionNumber: 32, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/32_D.png' },
    { questionNumber: 33, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/33_C.png' },
    { questionNumber: 34, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/34_B.png' },
    { questionNumber: 35, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/35_B.png' },
    { questionNumber: 36, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/36_A.png' },
    { questionNumber: 37, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/37_A.png' },
    { questionNumber: 38, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/38_A.png' },
    { questionNumber: 39, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/39_D.png' },
    { questionNumber: 40, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/40_B.png' },
    { questionNumber: 41, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/41_B.png' },
    { questionNumber: 42, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/42_C.png' },
    { questionNumber: 44, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/44_D.png' },
    { questionNumber: 45, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/45_B.png' },
    { questionNumber: 46, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/46_A.png' },
    { questionNumber: 47, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/47_C.png' },
    { questionNumber: 48, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/48_A.png' },
    { questionNumber: 49, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/49_B.png' },
    { questionNumber: 50, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/50_B.png' },
    { questionNumber: 51, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/51_C.png' },
    { questionNumber: 52, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/52_B.png' },
    { questionNumber: 53, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/53_D.png' },
    { questionNumber: 54, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/54_B.png' },
    { questionNumber: 55, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/55_A.png' },
    { questionNumber: 56, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/56_D.png' },
    { questionNumber: 57, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/57_A.png' },
    { questionNumber: 58, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/58_C.png' },
    { questionNumber: 59, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/59_D.png' },
    { questionNumber: 60, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/60_B.png' },
    { questionNumber: 61, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/61_C.png' },
    { questionNumber: 63, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/63_A.png' },
    { questionNumber: 9, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/9_B.png' },
    { questionNumber: 29, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/29_C.png' },
    { questionNumber: 30, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/30_B.png' },
    { questionNumber: 31, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/31_A.png' },
    { questionNumber: 32, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/32_B.png' },
    { questionNumber: 33, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/33_B.png' },
    { questionNumber: 34, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/34_A.png' },
    { questionNumber: 36, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/36_A.png' },
    { questionNumber: 40, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/40_A.png' },
    { questionNumber: 45, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/45_A.png' },
    { questionNumber: 50, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/50_A.png' },
    { questionNumber: 51, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/51_D.png' },
    { questionNumber: 53, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/53_B.png' },
    { questionNumber: 60, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/60_A.png' },
    { questionNumber: 61, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/61_B.png' },
    { questionNumber: 63, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/63_B.png' },
    { questionNumber: 64, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/64_A.png' },
    { questionNumber: 65, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/65_B.png' },
    { questionNumber: 66, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/66_C.png' },
    { questionNumber: 66, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/66_B.png' },
    { questionNumber: 67, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/67_C.png' },
    { questionNumber: 68, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/68_B.png' },
    { questionNumber: 69, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/69_D.png' },
    { questionNumber: 70, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/70_B.png' },
    { questionNumber: 72, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/72_D.png' },
    { questionNumber: 73, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/73_A.png' },
    { questionNumber: 74, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/74_B.png' },
    { questionNumber: 75, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/75_A.png' },
    { questionNumber: 76, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/76_C.png' },
    { questionNumber: 77, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/77_A.png' },
    { questionNumber: 85, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/85_C.png' },
    { questionNumber: 86, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/86_D.png' },
    { questionNumber: 87, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/87_B.png' },
    { questionNumber: 88, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/88_C.png' },
    { questionNumber: 89, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/89_B.png' },
    { questionNumber: 90, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/90_C.png' },
    { questionNumber: 91, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/91_D.png' },
    { questionNumber: 93, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/93_C.png' },
    { questionNumber: 94, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/94_B.png' },
    { questionNumber: 95, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/95_C.png' },
    { questionNumber: 97, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/97_B.png' },
    { questionNumber: 98, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/98_B.png' },
    { questionNumber: 99, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/99_B.png' },

    // --- 100s Series ---
    { questionNumber: 108, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/108_D.png' },
    { questionNumber: 113, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/113_A.png' },
    { questionNumber: 115, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/115_A.png' },
    { questionNumber: 116, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/116_C.png' },
    { questionNumber: 120, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/120_B.png' },
    { questionNumber: 121, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/121_C.png' },
    { questionNumber: 123, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/123_C.png' },
    { questionNumber: 126, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/126_C.png' },
    { questionNumber: 127, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/127_B.png' },
    { questionNumber: 129, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/129_C.png' },
    { questionNumber: 132, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/132_D.png' },
    { questionNumber: 134, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/134_A.png' },
    { questionNumber: 136, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/136_A.png' },
    { questionNumber: 138, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/138_B.png' },
    { questionNumber: 139, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/139_C.png' },
    { questionNumber: 141, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/141_A.png' },
    { questionNumber: 144, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/144_B.png' },
    { questionNumber: 157, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/157_A.png' },
    { questionNumber: 160, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/160_D.png' },
    { questionNumber: 163, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/163_C.png' },
    { questionNumber: 164, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/164_B.png' },
    { questionNumber: 170, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/170_C.png' },
    { questionNumber: 171, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/171_A.png' },
    { questionNumber: 174, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/174_C.png' },
    { questionNumber: 181, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/181_A.png' },
    { questionNumber: 190, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/190_C.png' },
    { questionNumber: 195, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/195_B.png' },
    { questionNumber: 198, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/198_C.png' },

    // --- 200s Series ---
    { questionNumber: 201, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/201_C.png' },
    { questionNumber: 202, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/202_D.png' },
    { questionNumber: 204, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/204_C.png' },
    { questionNumber: 205, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/205_A.png' },
    { questionNumber: 207, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/207_C.png' },
    { questionNumber: 212, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/212_D.png' },
    { questionNumber: 213, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/213_B.png' },
    { questionNumber: 214, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/214_B.png' },
    { questionNumber: 223, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/223_D.png' },
    { questionNumber: 227, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/227_D.png' },
    { questionNumber: 230, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/230_D.png' },
    { questionNumber: 233, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/233_B.png' },
    { questionNumber: 234, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/234_C.png' },
    { questionNumber: 238, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/238_C.png' },
    { questionNumber: 243, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/243_C.png' },
    { questionNumber: 246, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/246_C.png' },
    { questionNumber: 249, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/249_B.png' },
    { questionNumber: 254, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/254_A.png' },
    { questionNumber: 256, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/256_D.png' },
    { questionNumber: 261, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/261_C.png' },
    { questionNumber: 280, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/280_A.png' },
    { questionNumber: 295, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/295_C.png' },

    // --- 300s Series ---
    { questionNumber: 303, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/303_D.png' },
    { questionNumber: 304, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/304_C.png' },
    { questionNumber: 306, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/306_B.png' },
    { questionNumber: 307, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/307_B.png' },
    { questionNumber: 308, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/308_A.png' },
    { questionNumber: 309, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/309_B.png' },
    { questionNumber: 314, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/314_A.png' },
    { questionNumber: 316, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/316_C.png' },
    { questionNumber: 318, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/318_C.png' },
    { questionNumber: 319, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/319_D.png' },
    { questionNumber: 320, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/320_C.png' },
    { questionNumber: 322, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/322_B.png' },
    { questionNumber: 323, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/323_D.png' },
    { questionNumber: 324, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/324_C.png' },
    { questionNumber: 325, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/325_B.png' },
    { questionNumber: 328, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/328_C.png' },
    { questionNumber: 334, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/334_D.png' },
    { questionNumber: 337, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/337_C.png' },
    { questionNumber: 343, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/343_B.png' },
    { questionNumber: 345, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/345_A.png' },
    { questionNumber: 346, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/346_A.png' },
    { questionNumber: 349, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/349_C.png' },
    { questionNumber: 352, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/352_D.png' },
    { questionNumber: 353, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/353_B.png' },
    { questionNumber: 354, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/354_D.png' },
    { questionNumber: 356, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/356_D.png' },
    { questionNumber: 360, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/360_D.png' },
    { questionNumber: 361, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/361_B.png' },
    { questionNumber: 365, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/365_B.png' },
    { questionNumber: 367, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/367_C.png' },
    { questionNumber: 372, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/372_C.png' },
    { questionNumber: 374, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/374_C.png' },
    { questionNumber: 380, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/380_B.png' },
    { questionNumber: 382, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/382_B.png' },
    { questionNumber: 383, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/383_C.png' },
    { questionNumber: 384, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/384_B.png' },
    { questionNumber: 385, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/385_C.png' },
    { questionNumber: 387, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/387_B.png' },
    { questionNumber: 391, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/391_B.png' },
    { questionNumber: 393, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/393_D.png' },
    { questionNumber: 394, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/394_B.png' },
    { questionNumber: 397, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/397_A.png' },

    // --- 400s Series ---
    { questionNumber: 401, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/401_A.png' },
    { questionNumber: 403, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/403_B.png' },
    { questionNumber: 407, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/407_B.png' },
    { questionNumber: 408, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/408_C.png' },
    { questionNumber: 409, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/409_A.png' },
    { questionNumber: 410, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/410_D.png' },
    { questionNumber: 411, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/411_D.png' },
    { questionNumber: 414, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/414_C.png' },
    { questionNumber: 415, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/415_D.png' },
    { questionNumber: 422, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/422_A.png' },
    { questionNumber: 426, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/426_C.png' },
    { questionNumber: 428, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/428_C.png' },
    { questionNumber: 429, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/429_C.png' },
    { questionNumber: 431, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/431_B.png' },
    { questionNumber: 432, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/432_C.png' },
    { questionNumber: 434, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/434_B.png' },
    { questionNumber: 437, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/437_B.png' },
    { questionNumber: 438, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/438_B.png' },
    { questionNumber: 440, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/440_A.png' },
    { questionNumber: 446, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/446_B.png' },
    { questionNumber: 447, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/447_A.png' },
    { questionNumber: 448, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/448_A.png' },
    { questionNumber: 449, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/449_A.png' },

    // --- 500s Series ---
    { questionNumber: 500, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/500_C.png' },
    { questionNumber: 501, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/501_D.png' },
    { questionNumber: 502, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/502_B.png' },
    { questionNumber: 503, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/503_A.png' },
    { questionNumber: 504, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/504_A.png' },
    { questionNumber: 505, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/505_D.png' },
    { questionNumber: 506, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/506_C.png' },
    { questionNumber: 507, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/507_B.png' },
    { questionNumber: 508, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/508_B.png' },
    { questionNumber: 509, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/509_B.png' },
    { questionNumber: 510, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/510_D.png' },
    { questionNumber: 511, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/511_A.png' },
    { questionNumber: 512, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/512_D.png' },
    { questionNumber: 514, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/514_B.png' },
    { questionNumber: 515, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/515_B.png' },
    { questionNumber: 516, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/516_C.png' },
    { questionNumber: 517, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/517_D.png' },
    { questionNumber: 518, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/518_B.png' },
    { questionNumber: 519, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/519_A.png' },
    { questionNumber: 520, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/520_D.png' },
    { questionNumber: 522, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/522_B.png' },
    { questionNumber: 523, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/523_D.png' },
    { questionNumber: 524, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/524_B.png' },
    { questionNumber: 525, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/525_A.png' },
    { questionNumber: 526, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/526_D.png' },
    { questionNumber: 527, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/527_A.png' },
    { questionNumber: 529, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/529_B.png' },
    { questionNumber: 530, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/530_B.png' },
    { questionNumber: 531, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/531_B.png' },
    { questionNumber: 532, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/532_C.png' },
    { questionNumber: 533, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/533_A.png' },
    { questionNumber: 534, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/534_B.png' },
    { questionNumber: 535, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/535_D.png' },
    { questionNumber: 536, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/536_C.png' },
    { questionNumber: 537, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/537_C.png' },
    { questionNumber: 538, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/538_B.png' },
    { questionNumber: 539, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/539_D.png' },
    { questionNumber: 540, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/540_B.png' },
    { questionNumber: 541, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/541_D.png' },
    { questionNumber: 542, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/542_B.png' },
    { questionNumber: 543, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/543_C.png' },
    { questionNumber: 544, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/544_A.png' },
    { questionNumber: 546, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/546_A.png' },
    { questionNumber: 547, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/547_C.png' },
    { questionNumber: 548, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/548_B.png' },
    { questionNumber: 549, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/549_A.png' },
    { questionNumber: 550, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/550_B.png' },
    { questionNumber: 551, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/551_C.png' },
    { questionNumber: 552, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/552_C.png' },
    { questionNumber: 554, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/554_B.png' },
    { questionNumber: 556, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/556_B.png' },
    { questionNumber: 557, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/557_A.png' },
    { questionNumber: 558, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/558_B.png' },
    { questionNumber: 559, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/559_C.png' },
    { questionNumber: 560, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/560_D.png' },
    { questionNumber: 561, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/561_C.png' },
    { questionNumber: 563, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/563_C.png' },
    { questionNumber: 564, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/564_C.png' },
    { questionNumber: 566, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/566_D.png' },
    { questionNumber: 567, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/567_C.png' },
    { questionNumber: 569, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/569_C.png' },
    { questionNumber: 570, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/570_D.png' },
    { questionNumber: 574, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/574_B.png' },
    { questionNumber: 575, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/575_B.png' },
    { questionNumber: 577, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/577_D.png' },
    { questionNumber: 578, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/578_C.png' },
    { questionNumber: 579, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/579_A.png' },
    { questionNumber: 581, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/581_D.png' },
    { questionNumber: 583, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/583_D.png' },
    { questionNumber: 584, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/584_A.png' },
    { questionNumber: 585, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/585_B.png' },
    { questionNumber: 587, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/587_C.png' },
    { questionNumber: 588, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/588_C.png' },
    { questionNumber: 589, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/589_D.png' },
    { questionNumber: 590, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/590_A.png' },
    { questionNumber: 591, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/591_B.png' },
    { questionNumber: 593, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/593_C.png' },
    { questionNumber: 594, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/594_C.png' },
    { questionNumber: 595, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/595_D.png' },
    { questionNumber: 598, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/598_D.png' },

    // --- 600s Series ---
    { questionNumber: 600, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/600_C.png' },
    { questionNumber: 602, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/602_B.png' },
    { questionNumber: 603, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/603_A.png' },
    { questionNumber: 604, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/604_A.png' },
    { questionNumber: 605, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/605_C.png' },
    { questionNumber: 607, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/607_C.png' },
    { questionNumber: 609, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/609_C.png' },
    { questionNumber: 610, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/610_D.png' },
    { questionNumber: 611, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/611_B.png' },
    { questionNumber: 612, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/612_A.png' },
    { questionNumber: 613, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/613_C.png' },
    { questionNumber: 616, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/616_D.png' },
    { questionNumber: 619, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/619_A.png' },
    { questionNumber: 620, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/620_C.png' },
    { questionNumber: 622, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/622_A.png' },
    { questionNumber: 624, correctAnswer: 'D', category: 'Algebra', imageSrc: 'MathQuizImages/624_D.png' },
    { questionNumber: 625, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/625_A.png' },
    { questionNumber: 626, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/626_A.png' },
    { questionNumber: 627, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/627_C.png' },
    { questionNumber: 628, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/628_B.png' },
    { questionNumber: 630, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/630_A.png' },
    { questionNumber: 632, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/632_A.png' },
    { questionNumber: 633, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/633_B.png' },
    { questionNumber: 634, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/634_C.png' },
    { questionNumber: 635, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/635_B.png' },
    { questionNumber: 636, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/636_A.png' },
    { questionNumber: 637, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/637_A.png' },
    { questionNumber: 638, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/638_A.png' },
    { questionNumber: 640, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/640_B.png' },
    { questionNumber: 641, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/641_D.png' },
    { questionNumber: 642, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/642_A.png' },
    { questionNumber: 645, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/645_A.png' },
    { questionNumber: 647, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/647_C.png' },
    { questionNumber: 648, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/648_B.png' },
    { questionNumber: 649, correctAnswer: 'D', category: 'Geometry', imageSrc: 'MathQuizImages/649_D.png' },
    { questionNumber: 650, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/650_C.png' },
    { questionNumber: 651, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/651_B.png' },
    { questionNumber: 652, correctAnswer: 'A', category: 'Algebra', imageSrc: 'MathQuizImages/652_A.png' },
    { questionNumber: 653, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/653_A.png' },
    { questionNumber: 654, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/654_B.png' },
    { questionNumber: 655, correctAnswer: 'B', category: 'Geometry', imageSrc: 'MathQuizImages/655_B.png' },
    { questionNumber: 656, correctAnswer: 'C', category: 'Geometry', imageSrc: 'MathQuizImages/656_C.png' },
    { questionNumber: 657, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/657_A.png' },
    { questionNumber: 658, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/658_B.png' },
    { questionNumber: 659, correctAnswer: 'A', category: 'Geometry', imageSrc: 'MathQuizImages/659_A.png' },
    { questionNumber: 660, correctAnswer: 'D', category: 'Word Problem', imageSrc: 'MathQuizImages/660_D.png' },
    { questionNumber: 661, correctAnswer: 'A', category: 'Word Problem', imageSrc: 'MathQuizImages/661_A.png' },
    { questionNumber: 662, correctAnswer: 'C', category: 'Algebra', imageSrc: 'MathQuizImages/662_C.png' },
    { questionNumber: 663, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/663_C.png' },
    { questionNumber: 664, correctAnswer: 'C', category: 'Word Problem', imageSrc: 'MathQuizImages/664_C.png' },

    // --- 700s Series ---
    { questionNumber: 700, correctAnswer: 'B', category: 'Word Problem', imageSrc: 'MathQuizImages/700_B.png' },
    { questionNumber: 701, correctAnswer: 'B', category: 'Algebra', imageSrc: 'MathQuizImages/701_B.png' }
];

const englishData = {
  1: { analogy: [{ category: 'Analogies', questionText: 'Car : Pollution', options: ["Fire : Smoke", "Cold : Ice", "Book : Page", "Sun : Yellow"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Bricks : House', options: ["Tree : Leaf", "Bones : Skeleton", "Pen : Ink", "Water : River"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Tree : Forest', options: ["Key : Lock", "Day : Night", "Star : Sky", "Dog : Cat"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Gym : Exercise', options: ["Paper : Write", "Hot : Cold", "Shoe : Foot", "Library : Read"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Speak : Shout', options: ["Sleep : Dream", "Eat : Cook", "Walk : Run", "Look : See"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Toyota : Car', options: ["Table : Wood", "Ocean : Water", "Bass : Guitar", "Fast : Quick"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Select : Choose', options: ["In : Out", "Near : Far", "Up : Down", "Always : Forever"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Easy : Simple', options: ["Hard : Soft", "High : Low", "Dark : Light", "Grateful : Thankful"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Caterpillar : Butterfly', options: ["Big : Small", "Day : Night", "Baby : Adult", "Paper : Pen"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Eye : Face', options: ["Hot : Cold", "City : Country", "Run : Fast", "Read : Book"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Screen : Laptop', options: ["Smart : Wise", "Slow : Fast", "Fin : Fish", "Build : House"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Floor : Ceiling', options: ["Sour : Sweet", "Tall : High", "Big : Huge", "Fast : Quick"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Suggest : Demand', options: ["Take : Grab", "Cold : Hot", "Apple : Tree", "Paper : Pen"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Work : Experience', options: ["Desk : Chair", "Shoe : Sock", "Black : White", "Tickle : Laugh"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Roof : House', options: ["Country : World", "Soft : Hard", "Walk : Slow", "Sing : Song"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Wet : Soak', options: ["Rub : Scrub", "Clean : Dirty", "Up : Down", "Dry : Wet"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Accomplish : Achieve', options: ["Start : Stop", "Push : Pull", "Win : Lose", "Fall : Drop"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Mammal : Human', options: ["Tree : Leaf", "Fish : Water", "Bird : Sky", "Vehicle : Truck"], correctAnswer: 'D' }], wording: [], reading: [] },
  2: { analogy: [], wording: [], reading: [] },
  3: { analogy: [], wording: [], reading: [] },
  4: { analogy: [], wording: [], reading: [] },
  5: { analogy: [], wording: [], reading: [] },
  6: { analogy: [], wording: [], reading: [] },
  7: { analogy: [], wording: [], reading: [] },
  8: { analogy: [], wording: [], reading: [] },
  9: { analogy: [], wording: [], reading: [] },
  10: { analogy: [], wording: [], reading: [] },
  11: { analogy: [], wording: [], reading: [] },
  12: { analogy: [], wording: [], reading: [] },
  13: { analogy: [], wording: [], reading: [] },
  14: { analogy: [], wording: [], reading: [] },
  15: { analogy: [], wording: [], reading: [] }
};



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- DYNAMIC PASSAGE FULLSCREEN MODAL ---
function showPassageModal(title, passageText) {
    let modal = document.getElementById('passage-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'passage-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.backgroundColor = 'rgba(15, 23, 42, 0.75)';
        modal.style.backdropFilter = 'blur(4px)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '99999';
        modal.style.padding = '20px';
        modal.style.boxSizing = 'border-box';

        modal.innerHTML = `
            <div style="background: #ffffff; padding: 28px; border-radius: 16px; max-width: 680px; width: 100%; max-height: 80vh; display: flex; flex-direction: column; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">
                    <h3 id="modal-passage-title" style="margin: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">>/h3>
                    <button id="close-passage-modal" style="background: none; border: none; font-size: 1.25rem; font-weight: bold; cursor: pointer; color: #64748b; padding: 4px 8px;">✕</button>
                </div>
                <div id="modal-passage-body" style="overflow-y: auto; color: #334155; line-height: 1.6; font-size: 0.98rem; white-space: pre-wrap; padding-right: 8px;">>/div>
            </div>
        `;
        document.body.appendChild(modal);

        // Close via close button
        document.getElementById('close-passage-modal').onclick = function() {
            modal.style.display = 'none';
        };

        // Close via clicking outside the card
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };

        // Close via Escape key
        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        });
    }

    document.getElementById('modal-passage-title').textContent = title << 'Full Passage';
    document.getElementById('modal-passage-body').textContent = passageText;
    modal.style.display = 'flex';
}

function prepareEnglishQuestions(category) {
  // Fallback to Model 1 if activeModel was unset
  if (!activeModel) activeModel = 1;

  const model = englishData[activeModel];
  if (!model) {
    console.error(`Model ${activeModel} not found in englishData.`);
    return [];
  }

  // Pull array from activeModel
  let analogies = model.analogy || model.analogies || [];
  let wording = model.wording || [];
  let reading = model.reading || [];

  // Create clean copies before shuffling
  analogies = [...analogies];
  wording = [...wording];
  reading = [...reading];

  shuffleArray(analogies);
  shuffleArray(wording);
  shuffleArray(reading);

  if (category) {
    const catLower = category.toLowerCase();
    if (catLower.startsWith('anal')) return analogies;
    if (catLower.startsWith('word')) return wording;
    if (catLower.startsWith('read')) return reading;
  }

  return [...analogies, ...wording, ...reading];
}

function prepareMathQuestions(category) {
    if (!category) return [...mathQuestions];
    const catLower = category.toLowerCase();
    return mathQuestions.filter(q => q.category && q.category.toLowerCase().includes(catLower));
}
let currentSubject = '';
let currentCategory = null;
let questions = [];
let currentIndex = 0;
let score = 0;
let selectedOption = null;
let isSubmitted = false;

function switchView(viewId) {
document.querySelectorAll('.view').forEach(function(v) {
v.classList.add('hidden');
});
document.getElementById(viewId).classList.remove('hidden');
}

function showMenu() {
switchView('menu-view');
}

function showEnglishModelsView() {
  switchView('english-models-view');
}

function showEnglishMenu() {
  showEnglishModelsView(); // Backup alias
}

function selectEnglishModel(modelNumber) {
  activeModel = modelNumber;
  document.getElementById('active-model-title').textContent = `Model ${modelNumber}`;
  switchView('english-sections-view');
}

function startEnglishQuiz(category) {
  startQuiz('english', category);
}

function showMathMenu() {
    switchView('math-menu-view');
}

function startQuiz(subject, category = null) {
    currentSubject = subject;
    currentCategory = category;
    switchView('quiz-view');

    document.getElementById('no-questions-state').classList.add('hidden');
    document.getElementById('quiz-content').classList.add('hidden');

    if (subject === 'math') {
        questions = prepareMathQuestions(category);
        shuffleArray(questions);
    } else if (subject === 'english') {
        questions = prepareEnglishQuestions(category);
    } else {
        questions = [];
    }

    currentIndex = 0;
    score = 0;

    if (questions.length === 0) {
        document.getElementById('empty-message').textContent = 'No questions found for this section.';
        document.getElementById('no-questions-state').classList.remove('hidden');
        document.getElementById('question-progress').textContent = '0 Questions';
    } else {
        document.getElementById('quiz-content').classList.remove('hidden');
        loadQuestion(0);
    }
}

function loadQuestion(index) {
currentIndex = index;
selectedOption = null;
isSubmitted = false;

const q = questions[currentIndex];
document.getElementById('question-progress').textContent = 'Question ' + (currentIndex + 1) + ' of ' + questions.length;
document.getElementById('score-display').textContent = score;

const imgElem = document.getElementById('question-image');
let textContainer = document.getElementById('question-text-container');

if (!textContainer) {
    textContainer = document.createElement('div');
    textContainer.id = 'question-text-container';
    textContainer.style.marginBottom = '20px';
    imgElem.parentNode.insertBefore(textContainer, imgElem);
}

if (q.imageSrc) {
    imgElem.src = q.imageSrc;
    imgElem.classList.remove('hidden');
    textContainer.classList.add('hidden');
} else {
    imgElem.classList.add('hidden');
    textContainer.classList.remove('hidden');
    textContainer.innerHTML = '';

    if (q.category) {
        const catDiv = document.createElement('div');
        catDiv.style.fontSize = '0.8rem';
        catDiv.style.fontWeight = '700';
        catDiv.style.color = '#4f46e5';
        catDiv.style.textTransform = 'uppercase';
        catDiv.style.letterSpacing = '1px';
        catDiv.style.marginBottom = '10px';
        catDiv.textContent = q.category;
        textContainer.appendChild(catDiv);
    }

    if (q.passage) {
        const passWrapper = document.createElement('div');
        passWrapper.style.backgroundColor = '#f8fafc';
        passWrapper.style.borderLeft = '4px solid #6366f1';
        passWrapper.style.padding = '12px';
        passWrapper.style.marginBottom = '16px';
        passWrapper.style.borderRadius = '6px';

        const passHeader = document.createElement('div');
        passHeader.style.display = 'flex';
        passHeader.style.justifyContent = 'space-between';
        passHeader.style.alignItems = 'center';
        passHeader.style.marginBottom = '8px';

        const passLabel = document.createElement('span');
        passLabel.style.fontSize = '0.75rem';
        passLabel.style.fontWeight = '700';
        passLabel.style.color = '#64748b';
        passLabel.style.textTransform = 'uppercase';
        passLabel.textContent = 'Passage Context';

        const expandBtn = document.createElement('button');
        expandBtn.textContent = '⤢ Expand Passage';
        expandBtn.style.padding = '4px 10px';
        expandBtn.style.fontSize = '0.75rem';
        expandBtn.style.fontWeight = '600';
        expandBtn.style.color = '#4f46e5';
        expandBtn.style.backgroundColor = '#e0e7ff';
        expandBtn.style.border = 'none';
        expandBtn.style.borderRadius = '4px';
        expandBtn.style.cursor = 'pointer';

        expandBtn.onclick = function() {
            showPassageModal(q.category, q.passage);
        };

        passHeader.appendChild(passLabel);
        passHeader.appendChild(expandBtn);

        const passDiv = document.createElement('div');
        passDiv.style.fontSize = '0.9rem';
        passDiv.style.color = '#334155';
        passDiv.style.lineHeight = '1.5';
        passDiv.style.maxHeight = '140px';
        passDiv.style.overflowY = 'auto';
        passDiv.style.whiteSpace = 'pre-wrap';
        passDiv.textContent = q.passage;

        passWrapper.appendChild(passHeader);
        passWrapper.appendChild(passDiv);
        textContainer.appendChild(passWrapper);
    }

    const qDiv = document.createElement('div');
    qDiv.style.fontSize = '1.05rem';
    qDiv.style.fontWeight = '600';
    qDiv.style.color = '#0f172a';
    qDiv.style.lineHeight = '1.4';
    qDiv.textContent = q.questionText;
    textContainer.appendChild(qDiv);
}

const buttons = document.querySelectorAll('.option-btn');
const labels = ['A', 'B', 'C', 'D'];
buttons.forEach(function(btn, idx) {
    btn.classList.remove('selected', 'correct', 'incorrect');
    btn.disabled = false;
    
    if (q.options && q.options[idx]) {
        btn.textContent = labels[idx] + ') ' + q.options[idx];
    } else {
        btn.textContent = labels[idx];
    }
});

document.getElementById('prev-btn').disabled = (currentIndex === 0);
document.getElementById('action-btn').disabled = true;
document.getElementById('action-btn').textContent = 'Submit';
}

function selectOption(index) {
if (isSubmitted) return;
selectedOption = index;

const buttons = document.querySelectorAll('.option-btn');
buttons.forEach(function(btn, idx) {
    if (idx === index) {
        btn.classList.add('selected');
    } else {
        btn.classList.remove('selected');
    }
});

document.getElementById('action-btn').disabled = false;
}

function handleAction() {
if (!isSubmitted) {
isSubmitted = true;
const options = ['A', 'B', 'C', 'D'];
const chosen = options[selectedOption];
const correct = questions[currentIndex].correctAnswer;
const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach(function(btn, idx) {
        btn.disabled = true;
        if (options[idx] === correct) {
            btn.classList.add('correct');
        }
        if (idx === selectedOption && chosen !== correct) {
            btn.classList.add('incorrect');
        }
    });

    if (chosen === correct) {
        score++;
        document.getElementById('score-display').textContent = score;
    }

    if (currentIndex === (questions.length - 1)) {
        document.getElementById('action-btn').textContent = 'Finish';
    } else {
        document.getElementById('action-btn').textContent = 'Next Question';
    }
} else {
    if (currentIndex !== (questions.length - 1)) {
        loadQuestion(currentIndex + 1);
    } else {
        showResults();
    }
}
}

function prevQuestion() {
if (currentIndex !== 0) {
loadQuestion(currentIndex - 1);
}
}

function showResults() {
switchView('results-view');
document.getElementById('final-score-text').textContent = 'Final Score: ' + score + ' out of ' + questions.length;
}

function restartQuiz() {
startQuiz(currentSubject, currentCategory);
}
