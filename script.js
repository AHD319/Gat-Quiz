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
  { category: 'Analogies', questionText: 'Mammal : Human', options: ["Tree : Leaf", "Fish : Water", "Bird : Sky", "Vehicle : Truck"], correctAnswer: 'D' }], wording: [
      // Sentence Completion
      { category: 'Wording', questionText: '_________ on the dental chair, with tubes and tools attached to his phone, Ahmed began _________ on his phone as his dentist set to work.', options: ["Reclined : typing", "cooking : stove", "flying : cloud", "sleeping : pillow"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'General _________ airports are smaller airports that process private, business, commercial, and _________ flights.', options: ["shoe : fast", "Aviation : charter", "cold : ice", "loud : noise"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'The end is coming for New York\'s public pay phones. New York City _________ say workers are currently _________ public pay phones from the city\'s streets.', options: ["swimming : deep", "cooking : hot", "Officials : removing", "flying : high"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Where you live has a huge _________ on your cultural heritage and also your _________ surroundings, change you.', options: ["Impact : immediate", "car : loud", "door : heavy", "tree : green"], correctAnswer: 'A' },
      { category: 'Wording', questionText: '_________ is the art of creating 3 dimensional objects from clay, it has many _________ including shaping, sculpting, drying, and firing to make durable pieces.', options: ["water : dry", "fire : cold", "shoe : lace", "Ceramics : techniques"], correctAnswer: 'D' },
      { category: 'Wording', questionText: '_________ were sent to space all around the earth by humans to _________ data.', options: ["Satellites : gather", "shoes : sleep", "chairs : fly", "tables : eat"], correctAnswer: 'A' },

      // Contextual Errors
      { category: 'Wording', questionText: 'The reintroduction of wolves has been commonly debated. These beloved beasts were once the most populous animals. Apparently, they headed back to the mainland during winter 2011-2012. Scattered throughout America, Canada, and mainland Europe.', options: ["reintroduction", "commonly", "beloved", "mainland"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Public reliance on plastic waste, paper, and glass, is increasing due to local government initiatives and personal efforts. Participation in these programs is high time on.', options: ["reliance", "increasing", "initiatives", "participation"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Veganism is an extension of vegetarianism that avoids the use of animal products, which has uncertain benefits for the environment, animals, humans, and lifestyle.', options: ["extension", "uncertain", "environment", "lifestyle"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Back in 1949, the scientist Johan von Neumann made a statement which was both extraordinarily wrong and profoundly correct. "It would appear," he wrote, "that we have reached the limits of what it is possible to corrupt with computer technology, although I should be careful with such statements, as they tend to sound pretty silly in five years."', options: ["extraordinarily", "profoundly", "corrupt", "statements"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Shannon Lucid was the first ever woman in space. She flew in space five times, including a prolonged mission aboard the Russian space station Mir. She remained in space from 1996 to 2007, with 2 Russian cosmonauts. Lucid held the record for the longest executive spent in space by a woman.', options: ["remained", "record", "executive", "mission"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'In New York the juvenile crime rates increased, so the government held parents and legal guardians responsible for their children\'s belongings, and they may pay a fine up to $5000 and take parenting classes.', options: ["belongings", "juvenile", "responsible", "parenting"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Beetles and peacocks are concealed in colors that change as onlookers move. It\'s called iridescent. It\'s produced when tiny structures reflect light.', options: ["onlookers", "concealed", "produced", "structures"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'In 1879, an American philosopher named Henry David Thoreau decided to live in the woods to reduce his philosophy. He believed that life should be lived simply, leaving all the luxuries behind, he says it stops human progression and affects a person\'s potential.', options: ["luxuries", "progression", "potential", "reduce"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'When people are asked how many languages there are, the answers vary. One aimless sampling of New Yorkers said "probably several hundred." However, this is not close.', options: ["vary", "aimless", "hundred", "close"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'News is everywhere, they serve events as soon as they happen. They also provide instant consideration of what happens around. They are also a business opportunity, because they can sell advertising, newspapers, and magazines.', options: ["everywhere", "consideration", "opportunity", "advertising"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Edward de Bono was despised for his way of thinking and originated thinking skill that got an entry to Oxford.', options: ["despised", "originated", "thinking", "entry"], correctAnswer: 'A' }
    ], reading: [
    // Passage 1: The Industrial Immigration
    { category: 'Reading Comprehension', passage: '"Urbanization occurred rapidly in the second half of the nineteenth century in the United States for a number of reasons. The new technologies of the time led to a massive leap in industrialization, requiring large numbers of workers. New electric lights and powerful machinery allowed factories to run twenty-four hours a day, seven days a week. Workers were forced into grueling twelve-hour shifts, requiring them to live close to the factories. While the work was dangerous and difficult, many Americans were willing to leave behind the declining prospects of preindustrial agriculture in the hope of better wages in industrial labor. Furthermore, problems ranging from famine to religious persecution led a new wave of immigrants to arrive from central, eastern, and southern Europe, many of whom settled and found work near the cities where they first arrived. Immigrants sought solace and comfort among others who shared the same language and customs, and the nation’s cities became an invaluable economic and cultural resource. Although cities such as Philadelphia, Boston, and New York sprang up from the initial days of colonial settlement, the explosion in urban population growth did not occur until the mid-nineteenth century At this time, the attractions of city life, and in particular, employment opportunities, grew exponentially due to rapid changes in industrialization. Before the mid-1800s, factories, such as the early textile mills, had to be located near rivers and seaports, both for the transport of goods and the necessary water power. Production became dependent upon seasonal water flow, with cold, icy winters all but stopping river transportation entirely. The development of the steam engine transformed this need, allowing businesses to locate their factories near urban centers. These factories encouraged more and more people to move to urban areas where jobs were plentiful, but hourly wages were often low and the work was routine and grindingly monotonous."', questionText: '1) Who does "whom" refer to in the second paragraph?', options: ["Immigrants", "Factory workers", "Farmers", "City officials"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '"Urbanization occurred rapidly in the second half of the nineteenth century in the United States for a number of reasons. The new technologies of the time led to a massive leap in industrialization, requiring large numbers of workers. New electric lights and powerful machinery allowed factories to run twenty-four hours a day, seven days a week. Workers were forced into grueling twelve-hour shifts, requiring them to live close to the factories. While the work was dangerous and difficult, many Americans were willing to leave behind the declining prospects of preindustrial agriculture in the hope of better wages in industrial labor. Furthermore, problems ranging from famine to religious persecution led a new wave of immigrants to arrive from central, eastern, and southern Europe, many of whom settled and found work near the cities where they first arrived. Immigrants sought solace and comfort among others who shared the same language and customs, and the nation’s cities became an invaluable economic and cultural resource. Although cities such as Philadelphia, Boston, and New York sprang up from the initial days of colonial settlement, the explosion in urban population growth did not occur until the mid-nineteenth century At this time, the attractions of city life, and in particular, employment opportunities, grew exponentially due to rapid changes in industrialization. Before the mid-1800s, factories, such as the early textile mills, had to be located near rivers and seaports, both for the transport of goods and the necessary water power. Production became dependent upon seasonal water flow, with cold, icy winters all but stopping river transportation entirely. The development of the steam engine transformed this need, allowing businesses to locate their factories near urban centers. These factories encouraged more and more people to move to urban areas where jobs were plentiful, but hourly wages were often low and the work was routine and grindingly monotonous."', questionText: '2) What did they work before industrialization?', options: ["Agriculture", "Factories", "Commerce", "Mining"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '"Urbanization occurred rapidly in the second half of the nineteenth century in the United States for a number of reasons. The new technologies of the time led to a massive leap in industrialization, requiring large numbers of workers. New electric lights and powerful machinery allowed factories to run twenty-four hours a day, seven days a week. Workers were forced into grueling twelve-hour shifts, requiring them to live close to the factories. While the work was dangerous and difficult, many Americans were willing to leave behind the declining prospects of preindustrial agriculture in the hope of better wages in industrial labor. Furthermore, problems ranging from famine to religious persecution led a new wave of immigrants to arrive from central, eastern, and southern Europe, many of whom settled and found work near the cities where they first arrived. Immigrants sought solace and comfort among others who shared the same language and customs, and the nation’s cities became an invaluable economic and cultural resource. Although cities such as Philadelphia, Boston, and New York sprang up from the initial days of colonial settlement, the explosion in urban population growth did not occur until the mid-nineteenth century At this time, the attractions of city life, and in particular, employment opportunities, grew exponentially due to rapid changes in industrialization. Before the mid-1800s, factories, such as the early textile mills, had to be located near rivers and seaports, both for the transport of goods and the necessary water power. Production became dependent upon seasonal water flow, with cold, icy winters all but stopping river transportation entirely. The development of the steam engine transformed this need, allowing businesses to locate their factories near urban centers. These factories encouraged more and more people to move to urban areas where jobs were plentiful, but hourly wages were often low and the work was routine and grindingly monotonous."', questionText: "3) What is the author's opinion about workers' work conditions?", options: ["It was hard", "It was pleasant", "It was safe", "It was easy"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '"Urbanization occurred rapidly in the second half of the nineteenth century in the United States for a number of reasons. The new technologies of the time led to a massive leap in industrialization, requiring large numbers of workers. New electric lights and powerful machinery allowed factories to run twenty-four hours a day, seven days a week. Workers were forced into grueling twelve-hour shifts, requiring them to live close to the factories. While the work was dangerous and difficult, many Americans were willing to leave behind the declining prospects of preindustrial agriculture in the hope of better wages in industrial labor. Furthermore, problems ranging from famine to religious persecution led a new wave of immigrants to arrive from central, eastern, and southern Europe, many of whom settled and found work near the cities where they first arrived. Immigrants sought solace and comfort among others who shared the same language and customs, and the nation’s cities became an invaluable economic and cultural resource. Although cities such as Philadelphia, Boston, and New York sprang up from the initial days of colonial settlement, the explosion in urban population growth did not occur until the mid-nineteenth century At this time, the attractions of city life, and in particular, employment opportunities, grew exponentially due to rapid changes in industrialization. Before the mid-1800s, factories, such as the early textile mills, had to be located near rivers and seaports, both for the transport of goods and the necessary water power. Production became dependent upon seasonal water flow, with cold, icy winters all but stopping river transportation entirely. The development of the steam engine transformed this need, allowing businesses to locate their factories near urban centers. These factories encouraged more and more people to move to urban areas where jobs were plentiful, but hourly wages were often low and the work was routine and grindingly monotonous."', questionText: '4) What can you understand from this passage?', options: ["The immigrants felt lonely", "The author is European", "The increase in electricity made the factories work the whole day", "Agriculture was growing rapidly"], correctAnswer: 'C' },
    { category: 'Reading Comprehension', passage: '"Urbanization occurred rapidly in the second half of the nineteenth century in the United States for a number of reasons. The new technologies of the time led to a massive leap in industrialization, requiring large numbers of workers. New electric lights and powerful machinery allowed factories to run twenty-four hours a day, seven days a week. Workers were forced into grueling twelve-hour shifts, requiring them to live close to the factories. While the work was dangerous and difficult, many Americans were willing to leave behind the declining prospects of preindustrial agriculture in the hope of better wages in industrial labor. Furthermore, problems ranging from famine to religious persecution led a new wave of immigrants to arrive from central, eastern, and southern Europe, many of whom settled and found work near the cities where they first arrived. Immigrants sought solace and comfort among others who shared the same language and customs, and the nation’s cities became an invaluable economic and cultural resource. Although cities such as Philadelphia, Boston, and New York sprang up from the initial days of colonial settlement, the explosion in urban population growth did not occur until the mid-nineteenth century At this time, the attractions of city life, and in particular, employment opportunities, grew exponentially due to rapid changes in industrialization. Before the mid-1800s, factories, such as the early textile mills, had to be located near rivers and seaports, both for the transport of goods and the necessary water power. Production became dependent upon seasonal water flow, with cold, icy winters all but stopping river transportation entirely. The development of the steam engine transformed this need, allowing businesses to locate their factories near urban centers. These factories encouraged more and more people to move to urban areas where jobs were plentiful, but hourly wages were often low and the work was routine and grindingly monotonous."', questionText: '5) What is the main idea?', options: ["Industrialization led to urbanization", "Electricity was invented in Europe", "Steam engines replaced factories", "Agriculture is the best labor"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '"Urbanization occurred rapidly in the second half of the nineteenth century in the United States for a number of reasons. The new technologies of the time led to a massive leap in industrialization, requiring large numbers of workers. New electric lights and powerful machinery allowed factories to run twenty-four hours a day, seven days a week. Workers were forced into grueling twelve-hour shifts, requiring them to live close to the factories. While the work was dangerous and difficult, many Americans were willing to leave behind the declining prospects of preindustrial agriculture in the hope of better wages in industrial labor. Furthermore, problems ranging from famine to religious persecution led a new wave of immigrants to arrive from central, eastern, and southern Europe, many of whom settled and found work near the cities where they first arrived. Immigrants sought solace and comfort among others who shared the same language and customs, and the nation’s cities became an invaluable economic and cultural resource. Although cities such as Philadelphia, Boston, and New York sprang up from the initial days of colonial settlement, the explosion in urban population growth did not occur until the mid-nineteenth century At this time, the attractions of city life, and in particular, employment opportunities, grew exponentially due to rapid changes in industrialization. Before the mid-1800s, factories, such as the early textile mills, had to be located near rivers and seaports, both for the transport of goods and the necessary water power. Production became dependent upon seasonal water flow, with cold, icy winters all but stopping river transportation entirely. The development of the steam engine transformed this need, allowing businesses to locate their factories near urban centers. These factories encouraged more and more people to move to urban areas where jobs were plentiful, but hourly wages were often low and the work was routine and grindingly monotonous."', questionText: '6) What is the meaning of ( INITIAL )?', options: ["Early", "Past", "Difficult", "Late"], correctAnswer: 'A' },

    // Passage 2: Maslow's Law (Pyramid)
    { category: 'Reading Comprehension', passage: "[Passage: Maslow's Law]", questionText: '1) How many levels do the philosopher (Maslow) theory have?', options: ["It was 5", "It was 3", "It was 4", "It was 7"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: "[Passage: Maslow's Law]", questionText: "2) What does the author think about Maslow's idea?", options: ["It is just a theory but it is not scientifically proven", "It is completely false", "It is a proven physical law", "It is only for children"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: "[Passage: Maslow's Law]", questionText: '3) What does (He) refer to in the passage?', options: ["person", "life", "death", "Maslow"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: "[Passage: Maslow's Law]", questionText: '4) What does the word "enable" mean in the passage?', options: ["Allow", "Prevent", "Easy", "Hard"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: "[Passage: Maslow's Law]", questionText: '5) How many levels are the deficiency needs?', options: ["4 levels", "2 levels", "5 levels", "1 level"], correctAnswer: 'A' },

    // Passage 3: Accounting
    { category: 'Reading Comprehension', passage: '[Passage: Accounting]', questionText: "1) What's the main idea?", options: ["Accounting is the language of everyday life", "Accounting is used in both personal and professional life", "Account finance was only useful for business owners", "Accounting is only for mathematicians"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Accounting]', questionText: '2) What do we learn/understand from this passage?', options: ["College students usually pick high-paying jobs", "Business owners need an accountant to manage their finances", "Accountants only use financial factors in their analysis", "Finance is needed in life not only in business"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Accounting]', questionText: '3) What decision did the graduate have to make?', options: ["Choosing where to live", "Choosing to lease a car or buy a car", "Deciding between one job and another", "Choosing a college major"], correctAnswer: 'C' },
    { category: 'Reading Comprehension', passage: '[Passage: Accounting]', questionText: '4) What does the author think about accountants?', options: ["They play an important role in every person's life even in personal matters", "They were organized", "They used the language of life", "Accountants are highly trained specialists in their field"], correctAnswer: 'D' },
    { category: 'Reading Comprehension', passage: '[Passage: Accounting]', questionText: '5) Which of the following is true about accounting?', options: ["Accounting has an important effect on personal and professional life", "Accounting is simple", "Accounting is unnecessary", "Accounting only applies to banking"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Accounting]', questionText: '6) What is true from the context of the passage?', options: ["Accountants only use financial factors", "Accountants train a lot", "Accountants are highly paid", "Every business needs an accountant"], correctAnswer: 'D' },
    { category: 'Reading Comprehension', passage: '[Passage: Accounting]', questionText: '7) What does (scenarios) refer to in the passage?', options: ["situations", "stories", "calculations", "plans"], correctAnswer: 'A' },

    // Passage 4: Entrepreneurs and Small Businesses
    { category: 'Reading Comprehension', passage: '[Passage: Entrepreneurs and Small Businesses]', questionText: '1) What does (one) refer to in the passage? The sentence was "In an ideal world, you would create a business where one doesn\'t already exist"', options: ["Business", "World", "Person", "Idea"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Entrepreneurs and Small Businesses]', questionText: '2) What does the author think about small business owners?', options: ["They are different from entrepreneurs", "They take risks", "They open restaurants", "They work in factories"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Entrepreneurs and Small Businesses]', questionText: '3) What is the main idea of the passage?', options: ["It is difficult to determine a definition of entrepreneur", "The difference between small business owners, entrepreneurs and franchisers", "Small businesses always fail", "Anyone can be a franchiser easily"], correctAnswer: 'B' }
  ] },
  2: { analogy: [{ category: 'Analogies', questionText: 'Fire : Gun', options: ["Fly : Wings", "Bullet : Lead", "Dark : Light", "Shoot : Target"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Drought : Famine', options: ["War : Death", "Peace : Joy", "Rain : Wet", "Wind : Cold"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Factory : Production', options: ["Table : Chair", "Angry : Shout", "Cat : Dog", "Blue : Color"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Cry : Sadness', options: ["Smile : Face", "Tears : Eye", "Laugh : Joke", "Gasp : Surprise"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Milk : Ice Cream', options: ["Dog : Bark", "Run : Jump", "Cold : Warm", "Gold : Necklace"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Chop : Firewood', options: ["Fast : Slow", "Fish : Swim", "Sun : Sky", "Write : Novel"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Tired : Weak', options: ["Big : Small", "Dirty : Filthy", "Happy : Sad", "Clean : Fresh"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Sleeve : Shirt', options: ["Bright : Dark", "Page : Novel", "Run : Fast", "High : Low"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Storm : Lightning', options: ["Soft : Hard", "Injury : Pain", "Book : Read", "Walk : Street"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Cooking : Meal', options: ["Old : New", "Cat : Meow", "Tall : Short", "Typing : Email"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Carry on : Continue', options: ["Stop : Go", "Begin : End", "Nervous : Anxious", "Calm : Angry"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Attack : Defend', options: ["Hot : Cold", "Rain : Umbrella", "Up : Down", "Win : Lose"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Good looking : Gorgeous', options: ["Big : Small", "Angry : Furious", "Happy : Sad", "Hot : Cold"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Encyclopedia : Dictionary', options: ["Car : Wheel", "Freezer : Fridge", "Book : Page", "Dog : Cat"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Gym : Workout', options: ["Green : Color", "Bank : Withdrawal", "Bird : Fly", "Fast : Slow"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Take off : Fly', options: ["Stop : Run", "Wake up : Get up", "Sleep : Dream", "Sit : Stand"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Handle : Door', options: ["Sweet : Sour", "Light : Dark", "Trunk : Tree", "Walk : Run"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Eagle : Hawk', options: ["Big : Small", "Rice : Wheat", "Up : Down", "Fast : Slow"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Sofa : Rug', options: ["Cinnamon : Ginger", "Hot : Cold", "High : Low", "Near : Far"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Hospital : Wing', options: ["Fast : Slow", "Run : Walk", "Bright : Dark", "Window : Room"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Win : Lose', options: ["Push : Pull", "High : Tall", "Fast : Quick", "Start : Begin"], correctAnswer: 'A' }
], wording: [
      // Sentence Completion
      { category: 'Wording', questionText: 'Fish have ......... tails, aquatic ......... have horizontal.', options: ["hot : ice", "vertical : mammals", "loud : silence", "fast : slow"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'The Grand Canyon in Arizona is amazing to see in person. Photos and videos are beautiful, but they do not do it ......... as the true experience is hard to fully .........', options: ["justice : comprehend", "cook : stove", "sleep : bed", "fly : sky"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Sharks are ......... to the ocean; one of their ......... is helping maintain the balance of the food chain by controlling the population of other species.', options: ["flying : high", "swimming : deep", "crucial : roles", "sleeping : dark"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Babies learn words by listening to, repeating, and being exposed to language. They usually ......... new words quickly, and by around 18 months they can ......... them to make short sentences.', options: ["shoe : lace", "car : engine", "tree : leaf", "pick up : combine"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'One of the greatest ......... of successful teaching is student boredom. This is often ......... by the deadening predictability of much classroom time.', options: ["food : sweet", "enemies : caused", "water : dry", "fire : cold"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Ali\'s ......... was on his desk all the .........', options: ["Notebook : time", "shoes : laces", "cars : tires", "phones : screens"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'The Radisson hotel is rewarding its residents with a new ......... and extra ......... by offering extra points and special perks for their stays.', options: ["ice : hot", "experience : benefits", "materials : affordable", "water : dry"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'It is important for companies to reward employees with _________ such as _________.', options: ["loud : quiet", "fast : slow", "Experience : traveling", "heavy : light"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'What the hardest language question is _________ even linguists _________ it.', options: ["shoe : softness", "car : speed", "phone : volume", "controversial : debate"], correctAnswer: 'D' },

      // Contextual Errors
      { category: 'Wording', questionText: 'When people are asked how many languages there are, the answers vary. One aimless sampling of New Yorkers said "probably several hundred." However, this is not close.', options: ["vary", "aimless", "hundred", "close"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Although humankind has not been able to travel outside its environment beyond space, scientists believe that in the near future it could become a multi-planetary species that can reach neighboring planets, such as Mars.', options: ["environment", "species", "neighboring", "planets"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'If you want to purchase a car, the owner may expect you to be at their mercy, but you can approach the deal wisely to avoid paying a high premium.', options: ["purchase", "mercy", "wisely", "premium"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Dinosaurs appeared about 250 million years ago and they maintained their existence for 80 million years worldwide. Scientists found parts or species of dinosaurs that indicated some evolution into birds.', options: ["appeared", "maintained", "indicated", "evolution"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'In hot and humid climates, sweat production increases, leading to salt loss and physical exertion increases this effect. Exchanging body salt is not always recommended, as it may disturb water and salt balance and reduce performance efficiency.', options: ["increases", "exertion", "Exchanging", "recommended"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Do not touch the internal parts of the unit. Leave any required service work to qualified service personnel only. If this hardware is dropped, immediately remove the battery or unplug the AC adaptor.', options: ["internal", "qualified", "hardware", "immediately"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Our vision is to craft the brands and choice of drinks that people love, to refresh them in body and spirit. And done in ways that create a more sustainable business and better shared future that makes a additional in people\'s lives, communities and our planet.', options: ["brands", "sustainable", "additional", "communities"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'In Finland, students have both high reading proficiency and high life satisfaction. This is most likely because Finnish students have a healthy balance of school and free time, allowing them to trust more extracurricular activities.', options: ["proficiency", "satisfaction", "healthy", "trust"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Getting cheap flights often requires spontaneous in travel dates and plans, being flexible with your travel dates, destinations, or options helps you find the best airfare transactions and deals.', options: ["spontaneous", "flexible", "transactions", "deals"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Some kind of spider is very dangerous to humans. It is raised in Australia.', options: ["kind", "dangerous", "raised", "humans"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'In March 2023, a disgruntled ex-employee accessed his unimportant computer test systems after being terminated and deleted 180 virtual servers on the company\'s network, resulting in services becoming unavailable and significant disruption to operations.', options: ["unimportant", "terminated", "unavailable", "disruption"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'In the space of a little more than a year, events provide that made a mockery of the claim that the lavish compensation paid to financiers was justified by their exceptional skills, particularly in the realm of risk management.', options: ["mockery", "lavish", "provide", "exceptional"], correctAnswer: 'C' }
    ], reading: [
    // Passage 1: Marketing (Business Communication)
    { category: 'Reading Comprehension', passage: '[Passage: Marketing]', questionText: '1) What does (they) refer to in paragraph 2?', options: ["Businesses", "managers", "buyers", "products"], correctAnswer: 'C' },
    { category: 'Reading Comprehension', passage: '[Passage: Marketing]', questionText: "2) Who determines the product's value?", options: ["The customers (Buyers)", "Economies", "Sellers", "Factory workers"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Marketing]', questionText: '3) What is the main idea of the passage?', options: ["Good marketing depends on communication and understanding customer needs", "Products should be expensive", "Communication is not important in business", "Buyers do not care about quality"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Marketing]', questionText: '4) What is the best synonym of the highlighted word (EVOLVING)?', options: ["Develop", "Stop", "Decrease", "Ignore"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Marketing]', questionText: '5) What is the main idea of the 2nd paragraph about good communication?', options: ["Ethics and honesty", "Having them understand your point of view", "Avoid talking about the problem", "Hiding financial losses"], correctAnswer: 'A' },

    // Passage 2: Teacher-Student Relationship
    { category: 'Reading Comprehension', passage: '[Passage: Teacher-Student Relationship]', questionText: '1) What does that underlined refer to?', options: ["teaching", "insight", "Student", "lesson"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Teacher-Student Relationship]', questionText: '2) What was the meaning of novelty?', options: ["surprise", "Courage", "Fear", "Routine"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Teacher-Student Relationship]', questionText: '3) What is the main idea of the first paragraph?', options: ["Education has become boring and students are not motivated", "The teachers try their best in everything", "It keeps on changing and improving", "Exams are too difficult for everyone"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Teacher-Student Relationship]', questionText: '4) What can you tell about paragraph (2)?', options: ["Teaching is boring and everything is the same", "While teaching, you will meet many students with different ways of thinking", "Showing how teachers need to try their best", "How teaching improved their life"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Teacher-Student Relationship]', questionText: '5) What is the meaning of "bad things happen to good teachers"?', options: ["Even teachers with good intentions can end up with bad students", "Good teachers are always lucky", "Schools are poorly managed", "Teaching is an easy job"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Teacher-Student Relationship]', questionText: '6) What is the main idea of paragraph 2?', options: ["Teaching helps teachers know their students' strength and weaknesses", "Students dislike teachers", "Homework is necessary", "Teachers should not grade papers"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Teacher-Student Relationship]', questionText: '7) What was the idea of the final paragraph?', options: ["Teacher-student interactions can become negative when understanding and communication fail", "Teachers should retire early", "Students always respect rules", "Education is unnecessary"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Teacher-Student Relationship]', questionText: '8) What can you understand from the last paragraph?', options: ["The book is made to help teachers", "Teachers need to change careers", "Students write books", "Psychology is not helpful"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Teacher-Student Relationship]', questionText: '9) What does (one) refer to in "teachers experience events that they didnt expect, and ones they do"?', options: ["students", "things", "teacher", "events"], correctAnswer: 'D' },

    // Passage 3: An Entrepreneurial Mindset
    { category: 'Reading Comprehension', passage: '[Passage: An Entrepreneurial Mindset]', questionText: '1) Meaning of mindset?', options: ["Attitude", "Skill", "Knowledge", "Experience"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: An Entrepreneurial Mindset]', questionText: '2) From paragraph (1) what does the author think of who could be an entrepreneur?', options: ["They needed to have certain characteristics and traits", "Their parents were entrepreneurs (had a business)", "Only wealthy individuals", "Anyone with a degree"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: An Entrepreneurial Mindset]', questionText: '3) What could help someone to become an entrepreneur?', options: ["Certain characteristics, ideas, and goals", "Inheritance", "Pure luck", "Working in government"], correctAnswer: 'A' },

    // Passage 4: Biology
    { category: 'Reading Comprehension', passage: '[Passage: Biology]', questionText: '1) What is the main idea of the passage?', options: ["Biology has many branches and is broader than just human-related medical topics.", "Biology is only about human surgery", "Biology is a branch of chemistry", "Only doctors study biology"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Biology]', questionText: '2) Which of the following is part of biology according to the passage?', options: ["plants and rainforest", "Open heart surgery", "climate change", "organic farming"], correctAnswer: 'A' },

    // Passage 5: Relationship in COVID
    { category: 'Reading Comprehension', passage: '[Passage: Relationship in COVID]', questionText: '1) What was the main idea?', options: ["Due to COVID couples had to improvise and adjust", "All couples divorced during COVID", "Lockdowns were very easy for families", "COVID ended all relationship research"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Relationship in COVID]', questionText: '2) What does the word contemplate mean?', options: ["determining", "considering", "planning", "ignoring"], correctAnswer: 'B' }
  ] },
  3: { analogy: [{ category: 'Analogies', questionText: 'Shopping : Supermarket', options: ["Fast : Slow", "Praying : Mosque", "Red : Color", "Bird : Sing"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Fresh : Putrid', options: ["Big : Small", "Delightful : Refusal", "Hot : Cold", "Day : Night"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Toothache : Dentist', options: ["Breakdown : Mechanic", "Sun : Moon", "Pen : Paper", "Cat : Dog"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Hair : Head', options: ["Up : Down", "Fast : Slow", "Roots : Potato", "Light : Dark"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Lens : Camera', options: ["Warm : Cold", "Blade : Knife", "High : Low", "Soft : Hard"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Bake : Oven', options: ["Big : Small", "Day : Night", "Write : Pencil", "Run : Fast"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Cold : Shiver', options: ["Relax : Relief", "Blue : Sky", "Book : Read", "Table : Chair"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Read : Learn', options: ["Black : White", "Rain : Flood", "Up : Down", "Left : Right"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Consistent : Steady', options: ["Hot : Cold", "Strategy : Plan", "In : Out", "High : Low"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Room : House', options: ["Country : World", "Fast : Slow", "Bright : Dark", "Soft : Hard"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Last : End', options: ["Day : Night", "Terrifying : Horrifying", "Hot : Cold", "Up : Down"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Cacao : Chocolate', options: ["Fast : Slow", "Sun : Heat", "Green : Grass", "Cotton : Shirt"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Argument : Disagreement', options: ["Cold : Hot", "Strategy : Plan", "Light : Dark", "Up : Down"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Bathroom : Wash', options: ["Soft : Hard", "Land : Walk", "Big : Small", "Tall : Short"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Freeze : Ice', options: ["Dog : Bark", "Fast : Car", "Red : Apple", "Study : Knowledge"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Pony : Horse', options: ["Up : Down", "Hot : Cold", "Left : Right", "Cheddar : Cheese"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Oven : Cook', options: ["Big : Small", "Black : White", "Ignite : Light", "Sun : Sky"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Star : Galaxy', options: ["Soft : Hard", "Tree : Forest", "High : Low", "Fast : Slow"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Cotton : Soft', options: ["Day : Night", "Wool : Warm", "Run : Walk", "Book : Page"], correctAnswer: 'B' }
], wording: [
      // Sentence Completion
      { category: 'Wording', questionText: 'The Vikings\' journeys led to the ......... of new lands and the ......... of the UK and another countries.', options: ["conquest : formation", "water : ice", "fire : cold", "sky : blue"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'The flat rock ......... down the riverbank through the ......... blue river.', options: ["shoe : size", "extends : beautiful", "car : speed", "tree : height"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Recent ......... have helped deaf people to learn and communicate so they can now watch television without the need for someone to ......... for them.', options: ["river : swim", "cloud : rain", "innovations : interpret", "mountain : climb"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Carbon dioxide is used in many ......... and in ......... to give it more fizz.', options: ["cooking : stove", "sleeping : bed", "flying : sky", "industries : beverages"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Some people link ......... ideas to failure, but I think failure helps them become more .........', options: ["fly : high", "negative : resilient", "cook : hot", "swim : deep"], correctAnswer: 'B' },

      // Contextual Errors
      { category: 'Wording', questionText: 'Students have many career opinions and pathways.', options: ["opinions", "career", "pathways", "students"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'You should duplicate yourself to be more successful.', options: ["yourself", "successful", "duplicate", "more"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'People should manage their anger, otherwise it could cause fragility of relationships.', options: ["manage", "anger", "fragility", "relationships"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Philanthropy is the act of helping others, and it can also be done through observing to help those who need it.', options: ["philanthropy", "helping", "observing", "need"], correctAnswer: 'C' },
      { category: 'Wording', questionText: '3D printers are most likely to take over manufacturing in the future. Creative people who call themselves makers have already formed communities to share their noxious work online and reach more people.', options: ["manufacturing", "communities", "reach", "noxious"], correctAnswer: 'D' },
      { category: 'Wording', questionText: '"The Story of My Experiments with Truth" is a book about Gandhi\'s personal life. He was a key factor of the century, and the book provides information about his life as one of the leaders in India who had an impact on history and war.', options: ["factor", "information", "leaders", "impact"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'People who live abroad urgently should respect the laws of those countries.', options: ["abroad", "urgently", "respect", "laws"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'A psychologist graded the assessment based on traits, personalities, and colors, saying that colors classify people, and a version of it is available online for the public.', options: ["graded", "psychologist", "assessment", "classify"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Speeding and attempts at controlling it is not a modern solution. For example, in the introduction of horseless carriages in the 19th century, they were prohibited from going faster than walking pace, and a man carrying a red flag was required to walk in front of the vehicle to prevent it from hitting people.', options: ["controlling", "introduction", "solution", "prohibited"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Veganism is an extension of vegetarianism that avoids the use of animal products, which has uncertain benefits for the environment, animals, humans, and lifestyle.', options: ["extension", "uncertain", "environment", "lifestyle"], correctAnswer: 'B' }
    ], reading: [
    // Passage 1: The Biogeography
    { category: 'Reading Comprehension', passage: '[Passage: The Biogeography]', questionText: '1) What is unusual about Venus flytraps?', options: ["They don't exist everywhere", "They were restricted in size", "They were only in North and South Carolina", "They were native to North and Central America"], correctAnswer: 'C' },
    { category: 'Reading Comprehension', passage: '[Passage: The Biogeography]', questionText: '2) What is the main idea of the passage?', options: ["Organisms are different depending on where you go", "Abiotic factors affect organisms and the environment", "Venus flytraps are dangerous predators", "Ecosystems never change over time"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: The Biogeography]', questionText: '3) What does "it" refer to in paragraph 2?', options: ["the raccoon", "the species", "the ecosystem", "the temperature"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Biogeography]', questionText: '4) What can you understand from the passage?', options: ["Deserts 30 degrees to the north have places of dry forests", "Plants on the equator are found nowhere else", "Abiotic factors change based on mountains and rainfall", "South of the equator has similar organisms"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Biogeography]', questionText: '5) What does the word "composition" refer to?', options: ["Appearance", "Presence", "Structure", "Color"], correctAnswer: 'C' },

    // Passage 2: Business Ethics
    { category: 'Reading Comprehension', passage: '[Passage: Business Ethics]', questionText: '1) Which of the following companies paid minimum wage or supported minimum wages?', options: ["Nixon", "McDonald", "CEO", "Uber"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Business Ethics]', questionText: '2) What does "Its" refer to in paragraph 4 ("The idea of business ethics may seem subjective, but it...")?', options: ["Idea", "Business", "Ethics", "Company"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Business Ethics]', questionText: '3) What does "its" refer to in paragraph 2?', options: ["Car", "Company", "Campaign", "Driver"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Business Ethics]', questionText: '4) What does the author think about leaders?', options: ["Leaders should give support and teaching to their employees", "The manager needs to set a good example for others to follow", "Leaders should focus only on company profits", "Leaders should ignore small business ethics"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Business Ethics]', questionText: '5) What does "CORE" refer to in paragraph 1?', options: ["Central", "Ideal", "Probable", "Singular"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Business Ethics]', questionText: '6) What is the main idea of the passage?', options: ["A good business needs to have a good reputation", "McDonalds funding was illegal", "CEOs should drive their own cars", "Business ethics are strictly financial"], correctAnswer: 'A' },

    // Passage 3: Macroeconomics and Microeconomics
    { category: 'Reading Comprehension', passage: '[Passage: The Macroeconomics and Microeconomic]', questionText: '1) What is the closest meaning of the word "generates"?', options: ["produces", "consumes", "destroys", "manages"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Macroeconomics and Microeconomic]', questionText: '2) How was the gross domestic product calculated?', options: ["Every year", "Every 6 months", "Every month", "Every 5 years"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Macroeconomics and Microeconomic]', questionText: '3) What is the main idea of the passage?', options: ["Macroeconomics is the core factor involved with other factors on a global scale", "The main parts of microeconomics", "Small businesses do not affect the economy", "Gross domestic product is unnecessary"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Macroeconomics and Microeconomic]', questionText: '4) What is the purpose of this passage?', options: ["To explain economic factors and company operations", "To criticize big corporations", "To promote stock trading", "To compare national currencies"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Macroeconomics and Microeconomic]', questionText: '5) What did we learn from this passage?', options: ["Macroeconomics and microeconomics work together to support a business", "Microeconomics is only for small shops", "GDP is calculated every week", "Global markets do not interact"], correctAnswer: 'A' },

    // Passage 4: Atoms and Elements
    { category: 'Reading Comprehension', passage: '[Passage: Atoms and Elements]', questionText: '1) What is a tissue according to the text?', options: ["Similar cells combine to make tissues", "Organisms with single cells", "Chemical bonds between atoms", "A layer of dead skin"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Atoms and Elements]', questionText: '2) What are cells?', options: ["Building blocks of the body", "Invisible particles in water", "Organelles that store energy", "Molecules that split atoms"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Atoms and Elements]', questionText: '3) What does "it" refer to in this passage?', options: ["Atom", "Elements", "Tissue", "Cell"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Atoms and Elements]', questionText: '4) What is the main idea of the passage?', options: ["Bacteria has double walls", "Atoms are the smallest thing in the human body", "Each organism has a different structure", "Molecules are the basic elements for all living things"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Atoms and Elements]', questionText: '5) What did you understand from the passage?', options: ["There are different types of levels in organizations starting from smallest to biggest", "Cells are larger than organs", "Tissues exist outside of living things", "Atoms do not form molecules"], correctAnswer: 'A' }
  ] },
  4: { analogy: [{ category: 'Analogies', questionText: 'Jacket : Coat', options: ["Fast : Slow", "Up : Down", "Hot : Cold", "Helicopter : Plane"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Illness : Cure', options: ["Red : Color", "Day : Night", "Big : Small", "Obesity : Diet"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Engine : Car', options: ["Fast : Slow", "High : Low", "Cold : Warm", "Keyboard : Computer"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Knife : Slice', options: ["Blue : Sky", "Tall : Short", "Shovel : Dig", "In : Out"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Beef : Meat', options: ["Fast : Slow", "Run : Walk", "Bright : Dark", "Onion : Vegetable"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Order : Receive', options: ["Big : Small", "Day : Night", "Soft : Hard", "Check in : Board"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Polish : Shiny', options: ["Left : Right", "Work : Tired", "Up : Down", "Red : Green"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Exercise : Sweaty', options: ["Cook : Hot", "Tall : Short", "Big : Small", "In : Out"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Arrive : Depart', options: ["True : False", "Big : Large", "Fast : Quick", "Smart : Clever"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Smoking : Cancer', options: ["Cure : Well", "Up : Down", "Hot : Cold", "Light : Dark"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Current : Contemporary', options: ["Day : Night", "Respectful : Polite", "High : Low", "In : Out"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Request : Demand', options: ["Cold : Hot", "Up : Down", "Black : White", "Want : Crave"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Curious : Ask', options: ["Red : Blue", "Dishonest : Cheat", "High : Low", "Fast : Slow"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Gasoline : Ignite', options: ["Day : Night", "Big : Small", "Tall : Short", "Power : Energy"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Mistake : Correct', options: ["Soft : Hard", "Run : Walk", "Bright : Dark", "Obsolete : Modernize"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Stream : River', options: ["Fast : Slow", "In : Out", "Hot : Cold", "Hill : Plateau"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Success : Proud', options: ["Left : Right", "Cure : Well", "Up : Down", "Red : Yellow"], correctAnswer: 'B' }], wording: [
      // Sentence Completion
      { category: 'Wording', questionText: 'A lot of natural disasters have been happening like earthquakes, tsunamis, and volcanic ......... under the ocean can reach the ......... of a flying jet.', options: ["Eruptions : speed", "Cooking : shoes", "Sleeping : dark", "Flying : soup"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Alligators are scary but they have nothing on their cousins the ......... crocodile that will devour anything in its .........', options: ["sleeping : bed", "fearsome : path", "cooking : stove", "running : sky"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Portugal is the nicest and the most ......... country, many ......... say that it is ranked the 96 nicest country.', options: ["crying : shoe", "freezing : heat", "Welcoming : survey", "flying : rock"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'The Pyramids of Giza, built to endure an eternity, have done just that. The ......... tombs are relics of Egypt\'s Old Kingdom ......... and were constructed some 4,500 years ago.', options: ["cold : water", "fast : speed", "loud : noise", "monumental : era"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Although it has been 20 years since the last flight of the Concorde aircraft, it has ......... the minds of many people. It was a great .........', options: ["captured : innovation", "cooked : meal", "slept : bed", "swam : river"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Ray Tomlinson sends the first ever email in 1971, bringing electronic messaging to the ......... and revolutionizing the way we .........', options: ["tables : sleep", "masses : communicate", "chairs : fly", "shoes : eat"], correctAnswer: 'B' },

      // Contextual Errors
      { category: 'Wording', questionText: 'No manuals will be reproduced, maintained by any means without the company\'s distribution.', options: ["reproduced", "maintained", "distribution", "company\'s"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Despite Minecraft being launched in 2009, it remains one of the best-selling games by a margin, many players still play it today as the game improves and remains highly popular.', options: ["launched", "margin", "improves", "popular"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'When people are asked how many languages there are, the answers vary. One aimless sampling of New Yorkers said "probably several hundred." However, this is not close.', options: ["vary", "aimless", "hundred", "close"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Although humankind has not been able to travel outside its environment beyond space, scientists believe that in the near future it could become a multi-planetary species that can reach neighboring planets, such as Mars.', options: ["environment", "species", "neighboring", "planets"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Our vision is to craft the brands and choice of drinks that people love, to refresh them in body & spirit. And done in ways that create a more sustainable business and better shared future that makes a additional in people\'s lives, communities and our planet.', options: ["brands", "sustainable", "additional", "communities"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Persian rugs and carpets of various types were woven in equal by nomadic tribes in village and town workshops, and by royal court manufactories alike.', options: ["various", "equal", "workshops", "alike"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Greenland sharks have the longest life-spans of any known vertebrate, required to be between 250 and 500 years. They are among the largest extant shark species, reaching an astonishing length of 6.4 m (21 ft), the shark is a generalist feeder, consuming a variety of available foods, including carrion.', options: ["spans", "required", "astonishing", "feeder"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'To invest successfully over a lifetime does not require a stratospheric IQ, unusual business insights, or inside information. What\'s needed is a sound intellectual framework for making decisions and the ability to keep suspicious from corroding the framework.', options: ["insights", "decisions", "suspicious", "corroding"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Shelter is essential for survival. It receives wind and rain and reduces rapid heat loss, helping you stay warm enough to survive in harsh conditions.', options: ["receives", "rapid", "helping", "harsh"], correctAnswer: 'A' }
    ], reading: [
    // Passage 1: U.S. Government Types
    { category: 'Reading Comprehension', passage: '[Passage: U.S. Government Types]', questionText: '1) What did the state government do specifically for the elderly?', options: ["Assisted housing (Assisted the elderly)", "Immunization", "Public safety", "Food delivery"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: U.S. Government Types]', questionText: '2) What is the main idea of the whole paragraph?', options: ["The difference between state governments and how they dictate their finances", "How the government supports public schools and owned colleges", "USA government systems may seem the same but they vary", "Local governments do not collect property taxes"], correctAnswer: 'C' },
    { category: 'Reading Comprehension', passage: '[Passage: U.S. Government Types]', questionText: '3) What does "Others" refer to in the passage?', options: ["Citizens", "Stockholders", "Government", "Entities"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: U.S. Government Types]', questionText: '4) What is the main idea of paragraph 2 and 3?', options: ["They cared about public safety", "The government was responsible for paying almost everything", "Local services benefit citizens through property tax funding", "State housing is managed by federal entities"], correctAnswer: 'C' },
    { category: 'Reading Comprehension', passage: '[Passage: U.S. Government Types]', questionText: '5) Where do you think this text was taken from?', options: ["It was picked from a textbook that speaks about USA public finance", "It was picked from an article that speaks about USA government", "It was picked from an article that speaks about USA finance", "It was picked from a report about USA finance"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: U.S. Government Types]', questionText: '6) What is the meaning of the word "Incentive"?', options: ["Encouragement", "Responsibility", "Method", "Solution"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: U.S. Government Types]', questionText: '7) What was paragraph 1 talking about?', options: ["The federal government is responsible for national defense and protecting the country", "The governments are similar and work in the same way", "State governments handle international diplomacy", "Local councils manage federal military funds"], correctAnswer: 'A' },

    // Passage 2: Science
    { category: 'Reading Comprehension', passage: '[Passage: Science]', questionText: '1) What is the main idea of the text?', options: ["A scientist's goal is to know about the world around them (explore the world)", "Curiosity is harmful to scientific development", "Deductive reasoning is better than inductive reasoning", "Science focuses only on technological inventions"], correctAnswer: 'A' },

    // Passage 3: Learning Theory
    { category: 'Reading Comprehension', passage: '[Passage: Learning Theory]', questionText: '1) What does the author think about the phrase "practice makes perfect"?', options: ["Some kids need more practice than others", "Related to past learning experiences", "Each kid has their own learning pace", "Practice guarantees elite status for anyone"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Learning Theory]', questionText: '2) What is the main idea of the passage?', options: ["It's difficult to determine the students' learning theory", "Every student has their own learning pace", "Students need to practice to succeed", "All students learn at the same pace"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Learning Theory]', questionText: "3) Why don't schools apply the idea that students have different levels of understanding?", options: ["Because there's no clear explanation of why they're different", "Because schools lack financial funding", "Because all students perform equally well", "Because practice hours are strictly measured"], correctAnswer: 'A' },

    // Passage 4: Children's Health Status
    { category: 'Reading Comprehension', passage: "[Passage: Children's Health Status]", questionText: '1) How many times a year does the average child have a cold?', options: ["6-10 times a year", "2-4 times a year", "12-15 times a year", "Once a year"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: "[Passage: Children's Health Status]", questionText: '2) Why do kids have colds more than adults?', options: ["Because their immune systems aren't as well developed", "Because adults spend more time outdoors in winter", "Because daycares do not allow germ transmission", "Because adults encounter new viruses every day"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: "[Passage: Children's Health Status]", questionText: '3) What is the main idea of the passage?', options: ["Rich children have good health", "It speaks about children getting ill in general", "Adults have a better immune system", "Children's health depends on the economic situation of their families"], correctAnswer: 'B' },

    // Passage 5: Education During the Pandemic
    { category: 'Reading Comprehension', passage: '[Passage: Education During the Pandemic]', questionText: '1) What does "Unsolicited" messages mean?', options: ["voluntary", "private", "suspicious", "critical"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Education During the Pandemic]', questionText: '2) How did the participants feel about the challenge?', options: ["Most of them enjoyed it", "It had 1000 people", "They disliked the format", "A lot found it very hard"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Education During the Pandemic]', questionText: '3) What does "Their" refer to in the passage ("educators sent me unsolicited emails that they were using it for THEIR presentation")?', options: ["educators", "research terms", "scientists", "students"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Education During the Pandemic]', questionText: '4) What is the meaning of the word "Frenemy" used in the text?', options: ["Either good or bad", "Neither good or bad", "Only good", "Only bad"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Education During the Pandemic]', questionText: '5) What is the main idea of the passage?', options: ["How COVID changed the way they receive education", "A team of people made a program to teach news literacy", "It was a great challenge for retirees", "Virtual learning failed completely"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Education During the Pandemic]', questionText: '6) What did the participants need to participate in the program?', options: ["They need an internet connection and an email", "They need a college degree in journalism", "They need to pay a registration fee", "They need special news software"], correctAnswer: 'A' }
  ] },
  5: { analogy: [{ category: 'Analogies', questionText: 'Small : Tiny', options: ["Cold : Hot", "In : Out", "Tall : High", "Day : Night"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Old : New', options: ["Smart : Wise", "Fast : Quick", "Dirty : Clean", "Big : Large"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Bird : Eagle', options: ["Fast : Slow", "Mammal : Camel", "Up : Down", "Hot : Cold"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Travel : Pleasure', options: ["Day : Night", "Red : Color", "Running : Sweating", "Big : Small"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Bees : Honey', options: ["Bright : Dark", "Snake : Poison", "Tall : Short", "Fast : Slow"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Hot : Cold', options: ["Big : Huge", "Friend : Enemy", "Fast : Quick", "Smart : Clever"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Sun : Heat', options: ["Exercise : Health", "Blue : Color", "Day : Night", "Run : Walk"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Hair : Brushing', options: ["Car : Fixing", "Tall : Short", "Hot : Cold", "In : Out"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Pure : Clean', options: ["High : Low", "Broad : Wide", "Day : Night", "Soft : Hard"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Water : Pipes', options: ["Up : Down", "Electricity : Cables", "Fast : Slow", "Red : Green"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Traffic : Tension', options: ["Light : Dark", "Failure : Stress", "Hot : Cold", "Big : Small"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Driver : License', options: ["Run : Walk", "Day : Night", "Soft : Hard", "Flying : Ticket"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Scissors : Paper', options: ["Fast : Slow", "Sharpener : Pencil", "In : Out", "Bright : Dark"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Accident : Damage', options: ["Day : Night", "Tall : Short", "Red : Blue", "Speed : Fine"], correctAnswer: 'D' }], wording: [
      // Sentence Completion
      { category: 'Wording', questionText: 'Watching ......... ends up spending too much time, which ......... with spending more time with your family.', options: ["television : interferes", "sleeping : dark", "cooking : shoe", "flying : ocean"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'When you have more ......... time it leads to bad .........', options: ["heavy : water", "free : deeds", "cold : fire", "loud : noise"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'If you don\'t ......... at the first time, try a little ......... the next.', options: ["swim : key", "fly : door", "succeed : ardor", "run : chair"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Most Americans live under the poverty ......... and some live ......... near it.', options: ["shoe : fast", "car : loud", "tree : blue", "line : fretfully"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Beauty without ......... it is like a hook without .........', options: ["grace : bait", "food : engine", "sleep : highway", "water : bicycle"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'He who ......... the guilty threatens the .........', options: ["cooks : meal", "spares : innocent", "paints : wall", "drives : road"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'I spent an hour searching for my ......... but it turned out it was on my desk all .........', options: ["sky : blue", "cloud : rain", "notebook : time", "river : fish"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'He ......... no thanks who does kindness for his own .........', options: ["swims : water", "flies : air", "sleeps : bed", "merits : ends"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'When future historians study the ......... economy of the 21st century, the 2012 crisis is at risk of .........', options: ["blighted : standing out", "frozen : melting", "loud : singing", "fast : walking"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'College students expect to ......... paying job after graduation will be ......... not to save because he or she expects to make up for the time lost in saving money for later in life.', options: ["cook : hot", "obtain : apt", "sleep : dark", "swim : deep"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Nora is ......... to graduate from high school this year. Her dream is to ......... in an American school.', options: ["flying : drive", "eating : sleep", "going : apply", "running : swim"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'People shouldn\'t directly aim for happiness, it\'s a ......... of maintaining ......... needs and welfare of others.', options: ["chair : soft", "shoe : fast", "car : loud", "result : personal"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Many people like the idea of ......... in a village but not many would stand such a life without ......... visits to the nearest big city.', options: ["living : frequent", "cooking : cold", "flying : quiet", "sleeping : bright"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Having clear cut ......... is vital to those who wish to make ......... contributions roughly in their outcome on society.', options: ["shoes : heavy", "goals : positive", "water : dry", "fire : cold"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Writing helps us use ......... to learn from our past mistakes.', options: ["cooking", "sleeping", "history", "flying"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'I have always preferred ......... areas to ......... ones, because I really like the countryside.', options: ["loud : quiet", "hot : cold", "fast : slow", "rural : urban"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Along the lines of rarely people are challenged with a hardship of ......... with wealth and life with ......... but some are somewhere in between.', options: ["life : poverty", "car : tree", "shoe : door", "phone : sky"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Many people with ......... eating habits eat lots of junk food but not lots of ......... food.', options: ["cold : hot", "unhealthy : fresh", "loud : quiet", "fast : slow"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Many students can\'t handle studying abroad because they feel .........', options: ["frozen", "cooked", "homesick", "asleep"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Many places perceive time ......... but they all are fascinated with ......... and clocks.', options: ["hot : ice", "cold : fire", "loud : silence", "differently : watches"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'People think ......... is the root of all evil, but I think the ......... of it is the real problem.', options: ["money : love", "water : fire", "shoe : lace", "car : wheel"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Sitting in the evening of the first day of the season brings ......... when you realize the days that will ......... with the new season.', options: ["ice : melt", "satisfaction : come", "rain : dry", "fire : freeze"], correctAnswer: 'B' },
      { category: 'Wording', questionText: '......... essay needs to give readers an opposing view for them to ......... conclusions.', options: ["A loud : sleep", "A cold : melt", "A critical : reach", "A fast : walk"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Science studies the digital natives who have grown up with technology at their fingertips, and in our culture, online shopping and instant messages don\'t ......... cause instant gratification, which ......... it.', options: ["hot : freezes", "cold : burns", "loud : silences", "merely : encourages"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'When a year ......... people make a New Year .........', options: ["ends : resolution", "swims : water", "flies : air", "cooks : food"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'In families, it is ......... uniform for children to have the same personality variation, even in the ......... household.', options: ["hot : cold", "seldom : same", "loud : quiet", "fast : slow"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Being good at ......... is the secret to .........', options: ["sleeping : fire", "cooking : water", "wait : success", "flying : dirt"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'The ......... of sewing patterns can be creatively compared to ......... how to cook.', options: ["shoe : driving", "car : swimming", "phone : flying", "skill : knowing"], correctAnswer: 'D' }
    ], reading: [
    // Passage 1: The Russian Gold Rush[cite: 19]
    { category: 'Reading Comprehension', passage: '[Passage: The Russian Gold Rush]', questionText: '1) Who was the gold owned by?', options: ["British and Russia government", "German shipping company", "American divers", "Private investors"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Russian Gold Rush]', questionText: '2) Where were they sailing to?', options: ["To Britain", "To Russia", "To Germany", "To Murmansk"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Russian Gold Rush]', questionText: "3) Why didn't Keith Jessop go alone for the search of Edinburgh?", options: ["He didn't have enough money", "He lacked diving equipment", "He was prohibited by law", "He didn't know the location"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Russian Gold Rush]', questionText: '4) Why was it risky?', options: ["They weren't sure the gold was there", "The weather was extremely cold", "The ship was owned by enemies", "Divers refused to help"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Russian Gold Rush]', questionText: '5) How did they get the gold?', options: ["They went through the fuel tank", "They used dynamite on the hull", "They lifted the entire ship", "They waited for lower tides"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Russian Gold Rush]', questionText: '6) Why did they end the search?', options: ["Because of the hurricane", "They ran out of money", "They collected all gold", "The authorities stopped them"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Russian Gold Rush]', questionText: '7) How many people died?', options: ["Tens", "Hundreds", "None", "Thousands"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Russian Gold Rush]', questionText: '8) The Gold originally belongs to?', options: ["The Russian government", "The British diving team", "German shipping", "Private museum"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Russian Gold Rush]', questionText: '9) How many people were aboard when it sunk?', options: ["58", "120", "25", "200"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Russian Gold Rush]', questionText: '10) Why did they stop the evacuation?', options: ["Because of weather conditions", "Fuel ran out", "Ship malfunctioned", "Divers resigned"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: The Russian Gold Rush]', questionText: "11) Why didn't they collect all the gold?", options: ["The hurricane prevented them", "The rest was stolen", "Money ran out", "Equipment broke"], correctAnswer: 'A' },

    // Passage 2: California Earthquakes[cite: 20]
    { category: 'Reading Comprehension', passage: '[Passage: California Earthquakes]', questionText: '1) Where do most frequent earthquakes happen?', options: ["California", "Pacific Basin", "Atlantic Ocean", "Mediterranean Sea"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: California Earthquakes]', questionText: '2) Who else can detect small earthquakes?', options: ["Animals", "Birds only", "Satellites", "Deep sea divers"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: California Earthquakes]', questionText: '3) How many people lost their homes to earthquakes?', options: ["250,000", "28,000", "2,500", "1,000"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: California Earthquakes]', questionText: "4) Why couldn't the fire force put out the fires easily?", options: ["Broken the streets and water systems", "Strong winds spread the fire", "Lack of firemen", "Chemical explosions"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: California Earthquakes]', questionText: '5) How often do big earthquakes happen?', options: ["Once every 100 years/century", "Every year", "Every decade", "Every 500 years"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: California Earthquakes]', questionText: '6) When do scientists expect the next big earthquake to happen?', options: ["Before 2006", "After 2050", "In 2100", "Within 10 years"], correctAnswer: 'A' }
  ] },
  6: { analogy: [{ category: 'Analogies', questionText: 'Discuss : Argue', options: ["Nibble : Eat", "Whisper : Shout", "Book : Page", "Sun : Rain"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Cotton : Shirt', options: ["Cold : Warm", "Wood : Table", "Fruit : Jam", "Run : Fast"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Sandstorm : Weather', options: ["Pen : Ink", "Tree : Leaf", "Lizard : Reptile", "Dog : Animal"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Take : Snatch', options: ["Light : Dark", "Shoe : Sock", "Look : Stare", "Glance : Gaze"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Drill : Hole', options: ["Chair : Table", "Manufacture : Product", "Day : Night", "Build : House"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Biology : Science', options: ["Water : Ice", "Shirt : Clothing", "Drive : Car", "Boot : Footwear"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Scissors : Cut', options: ["Hot : Cold", "Shovel : Dig", "Pen : Write", "Paper : Pen"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Lamb : Sheep', options: ["Big : Small", "Kitten : Cat", "Seed : Tree", "Walk : Run"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Hunger : Food', options: ["Bird : Sky", "Sick : Doctor", "Cat : Dog", "Thirst : Water"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Sugar : Cane', options: ["Fish : Water", "Pearl : Oyster", "Silk : Worm", "High : Low"], correctAnswer: 'B' },
  { category: 'Analogies', questionText: 'Sigh : Relief', options: ["Door : Window", "Sweat : Exercise", "Left : Right", "Yawn : Tiredness"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Money : Poverty', options: ["Apple : Tree", "Water : Drought", "Book : Read", "Light : Darkness"], correctAnswer: 'D' },
  { category: 'Analogies', questionText: 'Toe : Foot', options: ["Branch : Tree", "Up : Down", "Grape : Vines", "Fire : Ice"], correctAnswer: 'C' },
  { category: 'Analogies', questionText: 'Combination : Separation', options: ["Safety : Danger", "Peace : War", "Sea : Ship", "Hand : Glove"], correctAnswer: 'A' },
  { category: 'Analogies', questionText: 'Level : Flat', options: ["Fast : Slow", "Raise : Lift", "Huge : Large", "Dog : Bark"], correctAnswer: 'B' }], wording: [
      // Sentence Completion
      { category: 'Wording', questionText: 'The flight service operator ......... to come early to the airport, despite ......... his advice there were delays.', options: ["suggested : taking", "slept : flying", "cooked : swimming", "drove : walking"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Ahmed has been ......... all week for the football, so he was ......... about it!', options: ["freezing : hot", "practicing : excited", "sleeping : dark", "cooking : full"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Mahmoud ......... his college application on time. Now he waits ......... to see if he\'ll get an interview.', options: ["flew : quietly", "swam : loudly", "completed : anxiously", "slept : brightly"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Nora found ......... while reading a book that ......... her about her childhood.', options: ["water : dried", "fire : froze", "ice : burned", "something : reminded"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'The ministry of education leader ......... the competition. Over 400 international and ......... University took place in the event.', options: ["opened : Arab", "slept : cold", "cooked : fast", "swam : heavy"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Sami had a ......... of spiders, so he ......... to go camping with his family.', options: ["car : drove", "fear : refused", "shoe : walked", "phone : called"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Sami had a ......... of spiders, so he doesn\'t go ......... with his family.', options: ["water : swimming", "fire : burning", "fear : camping", "ice : melting"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'The public ......... about environment has changed in the last decade this is ......... due to the exposure on media.', options: ["shoe : fast", "car : loud", "door : heavy", "awareness : believably"], correctAnswer: 'D' },

      // Contextual Errors
      { category: 'Wording', questionText: 'During the early years of the universe, inconceivable violence raged through the cosmos, yet this tranquility only managed to produce a small number of atoms.', options: ["inconceivable", "cosmos", "tranquility", "produce"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Literary criticism has in recent years become increasingly concreate it is almost impossible for the non-literary person to understand its analyses.', options: ["concreate", "impossible", "understand", "analyses"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'The admiral ordered his plan to attack, and when he saw the white flag raised by the enemy sailors; he was relieved that he could bring an end to the hostilities.', options: ["plan", "raised", "relieved", "hostilities"], correctAnswer: 'A' },
      { category: 'Wording', questionText: '"I arrive to earth as a meteor and leave as a thunderbolt!" A quote said by someone to someone. This quote in fact doesn\'t reflect his charming solemnity, because in his professional life which was for about 10 years, he wrote poems and books, but he then sank into the abyss of darkness.', options: ["thunderbolt", "solemnity", "abyss", "darkness"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'She was a stubborn child, she was so bored in class; she already knew more mathematics than her junior school teachers.', options: ["bored", "mathematics", "stubborn", "teachers"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'People wonder why there are homogenous explanations to the same thing. The reason is that each one of these explanations caters to a set of readers, who have read with ideas that drive widely different from each other.', options: ["homogenous", "reason", "caters", "different"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'It was a book written by a woman for boys and girls, but she didn\'t want adults to spurn on her books on that accent. She wanted them to remember how they used to be with their queer and strange interests they used to engage with.', options: ["spurn", "accent", "queer", "engage"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'The prime minister dismisses criticism that he has attentively neglected the economy and social issues.', options: ["dismisses", "criticism", "attentively", "neglected"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'The revival of the European, Arabian doctors and philosophers attributed knowledge that europeans learn from even in the twelfth century, and concentrated their knowledge for when they go home which facilitated the progress of science.', options: ["doctors", "attributed", "concentrated", "facilitated"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Mohamed entertained the idea of being a doctor. However, his father encouraged him to join the family business.', options: ["entertained", "encouraged", "family", "business"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'The teacher was a great speaker his colleagues were too dazzled by his posture to question his contentious hypothesis.', options: ["dazzled", "posture", "contentious", "hypothesis"], correctAnswer: 'B' }
    ], reading: [
    // Passage 1: Taj Mahal[cite: 21]
    { category: 'Reading Comprehension', passage: '[Passage: Taj Mahal]', questionText: '1) In which of the following countries is the Taj Mahal located?', options: ["India", "Persia", "Turkey", "Egypt"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Taj Mahal]', questionText: '2) Which of the following men had the Taj Mahal built?', options: ["Shah Jahan", "Lord Curzon", "Abdul Haq", "Ustad Ahmad Lahouri"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Taj Mahal]', questionText: '3) What year did Mumtaz Mahal die?', options: ["1631", "1612", "1632", "1658"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Taj Mahal]', questionText: '4) What does the author write about the different area the workers came from?', options: ["To show that they chose the finest of workers.", "To list trade routes", "To explain transportation costs", "To show population diversity"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Taj Mahal]', questionText: '5) What is the meaning of integrated?', options: ["Combined", "Separated", "Modernized", "Decorated"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Taj Mahal]', questionText: '6) For which of the following people was the mausoleum built?', options: ["Mumtaz Mahal", "Arjumand Banu", "Shah Jahan", "Lord Curzon"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Taj Mahal]', questionText: '7) In which of the following cities is the TajMahal located?', options: ["Agra", "Delhi", "Mumbai", "Lahore"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Taj Mahal]', questionText: '8) Which of the following is the word for the false coffin of Mumtaz Mahal inside an eight-sided room in the structure?', options: ["cenotaph", "minaret", "sarcophagus", "mausoleum"], correctAnswer: 'A' },

    // Passage 2: Bees[cite: 22]
    { category: 'Reading Comprehension', passage: '[Passage: Bees]', questionText: '1) What can you take from the passage?', options: ["The number of queen bees indicates the health of the bee colony.", "Pesticides help bees survive winter", "Bumblebees are unaffected by toxins", "Sugar water changes bee colors"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bees]', questionText: '2) A doctor made a conclusion his conclusion was?', options: ["Informed point of view", "Personal bias", "Unverified rumor", "Mathematical certainty"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bees]', questionText: '3) Who does "this" refer to in the bees passage?', options: ["They refer to the pesticides", "They refer to the insects", "They refer to bumblebees", "They refer to crop fields"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bees]', questionText: '4) Which of the following is FALSE?', options: ["85% of countries killed bees from the use of pesticides", "The number of queen bees indicates the health of the bee colony", "Pesticides have a harmful effect on bees", "Toxin exposure leads to smaller colony size"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bees]', questionText: '5) You can infer that the number of pesticides in an area determines the?', options: ["health of nation", "size of farms", "price of honey", "climate stability"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bees]', questionText: '6) What do you understand from the first paragraph?', options: ["some pesticides in farm corps and in garden are dangerous to bees", "Many pesticides are used to kill bees", "scientists researched more than 100 nations", "Bees navigate easily despite pesticides"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bees]', questionText: '7) Which of the following is TRUE?', options: ["Bees fed pollen and sugar water were lighter", "like what bees eat determine their body color", "Bees are always exposed to pesticides through the nectar they eat", "the workers (bees) brought food back slower in the pesticide beehive"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bees]', questionText: '8) decline of bees.......', options: ["Reducing the range of flowers", "Caused diseases", "Affected humans", "Increased honey production"], correctAnswer: 'C' },

    // Passage 3: Bartering[cite: 23]
    { category: 'Reading Comprehension', passage: '[Passage: Bartering]', questionText: '1) In the old times people used what as a form of money?', options: ["Bartering", "Paper checks", "Gold coins", "Credit cards"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bartering]', questionText: '2) When did coins become common through Europe?', options: ["Middle Ages", "1200 BCE", "Modern era", "Stone Age"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bartering]', questionText: '3) Coins needed to be?', options: ["Stamped in a certain weight and a fixed value", "Made entirely of bronze", "Large and heavy", "Printed on paper"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bartering]', questionText: '4) Closest meaning to exchanged?', options: ["Trading", "Buying", "Saving", "Printing"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bartering]', questionText: '5) Rice and Grains were rare back then, so they are? What can you infer from the passage?', options: ["Expensive or Had a high value", "Easy to carry", "light weight", "Effective for bartering"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bartering]', questionText: '6) What does (they) refer to?', options: ["Pieces of paper", "Farmers", "Coins", "Cowry shells"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bartering]', questionText: '7) What does it take about in paragraph (1)?', options: ["They bartered instead of using money", "Paper currency was invented in Europe", "Coins were made of gold and silver", "Banks stored wheat sacks"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Bartering]', questionText: '8) Meaning of frequently?', options: ["usually", "rarely", "never", "suddenly"], correctAnswer: 'A' },

    // Passage 4: Porsche 911[cite: 24]
    { category: 'Reading Comprehension', passage: '[Passage: Porsche 911]', questionText: '1) What does "he" refer to in the passage?', options: ["Ferdinand Alexander Porsche", "Manny Alban", "Ferry Porsche", "Ferdinand Porsche (grandfather)"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Porsche 911]', questionText: '2) What enthusiast means in "car enthusiast."?', options: ["Admirer", "Driver", "Mechanic", "Seller"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Porsche 911]', questionText: "3) When did FA Porsche's become head of the Porsche group?", options: ["a round 5 years after he joined", "10 years after he joined", "Immediately upon joining", "In 1990"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Porsche 911]', questionText: '4) What is true based on the passage? or what did FA focus on more on the cars after he became the head of the company?', options: ["He cared for function more than decoration", "He prioritized decorative features", "He stopped using six-cylinder engines", "He renamed the car Peugeot"], correctAnswer: 'A' }
  ] },
 7: {
    analogy: [
      { category: 'Analogies', questionText: 'Touch : Hit', options: ["Sprint : Jog", "Talk : Shout", "Speak : Converse", "Cook : Serve"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Knife : Fork', options: ["Spoon : Soup", "France : Country", "Salt : Pepper", "Pen : Ink"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Locked : Key', options: ["Rain : Umbrella", "Shield : Attack", "Door : House", "Engine : Car"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Happiness : Smile', options: ["Tiredness : Rest", "Frown : Anger", "Bright : Shiny", "Cold : Ice"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Tooth : Comb', options: ["Tree : Leaf", "Brush : Hair", "Pages : Novel", "Wheel : Drive"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Orange : Citrus', options: ["Vehicle : Sedan", "Laptop : Computer", "Fruit : Vegetable", "Desk : Wood"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Baking : Cake', options: ["Song : Composing", "Weighing : Scale", "Coding : Program", "Oven : Kitchen"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Walk : Run', options: ["Sprint : Jog", "Swim : Water", "Speak : Shout", "Glance : Look"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Clay : Brick', options: ["Water : Ice", "Bread : Flour", "Build : House", "Wood : Forest"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Cry : Sadness', options: ["Fear : Tremble", "Gasp : Surprise", "Tears : Eye", "Laughter : Joke"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Cavity : Filling', options: ["Repair : Damage", "Breakdown : Recovery", "Dentist : Tooth", "Injury : Pain"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Happiness : Delight', options: ["Joy : Sorrow", "Egg : Omelet", "Trash : Garbage", "Small : Tiny"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Nose : Face', options: ["Petal : Flower", "Tree : Branch", "Cherry : Ice Cream", "Smile : Mouth"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Library : Read', options: ["Cook : Kitchen", "Gym : Exercise", "Book : Read", "Hospital : Doctor"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Ride : Bike', options: ["Car : Drive", "Pen : Write", "Chair : Sit", "Type : Computer"], correctAnswer: 'D' }
    ],
    wording: [
      // Sentence Completion
      { category: 'Wording', questionText: 'A few dozen Mathematicians and ...... gathered to have a meeting about computer programs at ...... of the college.', options: ["scientists : campus", "chairs : water", "shoes : fire", "cars : sky"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Google is famous for finding answers. Type a .......related to your business and see what ......come up.', options: ["shoe : walks", "keyword : results", "door : closes", "tree : grows"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Melbourne........witnessed an unusual sight A roadster made almost .....from Lego bricks cruising down the streets.', options: ["water : dry", "fire : cold", "residents : entirely", "ice : hot"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'In July 2017, Sarah Al Mohhak joined an ...... group of people who climbed mountains in every ......', options: ["loud : noise", "fast : speed", "cold : temperature", "elite : continent"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Archeologists have ...... something and other .... From 11th century Viking city.', options: ["Unearthed : objects", "cooked : meals", "slept : beds", "swam : rivers"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Years of habitat destruction and poaching have........ giraffe numbers by 30 % placing them in the......... category for the first time.', options: ["flown : high", "reduced : vulnerable", "slept : dark", "eaten : full"], correctAnswer: 'B' },

      // Contextual Errors
      { category: 'Wording', questionText: 'Britain believed that coffee will surpass tea in most drink. However this event did not occur. It was Accounted that 2 fifth of people drank tea in the reduction of water.', options: ["believed", "occur", "Accounted", "reduction"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'A new study has highlighted the distressing scope of yet another threat to coral reefs: plastics. Researchers analyzed more than 124,000 corals from 159 reefs. Almost everywhere they looked, they saw bits of plastic. "We rejected chairs, chip wrappers, Q-tips, garbage bags, water bottles, and old nappies," said a marine disease ecologist at Cornell University.', options: ["highlighted", "analyzed", "rejected", "disease"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Archeologists and historians in Dublin have protected human history which has greatly impacted the Stone Age, ice age, What age are we in now? The answer to that question is simply; the plastic age.', options: ["protected", "impacted", "simply", "plastic"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Just beyond the village of X, at the end of the dirt road surrounding a brush, lies a painting made from stone and coral which leads to an above ground cave system.', options: ["surrounding", "painting", "stone", "system"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Before they were bacteria in your fridge or household supply cabinet, many ordinary products were used in extraordinary and often totally absurd medical contexts. The most popular example is Coca-Cola, which was first brewed on March 29, 1886 by Georgia-based pharmacist John Smith Pemberton.', options: ["bacteria", "absurd", "brewed", "pharmacist"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'To form a vivid image of the chaos theory someone came up with an imaginary law: A butterfly in Japan flaps its wings and in course of the events triggers an El-Niño in America.', options: ["vivid", "law", "flaps", "triggers"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'For millions of people, boarding a jet plane for a quick journey to a city many hundreds or even thousands of miles away, is very much a routine act more than any other object, the jet airliner is the destination that served to "shrink the globe", bringing in the modern age of international travel.', options: ["boarding", "routine", "destination", "international"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'When new maple leaves fall in New England, people take the maple from the trees. "Boiling" it until it turns into syrup has been a tradition for centuries that even ancestors followed.', options: ["leaves", "boiling", "centuries", "ancestors"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'A group of scientists spent several weeks diving with whale sharks in the Galapagos Islands last summer and fall in an attempt to solve some of the most enduring mysteries. They tried some never-before-used focus on the species in the wild: taking blood samples and doing ultrasound exams.', options: ["diving", "enduring", "focus", "samples"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Tokyo is a large city with a population of 38 million people. It is considered an isolated metropolitan area, and one day or one trip is not enough to explore the whole city. It is also a great city for wanderers.', options: ["isolated", "metropolitan", "explore", "wanderers"], correctAnswer: 'A' }
    ],
    reading: [
    // Passage 1: Learning Gap Between Kids
    { category: 'Reading Comprehension', passage: '[Passage: Learning Gap Between Kids]', questionText: '1) What the point of this learning technique?', options: ["Stop the difference between the rich kids and the poor", "Encourage kids to stay indoors", "Increase the difficulty of school exams", "Eliminate physical activities from playgrounds"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Learning Gap Between Kids]', questionText: '2) What was used in the park for learning math?', options: ["Puzzles", "Hopscotch", "Calculators", "Flashcards"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Learning Gap Between Kids]', questionText: '3) What does stimulate mean?', options: ["Force", "Design", "Inspire", "Prevent"], correctAnswer: 'C' },
    { category: 'Reading Comprehension', passage: '[Passage: Learning Gap Between Kids]', questionText: "4) What is the author's main point?", options: ["Rich learning environment helps the wealthy", "Learning gaps can be noticed from a very young age", "Parks are bad environments for education", "Children learn best without teacher guidance"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Learning Gap Between Kids]', questionText: '5) According to the passage, which of the following is stated as a fact?', options: ["Children with early linguistic skills achieve greater success later in life.", "Poor children cannot learn mathematics", "Public parks are built for mathematics practice", "Linguistic skills develop only in high schools"], correctAnswer: 'A' },

    // Passage 2: USS Independence
    { category: 'Reading Comprehension', passage: '[Passage: USS Independence]', questionText: '1) When was the USS Independence ship used ?', options: ["World War 2", "World War 1", "Cold War", "Vietnam War"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: USS Independence]', questionText: '2) Which of the options did the writer state as a fact?', options: ["The research ship was named Nautilus", "The ship was entirely undamaged", "The atomic bomb tests failed", "The wreckage was found immediately"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: USS Independence]', questionText: '3) When was the USS Independence ship disposed of ?', options: ["After World War 2 (1951)", "During World War 1", "In 2016", "Before World War 2"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: USS Independence]', questionText: '4) Meaning of scuttled?', options: ["sunk on purpose", "repaired quickly", "sold to private buyers", "abandoned at port"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: USS Independence]', questionText: '5) How many unmanned submarines have the scientists deployed?', options: ["2", "5", "10", "1"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: USS Independence]', questionText: '6) According to Dr. Ballard, what was surprising about the wreckage?', options: ["It was in great shape", "It had active explosives", "It was completely destroyed", "It was filled with treasure"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: USS Independence]', questionText: '7) When was the ship used for atomic bombs tests', options: ["World war 1", "World war 2", "2016", "1890"], correctAnswer: 'B' },

    // Passage 3: Turkey Whistling
    { category: 'Reading Comprehension', passage: '[Passage: Turkey Whistling]', questionText: '1) What was their language?', options: ["Whistling language", "Sign language", "Morse code", "Standard Turkish"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Turkey Whistling]', questionText: '2) What landscape does a country in Turkey have?', options: ["Mountainous", "Flat desert", "Coastal plains", "Dense jungle"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Turkey Whistling]', questionText: '3) What language do the villagers speak?', options: ["Whistling language", "Birdsong", "Foreign dialects", "Silent gestures"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Turkey Whistling]', questionText: '4) In the meaning who still uses this language?', options: ["shepherds and Kuskoy villagers", "City tourists", "Mobile phone sellers", "Foreign sailors"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Turkey Whistling]', questionText: '5) Meaning of advances ?', options: ["improvements", "delays", "problems", "costs"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Turkey Whistling]', questionText: "6) What's the meaning of update?", options: ["modernize", "destroy", "forget", "cancel"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Turkey Whistling]', questionText: '7) What did the writer say about phones ?', options: ["They are a more private way to message", "They connect houses together", "They transmit whistles better", "They are banned in Kuşköy"], correctAnswer: 'A' },

    // Passage 4: Dementia
    { category: 'Reading Comprehension', passage: '[Passage: Dementia]', questionText: '1) How many institutions participated in the experiment?', options: ["69", "800", "869", "120"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Dementia]', questionText: '2) What did Prof Clive Ballard Mention about dementia institutes?', options: ["That they are excellent", "That they differ( vary )", "That they are average", "That they are high"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Dementia]', questionText: '3) What does social interaction do to people with dementia?', options: ["Improve their quality of life", "Increase agitation levels", "Cause memory loss", "Has no measurable effect"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Dementia]', questionText: '4) What did the people who participate in the program do?', options: ["They continued with their usual treatment", "They took part for nine months", "They volunteered to join", "They support the NIHR"], correctAnswer: 'B' }
  ]
  },
 8: {
    analogy: [
      { category: 'Analogies', questionText: 'Accept : Repel', options: ["Gather : Collect", "Receive : Welcome", "Glean : Scatter", "Arrive : Destination"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Nightmares : Fears', options: ["Peace : Prosperity", "Failure : Defeat", "Sleep : Dream", "Danger : Safe"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Plant : Watering', options: ["Cooking : Meal", "Seed : Soil", "Growth : Tree", "Coin : Minting"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Pony : Horse', options: ["Fruit : Apple", "Cheddar : Cheese", "Vehicle : Drive", "Table : Room"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Eagle : Hawk', options: ["Rice : Wheat", "Feather : Bird", "Bird : Eagle", "Grain : Harvest"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Rodent : Squirrel', options: ["Lion : Feline", "Animal : Fur", "Canine : Wolf", "Pack : Hunt"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Refusal : Denial', options: ["Acceptance : Denial", "Rebuttal : Refutation", "Argue : Agree", "Proof : Disprove"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'January : December', options: ["Z : A", "Monday : Tuesday", "Start : Begin", "A : Z"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Trunk : Branch', options: ["Necklace : Diamond", "Leaf : Tree", "Wood : Bark", "Gold : Ring"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Brave : Coward', options: ["Hero : Champion", "Courage : Fearless", "Plateau : Trough", "Peak : Mountain"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Chair : Sitting', options: ["Reading : Book", "Ice : Skating", "Bed : Pillow", "Walk : Path"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Hospital : Wing', options: ["Page : Novel", "Doctor : Ward", "Stage : Theater", "Literature : Tragedy"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Word : Sentence', options: ["Brick : Wall", "House : Room", "Letter : Write", "Mortar : Build"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Impartial : Fair', options: ["Biased : Objective", "Sin : Vice", "Honesty : Truthful", "Judge : Court"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Mammal : Human', options: ["Dog : Animal", "Reptile : Scaly", "Vehicle : Truck", "Drive : Road"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Dangerous : Peril', options: ["Safe : Hazard", "Shield : Protect", "Armor : Heavy", "Sword : Saber"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Apple : Orange', options: ["Freedom : Individuality", "Peel : Fruit", "Fruit : Banana", "Juice : Glass"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Sofa : Rug', options: ["Cushion : Couch", "Cinnamon : Ginger", "Spice : Pepper", "Cook : Kitchen"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Maple : Syrup', options: ["Wine : Fruit", "Tree : Leaf", "Grapes : Vinegar", "Sweet : Taste"], correctAnswer: 'C' }
    ],
    wording: [
      // Sentence Completion
      { category: 'Wording', questionText: 'Fish have..........tails, aquatic......have horizontal.', options: ["vertical : mammals", "hot : ice", "loud : silence", "fast : slow"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'If you want to..........a crying baby, put it near .........water.', options: ["cook : hot", "pacify : running", "sleep : dark", "fly : high"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'The person does most ........ after the fender bender is usually the one that caused the..........', options: ["swimming : deep", "flying : high", "talking : accident", "sleeping : quiet"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'In order to roughly........from Celsius to Fahrenheit you double the number and ...........30. that way 10 Celsius is 50 Fahrenheit.', options: ["shoe : lace", "car : engine", "tree : leaf", "convert : add"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Birds that fly in a V ......... are almost.........Canadian.', options: ["shape : certainly", "food : sweet", "water : dry", "fire : cold"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'If he wants........ in life he must look after his...........', options: ["shoes : laces", "comfort : health", "cars : tires", "phones : screens"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'If you want to set the price for a knitted sweater, multiply the cost of the ....... by three, it should make a good hourly wage while still making the price...........', options: ["ice : hot", "fire : cold", "materials : affordable", "water : dry"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'If you have a........... job you must be able to support .........three times your annual income.', options: ["loud : quiet", "fast : slow", "heavy : light", "steady : mortgage"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'The .......... is like medicine, we can taste its.........but we are not grateful for it.', options: ["truth : bitterness", "shoe : softness", "car : speed", "phone : volume"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Don\'t buy extra ........ until you can be sure your....... will pay it back in 3 months.', options: ["water : ice", "equipment : business", "fire : cold", "sky : blue"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'To get an accurate ......... of the number of people in a stadium, you must take the numbers reported by ......... and subtract the number reported by detractors and multiply it by three.', options: ["shoe : size", "car : speed", "estimate : supporters", "tree : height"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Be careful, when writing a ......... make sure not to use words you have to ............', options: ["river : swim", "cloud : rain", "mountain : climb", "speech : look up"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'It\'s not worth..............a meeting where trip to go there is longer than the .......... of the meeting.', options: ["Attending : Duration", "cooking : stove", "sleeping : bed", "flying : sky"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'People who are very ill if they ........... down and don\'t put their arms......... to protect themselves.', options: ["fly : high", "fall : out", "cook : hot", "swim : deep"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'If you feel pain in your ............. after climbing stairs or getting up from a chair, you should do .............. exercise.', options: ["phone : soft", "shoe : fast", "back : extension", "car : loud"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'I\'ve learned to share my............with others and keep my......... to myself.', options: ["food : stove", "water : ice", "fire : cold", "Happiness : sorrow"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'The actor always wore a mask and..............his face, so it was exciting to see what he looked like when he finally ........... himself.', options: ["hid : revealed", "cooked : ate", "swam : drank", "slept : woke"], correctAnswer: 'A' }
    ],
    reading: [
    // Passage 1: Stars
    { category: 'Reading Comprehension', passage: '[Passage: Stars]', questionText: '1) The general idea of the passage is ?', options: ["Stars can be classified based on colors and size", "All stars are the same temperature", "Ordinary cameras cannot photograph stars", "Superstars are the smallest celestial bodies"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Stars]', questionText: '2) All are characteristics astronomers use to classify a star except for?', options: ["shape", "color", "size", "brightness"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Stars]', questionText: '3) Which can be said about Betelgeuse?', options: ["It's about 17,000 times the size of a sun", "It is 40,000 times larger than the sun", "It cannot be measured with light meters", "It is a red superstar"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Stars]', questionText: '4) What does "IT" in paragraph one refer to?', options: ["The camera", "The night sky", "The star", "The photo"], correctAnswer: 'A' },

    // Passage 2: World War II
    { category: 'Reading Comprehension', passage: '[Passage: World War II]', questionText: '1) Why were modern weapons able to destroy whole cities?', options: ["because they were sophisticated and more advanced", "because cities lacked defense troops", "because airfields were unprotected", "because winter weather weakened walls"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: World War II]', questionText: '2) How much did the war cost?', options: ["More than any three previous wars", "Less than World War 1", "Equivalent to a single nation's GDP", "Exactly 60 million dollars"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: World War II]', questionText: '3) Why did people not think about long-term future?', options: ["Because they were busy with the daily problems", "Because they expected another war immediately", "Because government laws prohibited long planning", "Because infrastructure was fully rebuilt"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: World War II]', questionText: '4) What happened after the war of ww2 ?', options: ["Disaster remained", "Economies recovered in days", "Diseases vanished entirely", "All refugees returned home immediately"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: World War II]', questionText: '5) Meaning of Perplexed?', options: ["confused", "excited", "relieved", "organized"], correctAnswer: 'A' },

    // Passage 3: Writers
    { category: 'Reading Comprehension', passage: '[Passage: Writers]', questionText: '1) Which of the following is not TRUE?', options: ["Writing is a simple task", "Writing is time consuming", "Writing is a fun task", "Writers sometimes don't finish their work"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Writers]', questionText: '2) What do many people assume about authors?', options: ["Writing is a simple task", "Authors write without revisions", "Books are generated automatically", "Publishing is always fast"], correctAnswer: 'A' },

    // Passage 4: Civil Engineers and Growing Urban Areas
    { category: 'Reading Comprehension', passage: '[Passage: Civil Engineers and Growing Urban Areas]', questionText: '1) What does rudimentary mean?', options: ["Fundamental", "Complex", "Modern", "Expensive"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Civil Engineers and Growing Urban Areas]', questionText: '2) Which one might pose as a problem to civil engineers?', options: ["Many citizens moving in", "Lack of heavy machinery", "Low property taxes", "Decreasing city populations"], correctAnswer: 'A' },

    // Passage 5: Alternative Medicine
    { category: 'Reading Comprehension', passage: '[Passage: Alternative Medicine]', questionText: '1) Few practitioners of alternative medicine..?', options: ["Consider their therapies to be complete replacements for modern medicine.", "Reject all forms of western treatment", "Have formal medical degrees", "Refuse to use herbalism"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Alternative Medicine]', questionText: '2) Alternative therapies..?', options: ["Are becoming more popular with many doctors.", "Are completely banned by WHO", "Have no effective results", "Are ineffective"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Alternative Medicine]', questionText: '3) Western medicine..?', options: ["Has existed for a comparatively short time.", "Has been used for thousands of years", "Rejects all scientific research", "Is only based on herbal remedies"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Alternative Medicine]', questionText: '4) The World Health Organization..?', options: ["Will support effective traditional knowledge and skills.", "Plans to ban acupuncture", "Refuses to recognize herbal compounds", "Only supports western surgical methods"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Alternative Medicine]', questionText: '5) How do doctors feel about alternative medicine?', options: ["They're suspicious", "They are highly favorable", "They are completely indifferent", "They strictly encourage it"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Alternative Medicine]', questionText: '6) Why is alternative medicine becoming more popular?', options: ["Because people are realizing the limitations of science", "Because modern medicine is too cheap", "Because WHO banned western drugs", "Because herbal remedies are illegal"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Alternative Medicine]', questionText: '7) How does the WHO feel about alternative medicine?', options: ["Favorable", "Suspicious", "Hostile", "Unconcerned"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Alternative Medicine]', questionText: '8) What was mainly used as alternative medicine before modern medicine was developed?', options: ["Herbal Medicine", "Surgeries", "Synthetic antibiotics", "Laser treatments"], correctAnswer: 'A' }
  ]
  },
  9: {
    analogy: [
      { category: 'Analogies', questionText: 'Sunset : Nightfall', options: ["Run : Sprint", "Crawl : Walk", "Dawn : Daybreak", "Sleep : Wake"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Supermarket : Shopping', options: ["Pool : Swim", "Sleep : Bedroom", "Store : Shelf", "Buy : Goods"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Bulb : Lamp', options: ["Car : Engine", "Light : Switch", "Nut : Shell", "Peel : Fruit"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Lost : Map', options: ["Compass : Direction", "Definition : Dictionary", "Book : Index", "Search : Find"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'String : Guitar', options: ["Feather : Bird", "Piano : Key", "Music : Song", "Play : Concert"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Dig : Bury', options: ["Test : Study", "Search : Find", "Revise : Memorize", "Read : Book"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Suggest : Demand', options: ["Hum : Sing", "Shout : Whisper", "Ask : Answer", "Speak : Silent"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Wind : Sandstorm', options: ["Flood : Rain", "Storm : Lightning", "Earthquake : Tsunami", "Fire : Smoke"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Allergy : Sneeze', options: ["Cough : Virus", "Invest : Wealth", "Doctor : Medicine", "Money : Bank"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Holiday : Celebration', options: ["Infection : Fever", "Fatigue : Work", "Party : Music", "Calendar : Date"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Paint : Picture', options: ["Novel : Write", "Brush : Canvas", "Record : Video", "Camera : Photo"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Protect : Abandon', options: ["Admit : Deny", "Defend : Guard", "Keep : Save", "Search : Find"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Boredom : Fidget', options: ["Shout : Anger", "Smile : Happy", "Appreciation : Applause", "Clap : Hands"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Trapped : Captured', options: ["Place : Location", "Free : Bound", "Search : Find", "Lock : Key"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Rubber : Tire', options: ["Desk : Wood", "Steel : Car", "Drive : Road", "Wheel : Axle"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Paint : Brush', options: ["Scissors : Cut", "Wash : Soap", "Water : Clean", "Towel : Dry"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Beetle : Insect', options: ["Animal : Mammal", "Fly : Bug", "Biology : Science", "Study : Book"], correctAnswer: 'C' }
    ],
    wording: [
      // Sentence Completion
      { category: 'Wording', questionText: 'The German manufacturer Volkswagen......Toyota to become the biggest manufacturer in the world by.........10000 cars last year.', options: ["overtook : producing", "slept : dreaming", "cooked : eating", "swam : diving"], correctAnswer: 'A' },
      { category: 'Wording', questionText: '........ to BuzzFeed Cristiano Ronaldo became the highest paid athlete for the fourth time in a.......... in 2017.', options: ["Freezing : cold", "according : row", "Boiling : hot", "Flying : high"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'My father said I needed a........... to come with me to the conference because I was not old enough to go ........ so I brought my friend with me.', options: ["car : fast", "shoe : soft", "Companion : Alone", "tree : tall"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'There has never been a .......... sword made of bad .............', options: ["cold : fire", "loud : silence", "fast : delay", "good : steel"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Camping is such a good...... activity to do in your ........... time.', options: ["Outdoor : Free", "frozen : hot", "asleep : awake", "silent : loud"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Hieroglyphics are ...... The more people learn it the more....... it gets.', options: ["soft : heavy", "Intriguing : fascinating", "fast : slow", "cold : hot"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'The bitcoin.......... started on 2009, in ........to real money, it has no company.', options: ["river : ocean", "mountain : hill", "currency : contrast", "tree : leaf"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Wadi Tayyib Al Ism is one of the many natural ...... of Tabuk, Saudi Arabia. Nestled in the middle of the ...... this valley is located in the Tabuk province.', options: ["shoes : laces", "cars : tires", "phones : screens", "wonders : mountains"], correctAnswer: 'D' },

      // Contextual Errors
      { category: 'Wording', questionText: 'All the extension network is speedy in delivery there maybe delay due to the breakdown and robberies also there will be extra toll charges.', options: ["robberies", "speedy", "delay", "delivery"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Choosing the design of a bridge fortunately depends on how wide the obstacle is, is it a small road or an enormous river? The main difference between the three main types of bridges is the distances they can cross in a single span.', options: ["design", "fortunately", "obstacle", "span"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'The production of energy through sunshine energy in the past years has increased dramatically.', options: ["production", "energy", "sunshine", "dramatically"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Living in an accidentally globalized world, we, like many companies, must acknowledge and respect other cultures.', options: ["globalized", "companies", "respect", "accidentally"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'In the past, when children asked why sea water is salty, they would broadcast curious explanations. Today, Google tells you that dissolved salt from open river and oceans flow into the sea.', options: ["broadcast", "curious", "explanations", "dissolved"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'At the base of a steep ridge near the small South African town of Porterville, outside Cape Town, is a painting of a wooden ship. Its masts and rigging are innocent, traced on a lined and rugged rock surface.', options: ["steep", "innocent", "traced", "rugged"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'A person\'s dialect can reveal a lot about them. Even people from the same country can have important differences in accents based on their roots and culture.', options: ["reveal", "country", "important", "accidents"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Bahrain announced their latest discovery of oil reserves larger than previously estimated, in conclusion, to support the increased production of natural gas.', options: ["discovery", "estimated", "natural", "in conclusion"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Humans crafted types of chairs from wood for ages. Ancestors solved the problem by chopping down trees, creating everything from small huts built with twigs to buildings with large timbers.', options: ["chairs", "crafted", "chopping", "buildings"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'A city official was opposed to the idea of building something adjacent to a park and that it was going to be rejected by 8ft wall.', options: ["opposed", "rejected", "adjacent", "building"], correctAnswer: 'B' }
    ],
    reading: [
    // Passage 1: Chinese Tea
    { category: 'Reading Comprehension', passage: '[Passage: Chinese Tea]', questionText: '1) What is the surprising fact about the invention of tea?', options: ["It happened by accident", "It was invented by doctors", "It took hundreds of years to discover", "It was imported from Europe"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Chinese Tea]', questionText: "2) What couldn't the leaf caretakers do?", options: ["Eat foods with strong odor and strong spices", "Speak while harvesting", "Work during the daytime", "Drink tea during work"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Chinese Tea]', questionText: '3) What is closest in meaning to character?', options: ["Symbol", "Person", "Letter", "Story"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Chinese Tea]', questionText: '4) Why was black tea better than green?', options: ["Foreign traders", "It was cheaper", "It tasted sweeter", "It was easier to grow"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Chinese Tea]', questionText: '5) What can you infer from this phrase "No longer merely used for its medicinal properties" mean?', options: ["Before they were using it for treatment", "It is no longer healthy", "Only doctors drink tea", "It is banned in medicine"], correctAnswer: 'A' },

    // Passage 2: St. Pierre Volcano
    { category: 'Reading Comprehension', passage: '[Passage: St. Pierre Volcano]', questionText: '1) What did Herbert think of the Modern man?', options: ["Had lost the ability to move efficiently and effectively in all but the most routine environments", "Was physically stronger than indigenous peoples", "Was better prepared for natural disasters", "Had mastered survival in all terrains"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: St. Pierre Volcano]', questionText: '2) What role did Larry play in the eruption?', options: ["He got people to safety", "He rebuilt the town", "He stopped the lava flow", "He predicted the volcano eruption"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: St. Pierre Volcano]', questionText: '3) What does Epiphany mean as used in paragraph?', options: ["Discovery", "Confusion", "Disaster", "Tradition"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: St. Pierre Volcano]', questionText: '4) Why did the author mention the parkour quote (quote: Etre fort, etre utile)"', options: ["To show that it originated from France", "To confirm how both physical and mental strength are important for helping others", "To convince the reader of his ideas", "To explain the military hierarchy"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: St. Pierre Volcano]', questionText: '5) When did the volcano erupt?', options: ["1902", "1950", "1800", "1981"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: St. Pierre Volcano]', questionText: "6) What did Larry's natural method lead to?", options: ["The specials forces", "Joining the military", "Man made obstacles", "The path of the warrior"], correctAnswer: 'D' },

    // Passage 3: Flow State in Psychology
    { category: 'Reading Comprehension', passage: '[Passage: Flow State in Psychology]', questionText: '1) What is the phrase the author uses for "flow":', options: ["being in the zone", "hyperfocus", "mindfulness", "being carried away"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Flow State in Psychology]', questionText: '2) Why does the author mention occupational therapy (OT)?', options: ["Because the term flow is used in OT", "To explain ADHD treatments", "To replace positive psychology", "To discourage hyperfocus"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Flow State in Psychology]', questionText: "3) What's the main difference between flow and hyper-focus?", options: ["hyper focus can be negative, flow can be positive", "flow only happens during sports", "hyperfocus requires no attention", "there is no difference between them"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Flow State in Psychology]', questionText: '4) How does the author describe the flow?', options: ["being carried away", "feeling stressed", "mind wandering", "intense effort"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Flow State in Psychology]', questionText: '5) Why is it called flow?', options: ["Because people describe it as being carried away", "Because it involves water activities", "Because thoughts stop moving", "Because it causes rapid fatigue"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Flow State in Psychology]', questionText: '6) What can replace flow ?', options: ["positive psychology", "mental state", "being in zone", "mindfulness"], correctAnswer: 'C' },
    { category: 'Reading Comprehension', passage: '[Passage: Flow State in Psychology]', questionText: '7) What does the summary of the passage talks about?', options: ["the positives and negatives psychological state", "the history of occupational therapy", "how to cure ADHD", "mindfulness exercises"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Flow State in Psychology]', questionText: "8) What's the closest meaning to metaphor?", options: ["Idea", "Definition", "Fact", "Emotion"], correctAnswer: 'A' },

    // Passage 4: Railways
    { category: 'Reading Comprehension', passage: '[Passage: Railways]', questionText: '1) Which is a fact ?', options: ["The first steam powered railway was established in 1830", "Railways were invented in Asia", "Train travel was free for all citizens", "Steam engines were outlawed in 1830"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Railways]', questionText: "2) Why didn't people know about other cities?", options: ["Because they couldn't reach them", "Because news was illegal", "Because cities had no names", "Because map drawing was prohibited"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Railways]', questionText: '3) What does Impediment mean as used in paragraph 2?', options: ["Difficulty", "Advantage", "Speed", "Vehicle"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Railways]', questionText: '4) What does the author mean by local knowledge?', options: ["Knowledge was restricted", "People knew global news", "Books were widely available", "Travelers taught local schools"], correctAnswer: 'A' }
  ]
  },
  10: {
    analogy: [
      { category: 'Analogies', questionText: 'Branch : Leaves', options: ["Wheel : Car", "Country : Cities", "Build : House", "Cold : Winter"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Nail : Cut', options: ["Shave : Beard", "Paper : Scissors", "Hair : Trim", "Fast : Runner"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Money : Pocket', options: ["Taste : Tongue", "Loud : Sound", "Tongue : Taste", "Hard : Stone"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Push : Pull', options: ["Gain : Profit", "Warm : Hot", "Win : Lose", "Tall : Building"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Money : Wallet', options: ["Box : Toys", "Papers : Folder", "Buy : Store", "Heavy : Metal"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Week : Day', options: ["Department : Company", "Doctor : Hospital", "Hospital : Lab", "Bright : Sun"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Floor : Rug', options: ["Bed : Sheets", "Paint : Wall", "Sit : Chair", "Cold : Ice"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Shirt : Buttons', options: ["Zipper : Jacket", "Wound : Stitches", "Needle : Thread", "Green : Grass"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Accept : Repel', options: ["Gather : Collect", "Search : Find", "Glean : Scatter", "Ocean : Water"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Factory : Laboratory', options: ["Factory : Worker", "Farm : Bakery", "Tractor : Field", "Fast : Speed"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'General : Specific', options: ["Real : Fictional", "Vague : Ambiguous", "Big : Huge", "Pen : Paper"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Scream : Shout', options: ["Easy : Complex", "Hard : Difficult", "Whisper : Scream", "Blue : Color"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Head : Hat', options: ["Shoe : Foot", "Write : Ink", "Pen : Cap", "Bird : Sky"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Strong : Powerful', options: ["Weak : Sturdy", "Wet : Moist", "Rain : Flood", "Table : Wood"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Animal : Herd', options: ["Flock : Bird", "Field : Player", "Players : Team", "Apple : Red"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Vegetables : Vitamins', options: ["Book : Knowledge", "Wisdom : Teacher", "Read : Learn", "Chair : Sit"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Sea : Salt', options: ["Honey : Bee", "Glass : Water", "Cow : Milk", "Run : Fast"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Book : Writer', options: ["Author : Novel", "Home : Builder", "Build : House", "Light : Dark"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Bank : Money', options: ["Cash : Vault", "Think : Mind", "Brain : Ideas", "Tree : Leaf"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Travel : Journey', options: ["Stay : Depart", "Walk : Road", "Cat : Meow", "Move : Relocate"], correctAnswer: 'D' }
    ],
    wording: [
      { category: 'Wording', questionText: 'John went to several job ......... and he never found one of the offers .......', options: ["interviews : exciting", "buildings : quiet", "lunches : soft", "walks : heavy"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'The rhythm of life was ....... by the sunrise and sunset compared to our time, we have electricity and can achieve our work in the ...... of night.', options: ["eaten : light", "determined : darkness", "painted : speed", "folded : sound"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Nobody can ....... that Ahmed is a good student, he gets .... grades in university.', options: ["sleep : low", "cook : bad", "deny : good", "wash : zero"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'The............. is like medicine, we can taste its .... but we are not grateful for it.', options: ["chair : sweetness", "phone : softness", "car : coldness", "truth : bitterness"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Having good attendance is important, being............ is usually a sign of..............of motivation.', options: ["absent : lack", "happy : full", "fast : speed", "loud : noise"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Compared to ........., young people have different sense of time; for them the ......... is no limitation.', options: ["cars : past", "elderly : future", "trees : present", "shoes : age"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'A bookstore and a library are both similar but if you want to ......... a book you must go to a bookstore.', options: ["sleep", "fly", "buy", "cook"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Taking the bus to.......... is a good thing because it helps........... the environment.', options: ["sleep : destroy", "eat : burn", "freeze : melt", "work : protect"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Idealists often have....... with being............ in their every day life.', options: ["difficulty : practical", "food : soft", "shoes : fast", "chairs : tall"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'During the winter it\'s necessary to ....... in clothes before spending........ outdoors.', options: ["swim : water", "bundle : time", "run : speed", "eat : food"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'As you grow older it is ........... that your memory will be less ...........', options: ["loud : green", "fast : heavy", "usual : sharp", "soft : deep"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'A person who works in a ........ must be patient, not every company is......... overnight.', options: ["river : cooked", "mountain : spoken", "cloud : written", "business : born"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Our personalities are shaped by our ............ but our............ can reshape them.', options: ["culture : challenges", "shoes : pens", "tables : cars", "phones : windows"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'The development of ......... medicine left traditional practices overlooked, nowadays many people are beginning to ......... the wisdom of traditional medicine.', options: ["fast : cook", "modern : explore", "cold : freeze", "blue : paint"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Prior to the discovery of ........., life was very............ in the Gulf, compared to back then, we are living the lap of luxury.', options: ["ice : hot", "fire : cold", "oil : harsh", "water : dry"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'My father likes............ when we go shopping he looks for.........., it\'s his favorite thing to do.', options: ["swimming : fish", "flying : clouds", "cooking : stoves", "reading : books"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Although I had a wonderful time during my............, I was..........to return home.', options: ["vacation : happy", "breakfast : cold", "sleep : dark", "shoe : fast"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Khalid ...........and shy and often spends time with his.............', options: ["is loudly : cars", "quite : friends", "is heavy : doors", "is fast : tables"], correctAnswer: 'B' }
    ],
    reading: [
    // Passage 1: Angola Doctor
    { category: 'Reading Comprehension', passage: '[Passage: Angola Doctor]', questionText: '1) Where did Kristy used to work?', options: ["Southern England", "Angola", "Horsens", "Northern France"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Angola Doctor]', questionText: '2) Why did Kristy change her job?', options: ["It wasn't exciting enough", "She was fired", "The salary was too low", "She wanted to stop practicing medicine"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Angola Doctor]', questionText: '3) What is the aim of the organization?', options: ["to help the ill", "to train armies", "to build hospitals in Europe", "to conduct medical research"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Angola Doctor]', questionText: '4) What does Kristy plan to do after she left Angola ?', options: ["Come back to Africa someday", "Retire in England", "Quit her medical career", "Move to Asia"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Angola Doctor]', questionText: '5) Where does Kristy work now?', options: ["in Angola", "in Southern England", "in Horsens", "in Serry"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Angola Doctor]', questionText: '6) Why is the health there poor?', options: ["Because of the militant groups", "Because of cold weather", "Because patients refuse treatment", "Because doctors are poorly trained"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Angola Doctor]', questionText: "7) What are Kristy's thoughts on her job in Angola?", options: ["She is satisfied with it", "She regrets leaving England", "She finds it too dangerous", "She feels useless"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Angola Doctor]', questionText: '8) How long did she stay in Angola ?', options: ["8 months", "34 years", "2 decades", "1 year"], correctAnswer: 'A' },

    // Passage 2: Football Match
    { category: 'Reading Comprehension', passage: '[Passage: Football Match]', questionText: '1) Why does no one go to matches anymore?', options: ["because it's not secure", "because ticket prices doubled", "because stadiums are closed", "because matches are illegal"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Football Match]', questionText: '2) What should someone do if they go to a match? Or what did the writer suggest?', options: ["not leave their kids by themselves", "bring their own seats", "avoid watching the game", "hire private security"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Football Match]', questionText: '3) What happened to a big club in the last six games?', options: ["didn't score a single goal", "won every single match", "lost their stadium license", "changed their manager"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Football Match]', questionText: '4) What is happening in recent times ?', options: ["Not a lot of people go to football matches like before", "More families are attending games", "Players are earning less money", "Stadiums are expanding"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Football Match]', questionText: '5) How was the match the writer talked about?', options: ["boring", "exciting", "dangerous", "unpredictable"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Football Match]', questionText: '6) What should they do so people start coming again? Or how will young people learn manners?', options: ["The players should practice self-control.", "Lower ticket prices", "Ban fans under 18", "Cancel major tournaments"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Football Match]', questionText: '7) This was written for what?', options: ["for the newspaper", "for a sports magazine", "for a personal blog", "for a school textbook"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Football Match]', questionText: '8) What is needed to get more spectators?', options: ["make the field secure", "score 5-5 goals every match", "allow fans on the field", "hire younger reporters"], correctAnswer: 'A' }
  ]
  },
  11: {
    analogy: [
      { category: 'Analogies', questionText: 'Icy : Slip', options: ["Fall : Slippery", "Successful : Boast", "Cold : Winter", "Table : Chair"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Pool : Swim', options: ["Runway : Land", "Cook : Kitchen", "Tennis : Court", "Paper : Pen"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Novel : Poem', options: ["Book : Chapter", "Pencil : Marker", "Flute : Instrument", "Sky : Blue"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Afraid : Terrified', options: ["Furious : Angry", "Unhappy : Sad", "Funny : Hilarious", "Heavy : Weight"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Game : Play', options: ["Cook : Food", "Research : Analyze", "Singer : Song", "Rain : Cloud"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Look : Glance', options: ["Sprint : Run", "Sleep : Nap", "Speak : Talk", "Dog : Bark"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Lens : Camera', options: ["Car : Wheel", "Wing : Aircraft", "Piano : Play", "Red : Stop"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Bulb : Lamp', options: ["Nut : Shell", "House : Window", "Car : Engine", "Fast : Drive"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Damage : Fix', options: ["Heal : Wound", "Danger : Hide", "Break : Ruin", "Summer : Hot"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Different : Dissimilar', options: ["Similar : Opposite", "Identical : Unique", "Appalled : Dreadful", "Pen : Desk"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Gold : Ring', options: ["Table : Wood", "Cotton : Shirt", "Wear : Clothes", "Cat : Milk"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Air travel : Fly', options: ["Car : Driving", "Garment : Wear", "Pen : Writing", "Night : Dark"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Ride : Horse', options: ["Car : Drive", "Pen : Write", "Think : Brain", "Fruit : Apple"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Drop : Broken', options: ["Clean : Wash", "Study : Informed", "Fall : Drop", "Bird : Nest"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Travel : Arrive', options: ["Win : Compete", "Order : Receive", "Search : Look", "Milk : White"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Pleased : Disappointed', options: ["Happy : Joyful", "Rarely : Frequently", "Calm : Peaceful", "Tree : Green"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Shirt : Clothing', options: ["Vehicle : Car", "Desk : Furniture", "Pants : Shorts", "Fast : Runner"], correctAnswer: 'B' }
    ],
    wording: [
      // Sentence Completion
      { category: 'Wording', questionText: 'Mom taught me not to....... others for my problems and to look at...... instead.', options: ["blame : myself", "cook : chairs", "paint : windows", "drive : roads"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'In the largest ...........of it is kind, a group of psychologists conducted Personality tests to look for similar....... between 49 different nationalities.', options: ["kitchen : plates", "survey : traits", "garage : engines", "forest : trees"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'As soon as we.......to London there was a heatstroke and it was 35 ........', options: ["swam : meters", "slept : hours", "went : degrees", "flew : miles"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'I am excited about......... In London but I\'m also quite.......', options: ["eating : frozen", "running : asleep", "building : broken", "living : nervous"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'We carry our passports or our national IDs to ....... to the largest kinds of ......', options: ["show : people", "cook : meals", "paint : walls", "sleep : beds"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'These days, many people make the........ of working jobs they don\'t enjoy just to....... money, only to spend it on things they don\'t really need.', options: ["desk : lose", "fault : earn", "chair : burn", "window : waste"], correctAnswer: 'B' },

      // Contextual Errors
      { category: 'Wording', questionText: 'Ultra-modern city Hong Kong is the most popular environmental destination in the world, where shopaholics seek bargains, full of bustling markets and malls.', options: ["popular", "environmental", "bargains", "markets"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'The documentarists were frustrated about the lack of awareness of poverty in the US, so they decided to film an experiment where they\'d live on the minimum money for a month.', options: ["frustrated", "awareness", "experiment", "money"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Stop buying fashion magazines and looking at models; they have an obvious negative impulse on you. Besides, your pictures aren\'t taken by expensive cameras and altered by programs.', options: ["fashion", "impulse", "pictures", "programs"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'I am a very fit guy because of work, I carry out baggages and hold them in the truck.', options: ["fit", "work", "baggages", "hold"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Whereas You are in the jungle, you need to leave all your luxuries at home! That means, forget your mobile phone, your favorite coffee, your chocolate bars, and your CD player. When you\'re in the jungle, you need only four things, water, food, shelter, and fire. You can find all of these easily, but you must know what to look for.', options: ["whereas", "luxuries", "favorite", "shelter"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'The Brazilian city of Minas Gerais is no ordinary city,it has the best transport system in the world. The mayor and council began recognizing the system in 2007.', options: ["ordinary", "transport", "recognizing", "system"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'I work in a local newspaper, give clues and my dream is to work in an international newspaper.', options: ["newspaper", "clues", "dream", "international"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Most people who don\'t have phobias don\'t understand different even if people with phobias know there\'s no real danger they can\'t control their fears.', options: ["phobias", "different", "danger", "control"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Increased urbanization and infrastructure development, which have expanded lifestyle patterns, in addition to affecting energy levels and overall satisfaction are declining among residents.', options: ["urbanization", "lifestyle", "satisfaction", "residents"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Sara felt moody and irritable. She couldn\'t consider and the quality of her work was getting worse. She knew she wasn\'t getting enough sleep and decided to visit a therapist.', options: ["irritable", "consider", "quality", "therapist"], correctAnswer: 'B' }
    ],
    reading: [
    // Passage 1: Khubali Khan
    { category: 'Reading Comprehension', passage: '[Passage: Khubali Khan]', questionText: '1) Domestic trade was difficult in the empire because?', options: ["The diversity of currencies", "High taxation rates", "Lack of trade routes", "Foreign invasions"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Khubali Khan]', questionText: "2) The emperor's decision can be described as?", options: ["regressive", "progressive", "foolish", "traditional"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Khubali Khan]', questionText: '3) The main idea of the passage is?', options: ["How money does NOT necessarily have to be represented by precious substances", "Marco Polo's journey to Asia", "The collapse of ancient coin systems", "Algorithms in modern banking"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Khubali Khan]', questionText: '4) What can be understood from paragraph (4)?', options: ["Finance and the concept of money seemed easier to understand in the past", "Computer algorithms are completely reliable", "Paper money was invented in Europe", "Cowrie shells had no value"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Khubali Khan]', questionText: '5) "Embarked on" means?', options: ["started", "finished", "canceled", "discussed"], correctAnswer: 'A' },

    // Passage 2: Psychology Books
    { category: 'Reading Comprehension', passage: '[Passage: Psychology Books]', questionText: '1) The passage can be described as?', options: ["an introduction to a reading list", "a critique of college courses", "a biography of a psychologist", "a research methodology paper"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Psychology Books]', questionText: '2) Prospective psychology students should be?', options: ["familiar with the scientific method", "uninterested in research", "focused only on sales", "opposed to reading books"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Psychology Books]', questionText: '3) What does "Delve into" mean?', options: ["explore", "ignore", "avoid", "summarize"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Psychology Books]', questionText: '4) According to the last paragraph?', options: ["Successful books tend to be used for a long time", "Psychology books go out of date quickly", "Students prefer digital articles", "Scientists reject popular psychology books"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Psychology Books]', questionText: '5) What does "them" refer to?', options: ["Monetary Systems", "Psychology books", "Students", "Colleges"], correctAnswer: 'A' },

    // Passage 3: Elsie
    { category: 'Reading Comprehension', passage: '[Passage: Elsie]', questionText: "1) What do you understand by Elsie's sleeping habits?", options: ["dominated her mother's life", "improved significantly", "never bothered her parents", "were strictly regulated"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Elsie]', questionText: "2) Elsie's parents are lucky because?", options: ["Help is nearby", "Elsie sleeps 11 hours", "They live in London", "They work from home"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Elsie]', questionText: '3) What is the author\'s tone "feel" toward the highlighted sentence?', options: ["sympathetic", "critical", "angry", "humorous"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Elsie]', questionText: '4) Sleep deprivation in children?', options: ["Has increased substantially over the years", "Has completely disappeared", "Only affects teenagers", "Is easily cured with medicine"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Elsie]', questionText: '5) The problem has proven to be?', options: ["very expensive", "very cheap", "harmless", "temporary"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Elsie]', questionText: '6) What does "Took a toll on" mean?', options: ["Takes harm", "Gives reward", "Improves health", "Saves time"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Elsie]', questionText: '7) What is the purpose of the passage?', options: ["Raise awareness about sleep-deprived children", "Promote electronic devices for toddlers", "Criticize the NHS services", "Advertise pediatric clinics"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Elsie]', questionText: '8) What is the purpose Vicki is required to understand?', options: ["how parents of sleep-deprived children feel.", "how to operate a medical clinic", "how to sleep 8 hours a day", "how to write sleep research books"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Elsie]', questionText: '9) What does GP mean?', options: ["Medical doctor", "General program", "Global phone", "Group practice"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Elsie]', questionText: "10) Describe what's happening in paragraph 2?", options: ["Jayne risks being late to work to allow her daughter to sleep", "Jayne sleeps in her car every morning", "Jayne quits her job to stay home", "Elsie wakes up early every day"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Elsie]', questionText: '11) What is the main idea of paragraph 3?', options: ["Jayne is getting tired of looking after the household and with Elsie sleeping problems.", "Nick Accuses Jayne of being a bad parent", "Elsie is sleeping down stairs with Jayne and him", "The daughters sleeping problem is dominating her mother 's life"], correctAnswer: 'D' }
  ]
  },
  12: {
    analogy: [
      { category: 'Analogies', questionText: 'Plane : Hangar', options: ["Nest : Bird", "Turtle : Shell", "Fish : Ocean", "Fly : Airplane"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Coffee : Cream', options: ["Tie : Shirt", "Needle : Thread", "Shirt : Tie", "Juice : Drink"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Diamond : Mining', options: ["Fishing : Salmon", "Gold : Jewelry", "Pearls : Shelling", "Dig : Shovel"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Manager : Organize', options: ["Narrator : Anecdote", "Story : Author", "Doctor : Hospital", "Teach : Student"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Student : Class', options: ["Garage : Car", "Classroom : Lesson", "Stove : Kitchen", "Pencil : Write"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Intellectual : Think', options: ["Heat : Fire", "Brain : Head", "Smart : Clever", "Lamp : Light"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Birth : Death', options: ["Finish : Start", "Plough : Harvest", "Life : Alive", "Growth : Plant"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Annex : Extension', options: ["Crude : Rough", "Smooth : Rough", "Building : Structure", "Short : Tall"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Street : Sidewalk', options: ["Wheel : Car", "Walk : Road", "Pencil : Eraser", "City : Map"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Shower : Clean', options: ["Safety : Guard", "Water : Bath", "Cover : Protect", "Dirty : Wash"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Pen : Paper', options: ["Ink : Pen", "Soap : Water", "Write : Letter", "Desk : Chair"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Generate : Energy', options: ["Spin : Dizzy", "Heat : Friction", "Power : Engine", "Run : Fast"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Hair loss : Bald', options: ["Rust : Moisture", "Skin : Health", "Friction : Erosion", "Head : Hair"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Scarce : Abundant', options: ["Hire : Employ", "Appoint : Dismiss", "Rare : Few", "Leader : Follower"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Plunder : Booty', options: ["Painting : Brush", "Steal : Thief", "Wood : Cut", "Chisel : Sculpture"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Defect : Repair', options: ["Ignorance : Ask", "Heal : Injury", "Break : Fix", "Error : Wrong"], correctAnswer: 'A' }
    ],
    wording: [
      // Sentence Completion
      { category: 'Wording', questionText: 'For over 50 years ........ and amateur historians have gone all over the north of Norway ...... For traces of Vikings.', options: ["Archaeologists : searched", "Pilots : cooked", "Drivers : slept", "Bakers : swam"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'The university dean ......the student for the....... and hard work.', options: ["scolded : laziness", "commended : dedication", "ignored : noise", "forgot : silence"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Although The Shard is one of London\'s newest.........London is still the most popular paid tourist ........in the United Kingdom, with over 3.75 million visitors per year.', options: ["rivers : ocean", "parks : forest", "landmarks : destination", "roads : street"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Abdullah was...........to join the MBA. He wasn\'t sure if it .......him.', options: ["eager : broke", "happy : damaged", "ready : hurt", "hesitant : suited"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'The taxi driver.... some concerns to the tourists about the road they were planning on going on, he said the driving ....... were dangerous.', options: ["expressed : conditions", "sang : songs", "danced : steps", "ate : meals"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Ahmed has been.........all week for the football, so he was........about it!', options: ["sleeping : tired", "training : determined", "cooking : full", "reading : silent"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Each occupation has its own............bankers, lawyers and computer professionals, for example, all use among themselves a language which outsiders have difficulty following.', options: ["furniture", "vehicles", "jargons", "buildings"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'It\'s hard to imagine how things were before .........were invented, we certainly couldn\'t .............information as easily as we can now.', options: ["chairs : sit", "shoes : walk", "beds : sleep", "computers : get"], correctAnswer: 'D' },

      // Contextual Errors
      { category: 'Wording', questionText: 'The assumption that chlorofluorocarbons would be deleterious in the environment because they were chemically inert, was challenged by the demonstration of a potential threat to the ozone layer.', options: ["chlorofluorocarbons", "deleterious", "inert", "challenged"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Biological clocks are of such basic helpful adaptive value to living organisms that we would expect most organisms to endure them.', options: ["adaptive", "organisms", "endure", "basic"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Each occupation has its own weaknesses, bankers, lawyers and computer professionals for example, all use among themselves languages which outsiders have difficulty following.', options: ["weaknesses", "professionals", "languages", "following"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Having been chief accountant for so many years, Ms.George felt herself to be indispensable and was unwilling to assume control of department after the merger.', options: ["chief", "indispensable", "unwilling", "assume"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'If there is nothing to absorb the energy of sound waves, they travel on erratically but their intensity diminishes as they travel further from their source.', options: ["absorb", "erratically", "intensity", "diminishes"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Iodized deficiency is eradicated in these remote mountain regions; however, it is no longer prevalent in the lowlands where iodized salt is available.', options: ["deficiency", "eradicated", "prevalent", "available"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'The intellectual flexibility inherent in a multicultural nation has been stifled in classrooms where emphasis on British - American literature has not reflected the cultural uniformity of our country.', options: ["flexibility", "stifled", "uniformity", "inherent"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Unlike the ancient Greeks, we are interested in a person\'s stereotypes, the things that make each person different from the general.', options: ["ancient", "stereotypes", "general", "different"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'His characteristically accommodating views on examination methods at university level have aroused antagonism in those who want to introduce innovative and flexible patterns of assessment.', options: ["accommodating", "antagonism", "innovative", "assessment"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Even after a century of cursory investigation, the relation of the solar cycle to terrestrial weather remains enigmatic.', options: ["cursory", "relation", "remains", "enigmatic"], correctAnswer: 'A' }
    ],
    reading: [
    // Passage 1: Nasa Space Shuttles
    { category: 'Reading Comprehension', passage: '[Passage: Nasa Space Shuttles]', questionText: '1) What is the California Science Centre?', options: ["Space Museum", "NASA headquarters", "A rocket launchpad", "An astronomy school"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Nasa Space Shuttles]', questionText: "2) What wasn't included of the stuff that the smithsonians wanted from nasa?", options: ["Orbiters", "Artifacts", "Diapers", "Landers"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Nasa Space Shuttles]', questionText: '3) What does clamoring mean in the passage?', options: ["Pursue Loudly", "Reject quietly", "Donate freely", "Ignore completely"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Nasa Space Shuttles]', questionText: '4) What is the Smithsonian?', options: ["A museum", "Science center", "NASA Shuttles", "A space center"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Nasa Space Shuttles]', questionText: '5) Who does "their" refer to?', options: ["the museums", "Smithsonian's", "Astronauts", "Engineers"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Nasa Space Shuttles]', questionText: '6) Who does "they" refer to?', options: ["Nasa", "Museums", "Orbiters", "Scientists"], correctAnswer: 'A' },

    // Passage 2: Seal Whiskers
    { category: 'Reading Comprehension', passage: '[Passage: Seal Whiskers]', questionText: '1) What best title that suits this passage?', options: ["Whiskers at works", "Deep Sea Diving", "The Life of Henry", "Murky Waters"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Seal Whiskers]', questionText: '2) Which of the following can they NOT detect underwater?', options: ["Alternations in their surrounding", "Seizing skimming fish", "Size of prey", "Movement of water"], correctAnswer: 'B' },

    // Passage 3: Marshmallow Experiment
    { category: 'Reading Comprehension', passage: '[Passage: Marshmallow Experiment]', questionText: '1) Who were the "rewarded delayers" in the passage?', options: ["The kids who did not eat the marshmallow at once", "The kids who ate the pretzel immediately", "The researchers at Stanford", "The parents of the children"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Marshmallow Experiment]', questionText: '2) What do we learn from the passage about leading a successful life?', options: ["you are more likely to lead one by practicing impulse control.", "eating marshmallows improves SAT scores", "waiting 15 minutes guarantees wealth", "Stanford students are healthier"], correctAnswer: 'A' },

    // Passage 4: Mind reading
    { category: 'Reading Comprehension', passage: '[Passage: Mind reading]', questionText: '1) What did they use to fly on?', options: ["Brain activity", "Computer Screen", "Virtual machine", "Physical controls"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Mind reading]', questionText: '2) What does conjuring trick mean?', options: ["illusion", "truth", "invention", "obstacle"], correctAnswer: 'A' },

    // Passage 5: Multinational Companies
    { category: 'Reading Comprehension', passage: '[Passage: Multinational Companies]', questionText: '1) What is the meaning of stagnant?', options: ["unchanged", "growing fast", "declining", "unstable"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Multinational Companies]', questionText: '2) What is the meaning of protrude?', options: ["bulge", "shrink", "flatten", "disappear"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Multinational Companies]', questionText: "3) What's the best title for multinational?", options: ["USA reviving, China consuming", "Foreign investments in the US", "The coming market of multinational", "China: put all of your chips on China"], correctAnswer: 'C' },
    { category: 'Reading Comprehension', passage: '[Passage: Multinational Companies]', questionText: '4) Increase of Chinese economy?', options: ["9.1%", "2%", "15%", "5%"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Multinational Companies]', questionText: '5) The investments of multinational companies in China are?', options: ["Not something new / nothing new", "a cause of the rise in China's economy", "illegal under international law", "declining rapidly"], correctAnswer: 'A' },

    // Passage 6: Sami reindeers
    { category: 'Reading Comprehension', passage: '[Passage: Sami reindeers]', questionText: '1) What is the basis of Sami economy?', options: ["Reindeer Herding", "Norway", "Tourism", "Ski manufacturing"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Sami reindeers]', questionText: '2) What is it that we take from paragraph 4?', options: ["There is a strong connection between language and culture.", "All Sami people speak Norwegian", "Skiing is required by law", "Reindeer herding is completely extinct"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Sami reindeers]', questionText: '3) What does the word "Jagged" mean?', options: ["Rugged", "Irregular", "Notched", "Wild"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Sami reindeers]', questionText: '4) What do Sami Herders focus on achieving in their tradition of reindeer herding?', options: ["becoming one with the herd.", "selling expensive skis", "building permanent fences", "moving to southern Norway"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Sami reindeers]', questionText: '5) How do you describe the treatment of young Sari herders in the compulsory boarding school?', options: ["Discrimination, because they were forbidden from speaking their own language.", "Supportive, because they learned modern ski techniques", "Fair and equal to all Norwegian students", "Irrelevant to their traditional lifestyle"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Sami reindeers]', questionText: '6) What keeps the herdsman busy?', options: ["His reindeer herd", "Boarding school", "Norwegian policies", "Ski maintenance"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Sami reindeers]', questionText: '7) What was the grazing effect on Sami Reindeers?', options: ["more geographically restricted", "freely roaming anywhere", "increased in population tenfold", "unaffected by modern fences"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Sami reindeers]', questionText: '8) What can we infer about the earlier Norwegian policies toward the Sami reindeer herders?', options: ["compulsory", "autonomous", "Discrimination", "Helpful"], correctAnswer: 'C' }
  ]
  },
  13: {
    analogy: [
      { category: 'Analogies', questionText: 'Pamphlet : Book', options: ["Desk : Table", "Paper : Page", "Stool : Chair", "Read : Library"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Illness : Virus', options: ["Trauma : Accident", "Accident : Injury", "Health : Doctor", "Sickness : Bed"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Blindness : Eyes', options: ["Economy : Slump", "Vision : Sight", "Recession : Economy", "Deaf : Ear"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Ray : Beam', options: ["Word : Sentence", "Light : Sun", "Alphabet : Text", "Letter : Character"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Color : Fabric', options: ["Pitch : Sound", "Sound : Volume", "Fabric : Weave", "Bright : Light"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Rocket : Trajectory', options: ["Path : Walker", "Flight : Plane", "Journey : Itinerary", "Map : City"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Fish : School', options: ["Flock : Bird", "Herd : Cattle", "Locust : Swarm", "Animal : Zoo"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Page : Book', options: ["Year : Month", "Season : Year", "Author : Book", "Read : Text"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Winter : Cold', options: ["Freshness : Water", "Summer : Season", "Ice : Melt", "River : Freshness"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Sand : Dunes', options: ["Rain : Ponds", "Puddles : Water", "Wind : Storm", "Snow : Winter"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Copy : Authentic', options: ["Original : Fake", "Fake : Counterfeit", "Print : Paper", "Reproduce : Original"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Dearth : Paucity', options: ["Individual : Person", "Abundance : Dearth", "Group : Crowd", "Few : Many"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Accident : Injury', options: ["Erosion : Wind", "Water : Erosion", "Harm : Danger", "Doctor : Cure"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Electron : Atom', options: ["Fruit : Core", "Cell : Tissue", "Seed : Orange", "Atom : Molecule"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Recall : Forget', options: ["Remember : Mind", "Ignore : Skip", "Care : Neglect", "Memory : Brain"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Presence : Absence', options: ["Precede : Ensue", "Follow : Lead", "Before : Prior", "Time : Clock"], correctAnswer: 'A' }
    ],
    wording: [
      // Sentence Completion
      { category: 'Wording', questionText: 'Nada and Rahaf have been friends since........ and now they\'re both ........ 30.', options: ["childhood : turning", "breakfast : eating", "winter : freezing", "night : sleeping"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Many people gather to have ........about Umrah in the great mosque of Makkah to make it easy and..........for everyone.', options: ["battles : dangerous", "discussions : comfortable", "races : exhausting", "arguments : hostile"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Video games are a really big ........and their latest......... allow you to play without a controller just by moving your body.', options: ["food : recipes", "clothing : shoes", "industry : consoles", "plant : flowers"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Malaria is a life-threatening disease caused by parasites that are ......... to people through the bites of..........female Anopheles mosquitoes. It is preventable and curable.', options: ["baked : fresh", "painted : colorful", "cleaned : pure", "transmitted : infected"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Before Jack came to Saudia he ......that the desert rose was a flower but he .........it was a rock in the shape of flower.', options: ["assumed : realized", "cooked : ate", "flew : swam", "bought : sold"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'He pulled up to a gas ...........while the .............were filling up in the giant tank.', options: ["room : chairs", "station : pumps", "kitchen : plates", "garden : trees"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Sama was ............. to Japan, and she wanted to know more about history and ......', options: ["swimming : ocean", "cooking : food", "traveling : culture", "sleeping : bed"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Dr. Qahtani was the first antique ......... in the national museum, she is the first Saudi ........to graduate in this field.', options: ["car : wheel", "building : door", "shoe : lace", "specialist : woman"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Sara has been traveling in past........ , but she decided to stay home this summer to ........... her money.', options: ["vacations : save", "kitchens : cook", "bedrooms : sleep", "garages : park"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'When I was working as a medical .............in the University of Cairo, I was inspired by the ............ Egyptian culture.', options: ["pilot : sky", "researcher : ancient", "driver : road", "chef : kitchen"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'The judo ......... was held by the school and each team was .............by 12 students.', options: ["dinner : cooked", "lesson : written", "competition : comprised", "building : built"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'The age of alternative energy will .........his existence and the solar energy will take an....... place between alternative energy.', options: ["destroy : small", "cancel : weak", "ignore : low", "impose : important"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'If a strong person faced......... of fear, you will find him quiet, reassured and....... to manage his issues.', options: ["reasons : versed", "colors : red", "foods : sweet", "sounds : loud"], correctAnswer: 'A' },

      // Contextual Errors
      { category: 'Wording', questionText: 'Veganism is an extension of vegetarianism that avoids the use of animal products, which has uncertain benefits for the environment, animals, humans, and lifestyle.', options: ["extension", "uncertain", "environment", "lifestyle"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Do not touch the internal parts of the unit. Leave any required service work to qualified service personnel only. If this hardware is dropped, immediately remove the battery or unplug the AC adaptor.', options: ["internal", "qualified", "hardware", "immediately"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'Speeding and attempts at controlling it is not a modern solution. For example, in the introduction of horseless carriages in the 19th century, they were prohibited from going faster than walking pace, and a man carrying a red flag was required to walk in front of the vehicle to prevent it from hitting people.', options: ["controlling", "introduction", "solution", "prohibited"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'In the past, before technology came, it was hard to search for answers, when children asked why sea water is salty, they would broadcast curious explanations. Today, Google tells you that dissolved salt from rivers and oceans flow into the sea.', options: ["broadcast", "curious", "explanations", "dissolved"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Biological clocks are of such basic helpful adaptive value to living organisms that we would expect most organisms to endure them.', options: ["adaptive", "organisms", "endure", "expect"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'When people are asked how many languages there are, the answers vary. One aimless sampling of New Yorkers said "probably several hundred." However, this is not close.', options: ["vary", "aimless", "hundred", "close"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Although humankind has not been able to travel outside its environment beyond space, scientists believe that in the near future it could become a multi-planetary species that can reach neighboring planets, such as Mars.', options: ["environment", "species", "neighboring", "planets"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'In hot and humid climates, sweat production increases, leading to salt loss and physical exertion increases this effect. Exchanging body salt is not always recommended, as it may disturb water and salt balance and reduce performance efficiency.', options: ["increases", "exertion", "Exchanging", "recommended"], correctAnswer: 'C' }
    ],
    reading: [
    // Passage 1: Hawaiian Cowboys
    { category: 'Reading Comprehension', passage: '[Passage: Hawaiian Cowboys]', questionText: '1) In paragraph one, which is true about Hawaiian Cowboys?', options: ["Traditional Cowboys", "As old as American cowboys", "Influencers in American cowboy culture", "Modern entertainers"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Hawaiian Cowboys]', questionText: '2) Who asked for the Vaqueros help?', options: ["Hawaiians", "King", "Captain", "Spaniards"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Hawaiian Cowboys]', questionText: '3) Meaning of Mentor in the paragraph?', options: ["Teacher", "Origin", "relatives", "manager"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Hawaiian Cowboys]', questionText: '4) What does "their" in the paragraph refer to?', options: ["Vaqueros", "research", "Hawaii or ( Hawaiian )", "cattle"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Hawaiian Cowboys]', questionText: '5) What is said about ranching as a job?', options: ["it wasn't enough for a cowboy to live off", "helped the cowboys to live", "it was extremely profitable", "it required high education"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Hawaiian Cowboys]', questionText: '6) What did Danny say regarding the Paniolo culture?', options: ["It will always remain a central part of Hawaiian identity", "It has become widely recognized in mainland America", "There is a significant drop in their population in the last years", "It's likely to be less popular in the future"], correctAnswer: 'C' },

    // Passage 2: Children Eating Habits
    { category: 'Reading Comprehension', passage: '[Passage: Children Eating Habits]', questionText: "1) The children's preferences were?", options: ["numerous", "avert", "obvious", "unrelated"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Children Eating Habits]', questionText: "2) How to make the children's eating habits better?", options: ["self regulating food", "looking up to parents", "By taking as much information as possible", "to imitate their parents"], correctAnswer: 'D' },
    { category: 'Reading Comprehension', passage: '[Passage: Children Eating Habits]', questionText: '3) Rewarding children had .......... influence on them?', options: ["Unintended", "positive", "inexplicable", "considerate"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Children Eating Habits]', questionText: "4) What's the purpose of the text?", options: ["Provide a solution to a problem", "to give information", "Contrast different scientific theories", "Promote fast food brands"], correctAnswer: 'B' },

    // Passage 3: Immunity
    { category: 'Reading Comprehension', passage: '[Passage: Immunity]', questionText: '1) What did Dr. Richard say parents should let their children do?', options: ["let them get exposed to a little bit of dirt", "keep them strictly sanitized", "avoid outdoor activities", "use antibacterial soap daily"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Immunity]', questionText: '2) According to dr. Richard what is the hygiene hypothesis?', options: ["Exposure to germs at youth enhances your immunity system", "The hypothesis was a relationship between germs and health", "Clean environments eradicate all autoimmune disorders", "Antibacterial soaps improve gut bacteria"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Immunity]', questionText: '3) Meaning of determinant?', options: ["Cause", "result", "Effect", "origin"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Immunity]', questionText: '4) What did he say was possible for the spread of autoimmune diseases through more exposure at a young age?', options: ["stop it", "cure it", "lessened", "prevented entirely"], correctAnswer: 'C' },
    { category: 'Reading Comprehension', passage: '[Passage: Immunity]', questionText: '5) Which is true according to the passage?', options: ["Dr Richard was the first person to do the study", "explains the relationship between the microbes /germs and health", "Other doctors disagree with the study", "Laboratory mice developed stronger immunity without germs"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Immunity]', questionText: '6) What should children not use?', options: ["Antibacterial soap", "Regular soap", "Tap water", "Moisturizing cream"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Immunity]', questionText: '7) When did the writer mention was the time you were exposed to getting bacteria in your immunity?', options: ["In the early stages of life", "In adulthood", "During adolescence", "In old age"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Immunity]', questionText: '8) What did (their) refer to?', options: ["Medical research", "Microbes", "Laboratories", "Diseases"], correctAnswer: 'A' },

    // Passage 4: Coral Reef
    { category: 'Reading Comprehension', passage: '[Passage: Coral Reef]', questionText: '1) Are the starfish partially to blame or not to blame at all?', options: ["one of the reasons", "The only reason to blame", "the most reason to blame", "not a reason"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Coral Reef]', questionText: "2) What's shrinking?", options: ["Coral", "Australia", "starfish", "ocean"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Coral Reef]', questionText: '3) What does it refer to in the passage?', options: ["coral", "starfish", "ocean", "Australia"], correctAnswer: 'A' }
  ]
  },
  14: {
    analogy: [
      { category: 'Analogies', questionText: 'Egg : Oval', options: ["Table : Round", "Round : Circle", "Cube : Square", "Smooth : Surface"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Oil : Greasy', options: ["Sweet : Sugar", "Food : Taste", "Chilli : Spicy", "Hot : Stove"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Watchful : Aware', options: ["Reward : Penalty", "Alert : Sleepy", "Prize : Reward", "Win : Game"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Scroll : Mouse', options: ["Cut : Scissors", "Screen : Monitor", "Hand : Hold", "Peel : Knife"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Ruler : Measure', options: ["Scale : Weight", "Clean : Soap", "Filter : Clean", "Sharp : Knife"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Cry : Sadness', options: ["Anger : Yell", "Gasp : Surprise", "Smile : Teeth", "Fear : Danger"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Water : Swimming', options: ["Climbing : Peak", "Ocean : Wave", "Mountain : Climbing", "Hike : Trail"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Eyes : Seeing', options: ["Thinking : Mind", "Brain : Thinking", "Glasses : Sight", "Hear : Ear"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Heart : Love', options: ["Courage : Hero", "Red : Color", "Lion : Bravery", "Fox : Animal"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Lost : Map', options: ["Medicine : Sick", "Sprain : Bandage", "Injury : Pain", "Route : Guide"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Unkind : Generosity', options: ["Politeness : Rude", "Sweet : Sugar", "Cold : Heat", "Tasteless : Flavor"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Graceful : Flexible', options: ["Scary : Fear", "Agile : Slow", "Frightening : Spooky", "Beauty : Pretty"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Beginner : Expert', options: ["Master : Novice", "Skill : Talent", "Student : Learn", "Amateur : Pro"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Shoelace : Tie', options: ["Button : Push", "Press : Key", "Lock : Key", "Zip : Jacket"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Hardworking : Lazy', options: ["Finish : Done", "Diligence : Work", "Complete : Lacking", "Short : Brief"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Exercise : Fitness', options: ["Rain : Cloud", "Storm : Weather", "Monsoon : Flood", "Health : Doctor"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Drivers : License', options: ["Pass : Travel", "Car : Drive", "Passport : Border", "Flying : Ticket"], correctAnswer: 'D' },
      { category: 'Analogies', questionText: 'Cavity : Filling', options: ["Illness : Hospital", "Breakdown : Recovery", "Repair : Damage", "Fix : Tool"], correctAnswer: 'B' },
      { category: 'Analogies', questionText: 'Erase : Eraser', options: ["Plot : Plan", "Plan : Scheme", "Delete : Key", "Draw : Pencil"], correctAnswer: 'A' },
      { category: 'Analogies', questionText: 'Dismal : Dark', options: ["Laughter : Joke", "Gloomy : Bright", "Funny : Hilarious", "Sad : Tear"], correctAnswer: 'C' },
      { category: 'Analogies', questionText: 'Apple : Fruit', options: ["Mammal : Dog", "Monkey : Primate", "Tree : Oak", "Banana : Peel"], correctAnswer: 'B' }
    ],
    wording: [
      { category: 'Wording', questionText: 'I would love to stay in a village where it.....to be calm and quiet. Life in cities is...... too busy.', options: ["tends : simply", "swims : cold", "cooks : hot", "flies : high"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Look for happiness in your own ........... don\'t look for it in someone else\'s............', options: ["car : engine", "home : garden", "shoe : lace", "phone : screen"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'In families it is ........ uniform for children personality variation even in the ........ Household.', options: ["always : different", "never : separate", "seldom : same", "often : distant"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'When the area of ........ widens, the area of ........ narrows.', options: ["water : fire", "heat : ice", "light : dark", "austerity : prosperity"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'A friend is like an/a ........., the more it .......... the more you need it.', options: ["umbrella : rains", "hammer : sleeps", "spoon : walks", "key : sings"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Forgetting bad ........... sometimes is good so you can move on with your life in .........', options: ["meals : hunger", "memories : peace", "clothes : cold", "roads : traffic"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'People think marriage is based on ......... love and understanding, but I think it\'s based on the share of..............', options: ["loud : noise", "fast : speed", "mutual : responsibility", "heavy : weight"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'If there are no more ........., you may .......... your exam.', options: ["cars : drive", "meals : cook", "beds : sleep", "questions : begin"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'Ali\'s ......... was on his desk all the..............', options: ["notebook : time", "car : road", "river : water", "cloud : sky"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Having good attendance is important, being ........ is usually a sign of ........ of motivation.', options: ["early : surplus", "absent : lack", "present : excess", "active : abundance"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'The power of life isn\'t determined by its ........, but rather by the power it ........', options: ["weight : carries", "height : reaches", "longevity : gives", "width : measures"], correctAnswer: 'C' },
      { category: 'Wording', questionText: 'The advance in all fields of.........is so stunning that sometimes it takes your ......away.', options: ["cooking : food", "sleeping : bed", "driving : car", "science : breath"], correctAnswer: 'D' },
      { category: 'Wording', questionText: 'The food tastes......... it was prepared by......... chef.', options: ["great : an excellent", "salty : a terrible", "raw : a lazy", "cold : a bad"], correctAnswer: 'A' },
      { category: 'Wording', questionText: 'Although it is ............. the coral snake is very............', options: ["friendly : cute", "small : dangerous", "sweet : tasty", "soft : comfortable"], correctAnswer: 'B' },
      { category: 'Wording', questionText: 'Languages and cultures... and change over time, there are some particular cultures and languages that stay ............', options: ["sleep : tired", "run : fast", "grows : unique", "cook : hot"], correctAnswer: 'C' }
    ],
    reading: [
    // Passage 1: Fresh Water
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '1) What is the percentage of water on earth?', options: ["over than 70%", "less than 20%", "exactly 50%", "around 90%"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: "2) Most of earth's water comes from?", options: ["Oceans", "Rivers", "Glaciers", "Rainfall"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '3) What is the main idea of the passage?', options: ["Freshwater Scarcity", "Ocean Navigation", "Saltwater Purification", "Industrial Recycling"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '4) Freshwater is....... According to the paragraph?', options: ["Decreasing and diminishing", "Abundant and infinite", "Increasing globally", "Unaffected by pollution"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '5) How does freshwater get contaminated?', options: ["Glaciers Melting", "Rising sea levels", "Volcanic eruptions", "Clean rainfall"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '6) What type of water comes from swamp?', options: ["Still Water", "dirty water", "Salt water", "Purified water"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '7) What does jeopardy mean in the context?', options: ["restrictions of freshwater", "global warming", "abundance", "purity"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '8) Freshwater never runs out because its constantly being renewed by which of the following?', options: ["Water Cycle", "Ocean currents", "Glacier runoff", "Underground pumping"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '9) The advancement in the medical fields had an effect on?', options: ["fresh water supply", "increase in healthy people", "ocean salinity", "glacier melting rates"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: "10) What's water that seeps into the ground called?", options: ["Groundwater", "Reservoir", "Aquifer", "Run-off"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '11) What is the best title?', options: ["The decrease of fresh water", "The History of Oceans", "Building Reservoirs", "Saltwater Irrigation"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '12) What would cause jeopardy?', options: ["Decrease of freshwater", "Increase of rain", "Melting icebergs", "Aquifer expansion"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '13) Meaning of the word survival?', options: ["Live / continuity", "Extinction", "Danger", "Transformation"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '14) Increasing the ocean water leads to?', options: ["Salty water", "Less salty water", "Glaciers melting", "Freshwater growth"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '15) Water supplies for large towns are called..', options: ["Reservoirs", "Ponds", "Wells", "Streams"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '16) Underground layer of rock that gets filled with water?', options: ["Aquifer", "Reservoir", "Swamp", "Basin"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '17) What is not a way water would get polluted?', options: ["watering the grass", "dumping trash", "industrial chemicals", "acid rain"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Fresh Water]', questionText: '18) Water that runs off land and pollutes freshwater supply?', options: ["Run-off water", "Groundwater", "Aquifer water", "Distilled water"], correctAnswer: 'A' },

    // Passage 2: Arab Dhow
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: '1) What were the Arab contributions mostly of?', options: ["mostly artistic", "mostly scientific", "mostly historic", "mostly mathematical"], correctAnswer: 'B' },
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: '2) Paragraph 2 is mostly talking about?', options: ["The many benefits of Dhows", "The history of Portugal", "Square sail engineering", "African port taxes"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: '3) Meaning of substantial?', options: ["Major", "Minor", "Weak", "Temporary"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: '4) How did Henry improve the dhows?', options: ["He took ideas from the Arabs", "Helped it move against the wind", "he made them faster", "Lateen sails"], correctAnswer: 'D' },
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: "5) What was the Europeans' boats problem?", options: ["They were uncontrollable", "They were too small", "They sank easily", "They were too expensive"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: '6) How are Europeans boats described as in the 1st century?', options: ["Hard to move", "Fast and agile", "Unsinkable", "Lightweight"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: '7) Why is the Arab Dhow famous?', options: ["Maneuverability", "Large iron anchors", "Heavy armor", "Rowing capacity"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: '8) Why did Henry become interested in Arab Dhows?', options: ["Because of its maneuvering", "Trade with Africa", "European naval laws", "Fishing efficiency"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: '9) What is the best title?', options: ["Arab dhows and their contributions to trade", "The Life of Prince Henry", "European Shipbuilding in the 18th Century", "Sailing across the Atlantic"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: '10) What was the purpose of the test?', options: ["To inform", "To persuade", "To criticize", "To entertain"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: '11) What is the meaning of extensive as used in paragraph 2?', options: ["Widespread", "Profitable", "Risky", "Limited"], correctAnswer: 'A' },
    { category: 'Reading Comprehension', passage: '[Passage: Arab Dhow]', questionText: '12) What does "It" refer to?', options: ["Vessels", "Lateen", "sailors", "Trade"], correctAnswer: 'A' }
  ]
  },
  15: {
    analogy: [],
    wording: [],
    reading: []
  }
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

    document.getElementById('modal-passage-title').textContent = title || 'Full Passage';
    document.getElementById('modal-passage-body').textContent = passageText;
    modal.style.display = 'flex';
}

// 1. Ensure Model selection sets activeModel
function selectEnglishModel(modelNumber) {
  activeModel = modelNumber;
  
  const titleElement = document.getElementById('active-model-title');
  if (titleElement) {
    titleElement.textContent = `Model ${modelNumber}`;
  }
  
  switchView('english-sections-view');
}

// 2. Safely extract questions from englishData
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
