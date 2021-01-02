const winConditions = [
    //rows
    [0,1,2,3,4], [1,2,3,4,5,], [2,3,4,5,6], [3,4,5,6,7], [4,5,6,7,8], [5,6,7,8,9], [6,7,8,9,10], [7,8,9,10,11], [8,9,10,11,12],
    [13,14,15,16,17], [14,15,16,17,18], [15,16,17,18,19], [16,17,18,19,20], [17,18,19,20,21], [18,19,20,21,22], [19,20,21,22,23], [20,21,22,23,24], [21,22,23,24,25],
    [26,27,28,29,30], [27,28,29,30,31], [28, 29, 30, 31, 32], [29,30,31,32,33], [30,31,32,33,34], [31,32,33,34,35], [32,33,34,35,36], [33,34,35,36,37], [34,35,36,37,38],
    [39,40,41,42,43], [40,41,42,43,44], [41,42,43,44,45], [ 42,43,44,45,46], [43,44,45,46,47], [44,45,46,47,48], [45,46,47,48,49], [46,47,48,49,50], [47,48,49,50,51],
    [52,53,54,55,56], [53,54,55,56,57], [54,55,56,57,58], [55,56,57,58,59], [56,57,58,59,60], [57,58,59,60,61], [58,59,60,61,62], [59,60,61,62,63], [60,61,62,63,64],
    [65,66,67,68,69], [66,67,68,69,70], [67,68,69,70,71], [68,69,70,71,72], [69,70,71,72,73], [70,71,72,73,74], [71,72,73,74,75], [72,73,74,75,76], [73,74,75,76,77],
    [78,79,80,81,82], [79,80,81,82,83], [80,81,82,83,84], [81,82,83,84,85], [82,83,84,85,86], [83,84,85,86,87], [84,85,86,87,88], [85,86,87,88,89], [86,87,88,89,90],
    [91,92,93,94,95], [92,93,94,95,96], [93,94,95,96,97], [94,95,96,97,98], [95,96,97,98,99], [96,97,98,99,100], [97,98,99,100,101], [98,99,100,101,102], [99,100,101,102,103],
    [104,105,106,107,108], [105,106,107,108,109], [106,107,108,109,110], [107,108,109,110,111], [108,109,110,111,112], [109,110,111,112,113], [110,111,112,113,114], [111,112,113,114,115], [112,113,114,115,116],
    [117,118,119,120,121], [118,119,120,121,122], [119,120,121,122,123], [120,121,122,123,124], [121,122,123,124,125], [122,123,124,125,126], [123,124,125,126,127], [124,125,126,127,128], [125,126,127,128,129],
    [130,131,132,133,134], [131,132,133,134,135], [132,133,134,135,136], [133,134,135,136,137], [134,135,136,137,138], [135,136,137,138,139], [136,137,138,139,140], [137,138,139,140,141], [138,139,140,141,142],
    [143,144,145,146,147], [144,145,146,147,148], [145,146,147,148,149], [146,147,148,149,150], [147,148,149,150,151], [148,149,150,151,152], [149,150,151,152,153], [150,151,152,153,154], [151,152,153,154,155],
    [156,157,158,159,160], [157,158,159,160,161], [158,159,160,161,162], [159,160,161,162,163], [160,161,162,163,164], [161,162,163,164,165], [162,163,164,165,166], [163,164,165,166,167], [164,165,166,167,168],
    //columns
    [0,13,26,39,52], [13,26,39,52,65], [26,39,52,65,78], [39,52,65,78,91], [52,65,78,91,104], [65,78,91,104,117], [78,91,104,117,130], [91,104,117,130,143], [104,117,130,143,156],
    [1,14,27,40,53], [14,27,40,53,66], [27,40,53,66,79], [40,53,66,79,92], [53,66,79,92,105], [66,79,92,105,118], [79,92,105,118,131], [92,105,118,131,144], [105,118,131,144,157],
    [2,15,28,41,54], [15,28,41,54,67], [28,41,54,67,80], [41,54,67,80,93], [54,67,80,93,106], [67,80,93,106,119], [80,93,106,119,132], [93,106,119,132,145], [106,119,132,145,158],
    [3,16,29,42,55], [16,29,42,55,68], [29,42,55,68,81], [42,55,68,81,94], [55,68,81,94,107], [68,81,94,107,120], [81,94,107,120,133], [94,107,120,133,146], [107,120,133,146,159],
    [4,17,30,43,56], [17,30,43,56,69], [30,43,56,69,82], [43,56,69,82,95], [56,69,82,95,108], [69,82,95,108,121], [82,95,108,121,134], [95,108,121,134,147], [108,121,134,147,160],
    [5,18,31,44,57], [18,31,44,57,70], [31,44,57,70,83], [44,57,70,83,96], [57,70,83,96,109], [70,83,96,109,122], [83,96,109,122,135], [96,109,122,135,148], [109,122,135,148,161],
    [6,19,32,45,58], [19,32,45,58,71], [32,45,58,71,84], [45,58,71,84,97], [58,71,84,97,110], [71,84,97,110,123], [84,97,110,123,136], [97,110,123,136,149], [110,123,136,149,162],
    [7,20,33,46,59], [20,33,46,59,72], [33,46,59,72,85], [46,59,72,85,98], [59,72,85,98,111], [72,85,98,111,124], [85,98,111,124,137], [98,111,124,137,150], [111,124,137,150,163],
    [8,21,34,47,60], [21,34,47,60,73], [34,47,60,73,86], [47,60,73,86,99], [60,73,86,99,112], [73,86,99,112,125], [86,99,112,125,138], [99,112,125,138,151], [112,125,138,151,164],
    [9,22,35,48,61], [22,35,48,61,74], [35,48,61,74,87], [48,61,74,87,100], [61,74,87,100,113], [74,87,100,113,126], [87,100,113,126,139], [100,113,126,139,152], [113,126,139,152,165],
    [10,23,36,49,62], [23,36,49,62,75], [36,49,62,75,88], [49,62,75,88,101], [62,75,88,101,114], [75,88,101,114,127], [88,101,114,127,140], [101,114,127,140,153], [114,127,140,153,166],
    [11,24,37,50,63], [24,37,50,63,76], [37,50,63,76,89], [50,63,76,89,102], [63,76,89,102,115], [76,89,102,115,128], [89,102,115,128,141], [102,115,128,141,154], [115,128,141,154,167],
    [12,25,38,51,64], [25,38,51,64,77], [38,51,64,77,90], [51,64,77,90,103], [64,77,90,103,116], [77,90,103,116,129], [90,103,116,129,142], [103,116,129,142,155], [116,129,142,155,168],
    //diags \
    [104,118,132,146,160],
    [91,105,119,133,147], [105,119,133,147,161], 
    [78,92,106,120,134], [92,106,120,134,148], [106,120,134,148,162],
    [65,79,93,107,121], [79,93,107,121,135], [93,107,121,135,149], [107,121,135,149,163], 
    [52,66,80,94,108], [66,80,94,108,122], [80,94,108,122,136], [94,108,122,136,150], [108,122,136,150,164], 
    [39,53,67,81,95], [53,67,81,95,109], [67,81,95,109,123], [81,95,109,123,137], [95,109,123,137,151], [109,123,137,151,165],
    [26,40,54,68,82], [40,54,68,82,96], [54,68,82,96,110], [68,82,96,110,124], [82,96,110,124,138], [96,110,124,138,152], [110,124,138,152,166],
    [13,27,41,55,69], [27,41,55,69,83], [41,55,69,83,97], [55,69,83,97,111], [69,83,97,111,125], [83,97,111,125,139], [97,111,125,139,153], [111,125,139,153,167],
    [0,14,28,42,56], [14,28,42,56,70], [28,42,56,70,84], [42,56,70,84,98], [56,70,84,98,112], [70,84,98,112,126], [84,98,112,126,140], [98,112,126,140,154], [112,126,140,154,168],
    [1,15,29,43,57], [15,29,43,57,71], [29,43,57,71,85], [43,57,71,85,99], [57,71,85,99,113], [71,85,99,113,127], [85,99,113,127,141], [99,113,127,141,155],
    [2,16,30,44,58], [16,30,44,58,72], [30,44,58,72,86], [44,58,72,86,100], [58,72,86,100,114], [72,86,100,114,128], [86,100,114,128,142],
    [3,17,31,45,59], [17,31,45,59,73], [31,45,59,73,87], [45,59,73,87,101], [59,73,87,101,115], [73,87,101,115,129],
    [4,18,32,46,60], [18,32,46,60,74], [32,46,60,74,88], [46,60,74,88,102], [60,74,88,102,116],
    [5,19,33,47,61], [19,33,47,61,75], [33,47,61,75,89], [47,61,75,89,103],
    [6,20,34,48,62], [20,34,48,62,76], [34,48,62,76,90],
    [7,21,35,49,63], [21,35,49,63,77], 
    [8,22,36,50,64],
    //diags /
    [4,16,28,40,52],
    [5,17,29,41,53], [17,29,41,53,65], 
    [6,18,30,42,54], [18,30,42,54,66], [30,42,54,66,78],
    [7,19,31,43,55], [19,31,43,55,67], [31,43,55,67,79], [43,55,67,79,91], 
    [8,20,32,44,56], [20,32,44,56,68], [32,44,56,68,80], [44,56,68,80,92], [56,68,80,92,104], 
    [9,21,33,45,57], [21,33,45,57,69], [33,45,57,69,81], [45,57,69,81,93], [57,69,81,93,105], [69,81,93,105,117],
    [10,22,34,46,58], [22,34,46,58,70], [34,46,58,70,82], [46,58,70,82,94], [58,70,82,94,106], [70,82,94,106,118], [82,94,106,118,130],
    [11,23,35,47,59], [23,35,47,59,71], [35,47,59,71,83], [47,59,71,83,95], [59,71,83,95,107], [71,83,95,107,119], [83,95,107,119,131], [95,107,119,131,143],
    [12,24,36,48,60], [24,36,48,60,72], [36,48,60,72,84], [48,60,72,84,96], [60,72,84,96,108], [72,84,96,108,120], [84,96,108,120,132], [96,108,120,132,144], [108,120,132,144,156],
    [25,37,49,61,73], [37,49,61,73,85], [49,61,73,85,97], [61,73,85,97,109], [73,85,97,109,121], [85,97,109,121,133], [97,109,121,133,145], [109,121,133,145,157],
    [38,50,62,74,86], [50,62,74,86,98], [62,74,86,98,110], [74,86,98,110,122], [86,98,110,122,134], [98,110,122,134,146], [110,122,134,146,158],
    [51,63,75,87,99], [63,75,87,99,111], [75,87,99,111,123], [87,99,111,123,135], [99,111,123,135,147], [111,123,135,147,159],
    [64,76,88,100,112], [76,88,100,112,124], [88,100,112,124,136], [100,112,124,136,148], [112,124,136,148,160],
    [77,89,101,113,125], [89,101,113,125,137], [101,113,125,137,149], [113,125,137,149,161],
    [90,102,114,126,138], [102,114,126,138,150], [114,126,138,150,162],
    [103,115,127,139,151], [115,127,139,151,163], 
    [116,128,140,152,164],
];



$(document).ready(function(){
    $("img").click(function(){
        $(this).attr("src", "./Grid/Black.png");
    });    
});