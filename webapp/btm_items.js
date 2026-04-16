window.BTM_ITEMS = [
  // OPERATIONS 1-10
  {
    id:"68-op-1",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-addition",
    inattention:false,
    prompt:"A student adds fractions and gets 1/4 + 1/2 = 2/6.",
    work:"Student work: 1/4 + 1/2 = 2/6",
    options:[
      "They added numerators and denominators straight across. Use a common denominator: 1/4 + 2/4 = 3/4.",
      "They multiplied instead of adding.",
      "They subtracted one fraction from the other.",
      "They simplified using the wrong numbers."
    ],
    correctIndex:0,
    hint:"Rewrite both fractions with the same denominator.",
    insight:"Misconception: add across. Principle: fraction addition needs common units. Correct: 3/4."
  },
  {
    id:"68-op-2",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"distribution",
    inattention:false,
    prompt:"A student simplifies 3(x - 4) as 3x - 4.",
    work:"Student work: 3(x - 4) = 3x - 4",
    options:[
      "They forgot to distribute 3 to both terms. Correct: 3(x - 4) = 3x - 12.",
      "They should add 3 and 4 first.",
      "They multiplied x by 4 incorrectly.",
      "They should divide everything by 3."
    ],
    correctIndex:0,
    hint:"Distribute the outside factor to every term inside the parentheses.",
    insight:"Misconception: distribute to one term only. Principle: multiply every term in the group. Correct: 3x - 12."
  },
  {
    id:"68-op-3",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"integer-sign",
    inattention:false,
    prompt:"A student computes -3 + 8 = -11.",
    work:"Student work: -3 + 8 = -11",
    options:[
      "They handled unlike-sign addition incorrectly. Subtract absolute values and keep the sign of the larger number: -3 + 8 = 5.",
      "They multiplied -3 and 8.",
      "They forgot that every negative makes the answer negative.",
      "They should have written 11 because negatives disappear when adding."
    ],
    correctIndex:0,
    hint:"Compare the sizes of 8 and 3, then keep the sign of the larger value.",
    insight:"Misconception: any negative makes the answer negative. Principle: for unlike signs, subtract and keep the larger sign. Correct: 5."
  },
  {
    id:"68-op-4",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"combine-like-terms",
    inattention:false,
    prompt:"A student combines like terms and gets 2x + 5x^2 = 7x^3.",
    work:"Student work: 2x + 5x^2 = 7x^3",
    options:[
      "They combined unlike terms. 2x and 5x^2 are not like terms, so the expression stays 2x + 5x^2.",
      "They forgot to add the coefficients correctly.",
      "They should always multiply x terms together.",
      "They should divide by x first."
    ],
    correctIndex:0,
    hint:"Like terms must have the same variable part and the same exponent.",
    insight:"Misconception: all x-terms can combine. Principle: only like terms combine. Correct: 2x + 5x^2 stays as written."
  },
  {
    id:"68-op-5",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"order-of-operations",
    inattention:false,
    prompt:"A student evaluates 6 + 2 × 5 as 40.",
    work:"Student work: 6 + 2 × 5 = 40",
    options:[
      "They added first instead of multiplying first. Correct: 2 × 5 = 10, then 6 + 10 = 16.",
      "They should subtract before multiplying.",
      "They forgot to square the 5.",
      "They should divide 6 by 2 first."
    ],
    correctIndex:0,
    hint:"Multiplication comes before addition unless parentheses change the order.",
    insight:"Misconception: always work left to right. Principle: use order of operations. Correct: 16."
  },
  {
    id:"68-op-6",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"decimal-subtraction",
    inattention:false,
    prompt:"A student subtracts decimals and gets 3.6 - 0.8 = 3.2.",
    work:"Student work: 3.6 - 0.8 = 3.2",
    options:[
      "They did not track tenths correctly. Think in tenths: 36 tenths - 8 tenths = 28 tenths, so 2.8.",
      "They should add the decimals instead.",
      "They should move the decimal point two places.",
      "They should multiply 3.6 by 0.8."
    ],
    correctIndex:0,
    hint:"Align place values and think in tenths.",
    insight:"Misconception: decimal subtraction without place-value thinking. Principle: align place values. Correct: 2.8."
  },
  {
    id:"68-op-7",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-subtraction",
    inattention:false,
    prompt:"A student subtracts fractions and gets 5/6 - 1/3 = 4/9.",
    work:"Student work: 5/6 - 1/3 = 4/9",
    options:[
      "They subtracted across. Use a common denominator: 1/3 = 2/6, so 5/6 - 2/6 = 3/6 = 1/2.",
      "They should multiply the fractions instead.",
      "They should turn both fractions into decimals and stop there.",
      "They should add the denominators because subtraction changes the bottom numbers."
    ],
    correctIndex:0,
    hint:"Fractions must represent the same-sized pieces before subtracting.",
    insight:"Misconception: subtract across. Principle: use a common denominator. Correct: 1/2."
  },
  {
    id:"68-op-8",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"integer-sign",
    inattention:false,
    prompt:"A student computes 7 - (-2) = 5.",
    work:"Student work: 7 - (-2) = 5",
    options:[
      "They treated subtracting a negative like subtracting a positive. Subtracting a negative means add: 7 + 2 = 9.",
      "They should multiply 7 by -2.",
      "They should keep both negative signs.",
      "They should divide 7 by 2."
    ],
    correctIndex:0,
    hint:"Subtracting a negative is the same as adding the opposite.",
    insight:"Misconception: ignore the effect of subtracting a negative. Principle: minus a negative becomes plus. Correct: 9."
  },
  {
    id:"68-op-9",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent",
    inattention:false,
    prompt:"A student says 25% of 80 is 320.",
    work:"Student work: 25% of 80 = 320",
    options:[
      "They multiplied by 25 instead of 0.25. Since 25% = 1/4, one-fourth of 80 is 20.",
      "They should divide 80 by 25 and stop.",
      "They should add 25 and 80.",
      "They should subtract 25 from 80."
    ],
    correctIndex:0,
    hint:"Convert 25% to a decimal or fraction before finding the part.",
    insight:"Misconception: treat percent like a whole number. Principle: 25% means 0.25 or 1/4. Correct: 20."
  },
  {
    id:"68-op-10",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-multiplication",
    inattention:false,
    prompt:"A student multiplies decimals and gets 1.2 × 0.3 = 3.6.",
    work:"Student work: 1.2 × 0.3 = 3.6",
    options:[
      "They ignored decimal size. 12 × 3 = 36, then place two decimal digits total: 0.36.",
      "They should add the decimals instead.",
      "They should divide 1.2 by 0.3.",
      "They should move the decimal to get 36."
    ],
    correctIndex:0,
    hint:"Estimate first: 1.2 times 0.3 should be less than 1.",
    insight:"Misconception: multiply digits and ignore place value. Principle: decimal products must fit the size estimate. Correct: 0.36."
  },  {
    id:"68-op-11",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"combine-like-terms",
    inattention:false,
    prompt:"A student simplifies 4x - 7 + 2x as 6x.",
    work:"Student work: 4x - 7 + 2x = 6x",
    options:[
      "They combined the x-terms but dropped the constant. Correct: 4x + 2x = 6x, so the expression is 6x - 7.",
      "They should multiply 4x and 2x first.",
      "They should turn 7 into 7x.",
      "They should divide all terms by x."
    ],
    correctIndex:0,
    hint:"Combine like terms, but keep unlike terms that remain.",
    insight:"Misconception: leftovers disappear after combining. Principle: keep terms that are not combined. Correct: 6x - 7."
  },
  {
    id:"68-op-12",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"exponents",
    inattention:false,
    prompt:"A student says 3^2 + 4^2 = 7^4.",
    work:"Student work: 3^2 + 4^2 = 7^4",
    options:[
      "They combined powers incorrectly. Compute each square first: 3^2 = 9 and 4^2 = 16, so the sum is 25.",
      "They should multiply the exponents together.",
      "They should change the problem to 3^6.",
      "They should write 7^2."
    ],
    correctIndex:0,
    hint:"An exponent applies only to its own base.",
    insight:"Misconception: exponents transfer across addition. Principle: evaluate each power separately first. Correct: 25."
  },
  {
    id:"68-op-13",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-division",
    inattention:false,
    prompt:"A student divides fractions and gets 3/4 ÷ 1/2 = 3/8.",
    work:"Student work: 3/4 ÷ 1/2 = 3/8",
    options:[
      "They divided straight across. To divide fractions, multiply by the reciprocal: 3/4 × 2/1 = 6/4 = 3/2.",
      "They should add the numerators and denominators.",
      "They should keep the answer smaller because division always makes numbers smaller.",
      "They should subtract 1/2 from 3/4."
    ],
    correctIndex:0,
    hint:"Division by a fraction asks how many halves fit into three-fourths.",
    insight:"Misconception: divide fractions across like whole numbers. Principle: multiply by the reciprocal. Correct: 3/2."
  },
  {
    id:"68-op-14",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"order-of-operations",
    inattention:false,
    prompt:"A student evaluates (2 + 3)^2 as 13.",
    work:"Student work: (2 + 3)^2 = 13",
    options:[
      "They squared only part of the expression mentally. Add inside the parentheses first: 2 + 3 = 5, then 5^2 = 25.",
      "They should multiply 2 and 3 before adding.",
      "They should divide 5 by 2.",
      "They should square the 2 and ignore the 3."
    ],
    correctIndex:0,
    hint:"Parentheses come first, then exponents.",
    insight:"Misconception: partial use of parentheses and exponents. Principle: complete the parentheses first. Correct: 25."
  },
  {
    id:"68-op-15",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"place-value",
    inattention:false,
    prompt:"A student says 4.7 × 10 = 4.70.",
    work:"Student work: 4.7 × 10 = 4.70",
    options:[
      "They kept the value the same instead of making it ten times larger. Multiplying by 10 gives 47.",
      "They should divide by 10 instead.",
      "They should remove the decimal point forever.",
      "They should multiply 4 by 7 and write 28."
    ],
    correctIndex:0,
    hint:"Ten times as large should be much bigger than 4.7.",
    insight:"Misconception: adding a zero changes notation but not value. Principle: multiplying by 10 increases place value. Correct: 47."
  },
  {
    id:"68-op-16",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"area",
    inattention:false,
    prompt:"A student finds the area of a rectangle with side lengths 5 and 8 and gets 13 square units.",
    work:"Student work: Area = 5 + 8 = 13 square units",
    options:[
      "They found perimeter thinking instead of area. Area of a rectangle is length × width: 5 × 8 = 40 square units.",
      "They should divide 8 by 5.",
      "They should square both numbers separately and add.",
      "They should write 26 because rectangles have two pairs of sides."
    ],
    correctIndex:0,
    hint:"Area counts the number of square units covering the surface.",
    insight:"Misconception: use addition for area. Principle: rectangle area is length times width. Correct: 40."
  },
  {
    id:"68-op-17",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"mean",
    inattention:false,
    prompt:"A student says the mean of 4, 6, and 8 is 18.",
    work:"Student work: Mean of 4, 6, 8 = 18",
    options:[
      "They found the sum but forgot to divide by the number of values. The mean is (4 + 6 + 8) ÷ 3 = 6.",
      "They should multiply 4, 6, and 8 together.",
      "They should use the largest number only.",
      "They should divide 18 by 2 because there are two gaps."
    ],
    correctIndex:0,
    hint:"Mean means total divided equally among all data values.",
    insight:"Misconception: the mean is just the sum. Principle: divide the total by how many values there are. Correct: 6."
  },
  {
    id:"68-op-18",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"unit-rate",
    inattention:false,
    prompt:"A student says 12 miles in 3 hours means a speed of 36 miles per hour.",
    work:"Student work: 12 miles / 3 hours = 36 mph",
    options:[
      "They multiplied instead of dividing. Unit rate means per 1 hour: 12 ÷ 3 = 4 miles per hour.",
      "They should subtract 3 from 12 and get 9.",
      "They should add the miles and hours together.",
      "They should change the hours to minutes first and stop."
    ],
    correctIndex:0,
    hint:"To find per 1, divide total amount by number of groups.",
    insight:"Misconception: unit rate uses multiplication. Principle: divide by the number of hours. Correct: 4 mph."
  },
  {
    id:"68-op-19",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-multiplication",
    inattention:false,
    prompt:"A student multiplies fractions and gets 2/3 × 3/5 = 5/8.",
    work:"Student work: 2/3 × 3/5 = 5/8",
    options:[
      "They likely used the wrong rule. Multiply numerators and denominators: (2 × 3)/(3 × 5) = 6/15 = 2/5.",
      "They should subtract the fractions instead.",
      "They should keep the denominator 8 because the answer feels close.",
      "They should turn the fractions into mixed numbers first."
    ],
    correctIndex:0,
    hint:"For multiplication, multiply the tops and multiply the bottoms.",
    insight:"Misconception: combine fractions with the wrong operation rule. Principle: multiply numerators and denominators. Correct: 2/5."
  },
  {
    id:"68-op-20",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-increase",
    inattention:false,
    prompt:"A student says increasing 50 by 10% gives 60.",
    work:"Student work: 50 increased by 10% = 60",
    options:[
      "They added 10 instead of 10% of 50. Since 10% of 50 is 5, the new amount is 55.",
      "They should subtract 10 because percent means smaller.",
      "They should divide 50 by 10.",
      "They should multiply 50 by 100."
    ],
    correctIndex:0,
    hint:"Find the percent of the original amount first, then add it.",
    insight:"Misconception: percent increase means add the percent number itself. Principle: compute the percent of the original. Correct: 55."
  },

  // REASONING 1-10
  {
    id:"68-reason-1",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"proportion",
    inattention:false,
    prompt:"A student solves 3/5 = x/20 and gets x = 25.",
    work:"Student work: 3/5 = x/20, so x = 25",
    options:[
      "They did not preserve equivalent ratios. Use cross multiplication: 5x = 60, so x = 12.",
      "They should subtract 5 from 20 first.",
      "They should divide 20 by 5 and stop.",
      "They should add all visible numbers together."
    ],
    correctIndex:0,
    hint:"Equivalent ratios must keep the same multiplicative relationship.",
    insight:"Misconception: treat proportion numbers loosely. Principle: preserve equal ratios. Correct: x = 12."
  },
  {
    id:"68-reason-2",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equation-solving",
    inattention:false,
    prompt:"A student solves 5x - 7 = 18 and gets x = 25.",
    work:"Student work: 5x - 7 = 18, so x = 25",
    options:[
      "They added 7 correctly but forgot to divide by 5. Since 5x = 25, x = 5.",
      "They should subtract 7 again.",
      "They should move x to the other side.",
      "They should multiply 18 by 5 first."
    ],
    correctIndex:0,
    hint:"Undo operations in reverse order until x is by itself.",
    insight:"Misconception: stop before isolating x. Principle: finish the inverse operations. Correct: x = 5."
  },
  {
    id:"68-reason-3",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equation-solving",
    inattention:false,
    prompt:"A student solves 2(x + 3) = 14 and gets x = 11.",
    work:"Student work: 2(x + 3) = 14, so x = 11",
    options:[
      "They may have divided by 2 but forgot to subtract 3. First x + 3 = 7, then x = 4.",
      "They should add 3 to 14 and stop.",
      "They should multiply 14 by 2.",
      "They should make x equal 7 because 14 ÷ 2 = 7 is always the answer."
    ],
    correctIndex:0,
    hint:"After dividing by 2, there is still a +3 attached to x.",
    insight:"Misconception: solving stops too early. Principle: isolate x completely after undoing grouping. Correct: x = 4."
  },
  {
    id:"68-reason-4",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equation-solving",
    inattention:false,
    prompt:"A student solves 4(x - 2) = 20 and gets x = 5.",
    work:"Student work: 4(x - 2) = 20, so x = 5",
    options:[
      "They divided by 4 but forgot to undo the -2. Since x - 2 = 5, x = 7.",
      "They should multiply 5 by 4 again.",
      "They should subtract 2 from 20 first and divide later.",
      "They should always keep the number inside parentheses."
    ],
    correctIndex:0,
    hint:"After removing the 4, check what still remains attached to x.",
    insight:"Misconception: divide once and stop. Principle: keep undoing operations until x is alone. Correct: x = 7."
  },
  {
    id:"68-reason-5",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"ratio",
    inattention:false,
    prompt:"A student says that if the ratio of red to blue marbles is 2:3, then with 12 blue marbles there must be 18 red marbles.",
    work:"Student work: 2 red : 3 blue, 12 blue means 18 red",
    options:[
      "They scaled the wrong part. If blue goes from 3 to 12, that is ×4, so red goes from 2 to 8.",
      "They should add 2 and 3 first and get 5.",
      "They should subtract 3 from 12.",
      "They should always make the larger count even larger."
    ],
    correctIndex:0,
    hint:"Both parts of a ratio must be scaled by the same factor.",
    insight:"Misconception: scale only one side correctly. Principle: equal ratios use the same multiplier for each part. Correct: 8 red."
  },
  {
    id:"68-reason-6",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"percent",
    inattention:false,
    prompt:"A student says that 30% off a $50 item means the final price is $20.",
    work:"Student work: $50 with 30% off = $20",
    options:[
      "They subtracted 30 instead of 30% of 50. Since 30% of 50 is 15, the sale price is $35.",
      "They should add 30 to 50.",
      "They should divide 50 by 30 and stop.",
      "They should always make discounts cut prices in half."
    ],
    correctIndex:0,
    hint:"Find the discount amount first, then subtract it from the original price.",
    insight:"Misconception: percent discount means subtract the percent number. Principle: percent is part of the original amount. Correct: $35."
  },
  {
    id:"68-reason-7",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"area",
    inattention:false,
    prompt:"A student says a square with side length 6 has an area of 24 square units.",
    work:"Student work: Square side 6, area = 24",
    options:[
      "They likely used perimeter reasoning. Area of a square is side × side, so 6 × 6 = 36 square units.",
      "They should double 6 and stop.",
      "They should divide 24 by 6.",
      "They should write 12 because squares have four sides."
    ],
    correctIndex:0,
    hint:"Area counts square units covering the inside, not distance around the outside.",
    insight:"Misconception: confuse area and perimeter. Principle: square area is side squared. Correct: 36."
  },
  {
    id:"68-reason-8",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equation-solving",
    inattention:false,
    prompt:"A student solves x/4 + 3 = 8 and gets x = 5.",
    work:"Student work: x/4 + 3 = 8, so x = 5",
    options:[
      "They subtracted 3 but forgot x was still divided by 4. Since x/4 = 5, multiply by 4 to get x = 20.",
      "They should divide 8 by 4 immediately.",
      "They should add 3 again.",
      "They should turn x/4 into x - 4."
    ],
    correctIndex:0,
    hint:"After subtracting 3, ask what operation is still attached to x.",
    insight:"Misconception: stop after the first inverse step. Principle: finish isolating x. Correct: x = 20."
  },
  {
    id:"68-reason-9",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"unit-conversion",
    inattention:false,
    prompt:"A student says 1.5 hours is 150 minutes.",
    work:"Student work: 1.5 hours = 150 minutes",
    options:[
      "They treated 1.5 like 150 instead of one and a half hours. Since 1 hour = 60 minutes, 1.5 hours = 90 minutes.",
      "They should divide 1.5 by 60.",
      "They should round 1.5 to 2 hours.",
      "They should convert minutes to seconds first."
    ],
    correctIndex:0,
    hint:"A half hour is 30 minutes, not 50 minutes.",
    insight:"Misconception: decimal time interpreted loosely. Principle: use the unit relationship 1 hour = 60 minutes. Correct: 90."
  },
  {
    id:"68-reason-10",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"unit-rate",
    inattention:false,
    prompt:"A student says if 5 notebooks cost $15, then 8 notebooks cost $40.",
    work:"Student work: 5 notebooks = $15, so 8 notebooks = $40",
    options:[
      "They did not use a constant rate. First find the unit price: $15 ÷ 5 = $3 per notebook, then 8 × $3 = $24.",
      "They should add 5 and 15 and then multiply.",
      "They should divide 8 by 5 and stop.",
      "They should always round to the nearest ten dollars."
    ],
    correctIndex:0,
    hint:"Find the cost for 1 notebook first.",
    insight:"Misconception: scale without a constant rate. Principle: use unit price or equivalent ratios. Correct: $24."
  },  {
    id:"68-reason-11",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"slope",
    inattention:false,
    prompt:"A student finds the slope from (2, 3) to (5, 9) and gets 11/7.",
    work:"Student work: slope = (2 + 5) / (3 + 9) = 11/7",
    options:[
      "They added coordinates instead of using change in y over change in x. Slope = (9 - 3) / (5 - 2) = 6/3 = 2.",
      "They should divide x by y for each point and average.",
      "They should add the x-values only.",
      "They should always subtract larger from smaller."
    ],
    correctIndex:0,
    hint:"Slope compares how much y changes for each change in x.",
    insight:"Misconception: slope uses raw coordinate totals. Principle: slope is rise over run. Correct: 2."
  },
  {
    id:"68-reason-12",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equation-solving",
    inattention:false,
    prompt:"A student solves 3x + 2 = 2x + 9 and gets x = 11.",
    work:"Student work: 3x + 2 = 2x + 9, so x = 11",
    options:[
      "They combined numbers without balancing correctly. Subtract 2x from both sides to get x + 2 = 9, then x = 7.",
      "They should add 3x and 2x together.",
      "They should divide both sides by 11.",
      "They should move all numbers to one side and stop."
    ],
    correctIndex:0,
    hint:"Keep both sides balanced as you remove terms.",
    insight:"Misconception: combine across the equals sign carelessly. Principle: use equal operations on both sides. Correct: x = 7."
  },
  {
    id:"68-reason-13",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"circumference",
    inattention:false,
    prompt:"A student says a circle with radius 10 has circumference 10π.",
    work:"Student work: radius 10, circumference = 10π",
    options:[
      "They used the radius instead of the full formula. Circumference is 2πr, so with r = 10 the circumference is 20π.",
      "They should square the radius first.",
      "They should divide π by 10.",
      "They should add 10 and π."
    ],
    correctIndex:0,
    hint:"Circumference uses the full distance around the circle.",
    insight:"Misconception: confuse radius and circumference formula. Principle: C = 2πr. Correct: 20π."
  },
  {
    id:"68-reason-14",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"volume",
    inattention:false,
    prompt:"A student says the volume of a rectangular prism with dimensions 2, 3, and 4 is 9 cubic units.",
    work:"Student work: Volume = 2 + 3 + 4 = 9",
    options:[
      "They added dimensions instead of multiplying them. Volume = 2 × 3 × 4 = 24 cubic units.",
      "They should square the 4 and stop.",
      "They should use perimeter first.",
      "They should divide by the number of sides."
    ],
    correctIndex:0,
    hint:"Volume counts how many unit cubes fill the solid.",
    insight:"Misconception: use addition for 3D measurement. Principle: rectangular prism volume is length × width × height. Correct: 24."
  },
  {
    id:"68-reason-15",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"probability",
    inattention:false,
    prompt:"A student says the probability of rolling an even number on a fair six-sided die is 1/6.",
    work:"Student work: P(even) = 1/6",
    options:[
      "They counted only one favorable outcome. The even outcomes are 2, 4, and 6, so the probability is 3/6 = 1/2.",
      "They should use 6/6 because all outcomes are possible.",
      "They should write 2/6 because 2 is even.",
      "They should subtract odd from even."
    ],
    correctIndex:0,
    hint:"Count all favorable outcomes, then compare to the total equally likely outcomes.",
    insight:"Misconception: probability uses one example instead of all favorable outcomes. Principle: count all favorable outcomes. Correct: 1/2."
  },
  {
    id:"68-reason-16",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"percent-change",
    inattention:false,
    prompt:"A student says increasing from 80 to 100 is a 20% increase.",
    work:"Student work: 80 to 100 means 20% increase",
    options:[
      "They used the increase amount as the percent. Percent increase is increase divided by original: 20 ÷ 80 = 25%.",
      "They should divide 100 by 20 and get 5%.",
      "They should subtract 20 from 80 and write 60%.",
      "They should always compare to the new amount."
    ],
    correctIndex:0,
    hint:"Percent change compares the change to the original amount.",
    insight:"Misconception: the change number itself is the percent. Principle: divide the change by the original. Correct: 25%."
  },
  {
    id:"68-reason-17",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"scale-factor",
    inattention:false,
    prompt:"A student says if a rectangle’s length and width both double, its area only doubles.",
    work:"Student work: double both sides means double the area",
    options:[
      "They tracked one dimension but not both. If both dimensions double, area is multiplied by 2 × 2 = 4, so the area quadruples.",
      "They should add 2 and 2 and say the area increases by 4 square units.",
      "They should always keep the area the same.",
      "They should divide the new area by 2."
    ],
    correctIndex:0,
    hint:"Area depends on both dimensions together.",
    insight:"Misconception: scaling one dimension explains the whole area change. Principle: area changes by the product of the scale factors. Correct: quadruples."
  },
  {
    id:"68-reason-18",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"inequality",
    inattention:false,
    prompt:"A student solves 2x + 3 < 11 and gets x < 7.",
    work:"Student work: 2x + 3 < 11, so x < 7",
    options:[
      "They subtracted 3 but forgot to divide by 2. Since 2x < 8, dividing by 2 gives x < 4.",
      "They should always flip the sign when dividing.",
      "They should add 11 and 3 first.",
      "They should ignore the 2 because inequalities are approximate."
    ],
    correctIndex:0,
    hint:"Solve inequalities like equations unless you multiply or divide by a negative.",
    insight:"Misconception: stop halfway in inequality solving. Principle: isolate x completely. Correct: x < 4."
  },
  {
    id:"68-reason-19",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"part-whole",
    inattention:false,
    prompt:"A student says that in a class with 12 boys and 18 girls, the fraction of students who are boys is 12/18 = 2/3.",
    work:"Student work: boys fraction = 12/18 = 2/3",
    options:[
      "They compared boys to girls instead of boys to the whole class. The whole class is 30 students, so the fraction is 12/30 = 2/5.",
      "They should add 12 and 18 and keep 12/18 anyway.",
      "They should always simplify the larger number first.",
      "They should write 3/2 because girls are more."
    ],
    correctIndex:0,
    hint:"Part-to-whole uses the whole group in the denominator.",
    insight:"Misconception: use part-to-part when asked for part-to-whole. Principle: denominator should be the whole set. Correct: 2/5."
  },
  {
    id:"68-reason-20",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"proportion",
    inattention:false,
    prompt:"A student says that if a recipe uses 3 cups of flour for 2 batches, then 5 batches need 6 cups of flour.",
    work:"Student work: 3 cups for 2 batches, so 5 batches need 6 cups",
    options:[
      "They scaled by a convenient factor instead of the correct one. The rate is 3/2 cups per batch, so for 5 batches: (3/2) × 5 = 7.5 cups.",
      "They should always round down to 6 cups.",
      "They should add 3 and 5 and get 8 cups.",
      "They should divide 5 by 2 and ignore the flour amount."
    ],
    correctIndex:0,
    hint:"Find the amount per batch or use an equivalent ratio.",
    insight:"Misconception: preserve a rough idea instead of the exact ratio. Principle: keep the same multiplicative relationship. Correct: 7.5 cups."
  },

  // LOGIC 1-10
  {
    id:"68-logic-1",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 2, 4, 8, 16 is 20.",
    work:"Student work: 2, 4, 8, 16, 20",
    options:[
      "They changed the rule mid-pattern. The terms double each time, so the next term is 32.",
      "They should add 2 each time and get 18.",
      "They should subtract 4 and get 12.",
      "They should square 16 and get 256."
    ],
    correctIndex:0,
    hint:"Look for one rule that works every time.",
    insight:"Misconception: switch rules mid-pattern. Principle: keep the same rule unless the pattern shows a change. Correct: 32."
  },
  {
    id:"68-logic-2",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 10, 7, 4, 1 is -1.",
    work:"Student work: 10, 7, 4, 1, -1",
    options:[
      "They drifted away from the constant change. The pattern subtracts 3 each time, so the next term is -2.",
      "They should add 1 and get 2.",
      "They should subtract 1 and get 0.",
      "They should double 1 and get 2."
    ],
    correctIndex:0,
    hint:"Compare each pair of consecutive terms.",
    insight:"Misconception: the repeated difference changed. Principle: preserve the same step. Correct: -2."
  },
  {
    id:"68-logic-3",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 1, 4, 9, 16 is 20.",
    work:"Student work: 1, 4, 9, 16, 20",
    options:[
      "They noticed increase but missed the square-number pattern. These are 1^2, 2^2, 3^2, 4^2, so the next term is 25.",
      "They should add 3 every time and get 19.",
      "They should double 16 and get 32.",
      "They should subtract 4 and get 12."
    ],
    correctIndex:0,
    hint:"Ask whether the terms are tied to a meaningful number pattern, not just a single difference.",
    insight:"Misconception: force a simple difference rule onto square numbers. Principle: identify the generating pattern. Correct: 25."
  },
  {
    id:"68-logic-4",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 3, 6, 9, 12 is 14.",
    work:"Student work: 3, 6, 9, 12, 14",
    options:[
      "They broke the add-3 rule. The sequence increases by 3 each time, so the next term is 15.",
      "They should subtract 1 and get 11.",
      "They should double 12 and get 24.",
      "They should square 12."
    ],
    correctIndex:0,
    hint:"Check the difference between each pair of terms.",
    insight:"Misconception: use a new difference at the end. Principle: keep the repeated change consistent. Correct: 15."
  },
  {
    id:"68-logic-5",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 5, 10, 20, 40 is 45.",
    work:"Student work: 5, 10, 20, 40, 45",
    options:[
      "They switched from doubling to adding. The pattern doubles each time, so the next term is 80.",
      "They should add 10 and get 50.",
      "They should subtract 5 and get 35.",
      "They should divide 40 by 2 and get 20."
    ],
    correctIndex:0,
    hint:"Look for a multiplicative rule, not just an additive one.",
    insight:"Misconception: replace a multiplication pattern with addition. Principle: preserve the original rule. Correct: 80."
  },
  {
    id:"68-logic-6",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 1, 1, 2, 3, 5, 8 is 11.",
    work:"Student work: 1, 1, 2, 3, 5, 8, 11",
    options:[
      "They used a simple difference rule, but this pattern adds the two previous terms. Since 5 + 8 = 13, the next term is 13.",
      "They should double 8 and get 16.",
      "They should add 3 and get 11 because the last jump was 3.",
      "They should square 8."
    ],
    correctIndex:0,
    hint:"See whether each new term depends on the earlier terms.",
    insight:"Misconception: ignore how the sequence is generated. Principle: some patterns depend on previous terms together. Correct: 13."
  },
  {
    id:"68-logic-7",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"shape-pattern",
    inattention:false,
    prompt:"A student says that if a shape pattern goes triangle, square, pentagon, the next shape should have 8 sides.",
    work:"Student work: triangle (3), square (4), pentagon (5), next should be 8 sides",
    options:[
      "They skipped the next count. The shapes increase by one side each time, so after 5 sides comes 6 sides: a hexagon.",
      "They should jump straight to 10 sides.",
      "They should keep using 5 sides forever.",
      "They should go back to 4 sides."
    ],
    correctIndex:0,
    hint:"Track the number of sides in order: 3, 4, 5, ...",
    insight:"Misconception: jump too far ahead in a simple count pattern. Principle: follow the next number in sequence. Correct: hexagon."
  },
  {
    id:"68-logic-8",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"divisibility",
    inattention:false,
    prompt:"A student says any number ending in 5 is divisible by 10.",
    work:"Student work: numbers ending in 5 are divisible by 10",
    options:[
      "They confused the divisibility rules for 5 and 10. Numbers ending in 5 are divisible by 5; numbers divisible by 10 must end in 0.",
      "They should test only odd numbers.",
      "They should divide every number by 2 first.",
      "They should say all numbers ending in 5 are prime."
    ],
    correctIndex:0,
    hint:"Compare examples like 25 and 30.",
    insight:"Misconception: mix up divisibility rules. Principle: divisible by 10 means the number ends in 0. Ending in 5 shows divisibility by 5."
  },
  {
    id:"68-logic-9",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"A student says, 'All multiples of 4 are even, so all even numbers must be multiples of 4.'",
    work:"Student work: if all multiples of 4 are even, then all evens are multiples of 4",
    options:[
      "They reversed the statement incorrectly. A counterexample is 6: it is even, but it is not a multiple of 4.",
      "They should say all odd numbers are multiples of 4.",
      "They should multiply 4 and 2 to prove it.",
      "They should decide by checking only 8 and 12."
    ],
    correctIndex:0,
    hint:"One true direction does not always make the reverse direction true.",
    insight:"Misconception: reverse statements stay true automatically. Principle: use a counterexample to test the reverse. Correct counterexample: 6."
  },
  {
    id:"68-logic-10",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"alternating-pattern",
    inattention:false,
    prompt:"A student says the next term after 2, 5, 3, 6, 4, 7 is 8.",
    work:"Student work: 2, 5, 3, 6, 4, 7, 8",
    options:[
      "They missed the alternating pattern. One subsequence is 2, 3, 4, so the next is 5; the other is 5, 6, 7. The next term is 5.",
      "They should double 7 and get 14.",
      "They should always add 1 and get 8.",
      "They should subtract 3 and get 4."
    ],
    correctIndex:0,
    hint:"Sometimes two simpler patterns are interwoven.",
    insight:"Misconception: force one simple rule onto an alternating sequence. Principle: look for paired or alternating patterns. Correct: 5."
  },  {
    id:"68-logic-11",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"A student says, '12 is even and composite, so all even numbers are composite.'",
    work:"Student work: all even numbers are composite",
    options:[
      "They generalized from one example. A counterexample is 2, which is even but prime, not composite.",
      "They should check only bigger even numbers.",
      "They should divide 12 by every even number.",
      "They should say all odd numbers are prime."
    ],
    correctIndex:0,
    hint:"One counterexample is enough to disprove an all-statement.",
    insight:"Misconception: one example proves a universal rule. Principle: use counterexamples to test 'all' statements. Correct counterexample: 2."
  },
  {
    id:"68-logic-12",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"geometry-logic",
    inattention:false,
    prompt:"A student says, 'If two shapes have the same perimeter, then they must have the same area.'",
    work:"Student work: same perimeter means same area",
    options:[
      "They assumed one measurement determines another. Different shapes can share a perimeter but have different areas.",
      "They should add the perimeters together.",
      "They should divide by the number of sides.",
      "They should check only squares."
    ],
    correctIndex:0,
    hint:"Try imagining a long skinny rectangle and a more square rectangle with the same perimeter.",
    insight:"Misconception: same perimeter forces same area. Principle: one measurement does not always determine another. Counterexamples exist."
  },
  {
    id:"68-logic-13",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"classification",
    inattention:false,
    prompt:"A student says 0 is positive because it is not negative.",
    work:"Student work: 0 is positive",
    options:[
      "They treated 0 as if it had to be one or the other. Zero is neither positive nor negative.",
      "They should say 0 is always negative in equations.",
      "They should turn 0 into 1.",
      "They should multiply 0 by -1 to decide."
    ],
    correctIndex:0,
    hint:"Think about the position of 0 on the number line.",
    insight:"Misconception: every number must be positive or negative. Principle: 0 is its own special case. Correct: neither positive nor negative."
  },
  {
    id:"68-logic-14",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"comparison",
    inattention:false,
    prompt:"A student says 0.45 is greater than 0.8 because 45 is greater than 8.",
    work:"Student work: 0.45 > 0.8 because 45 > 8",
    options:[
      "They compared digits like whole numbers instead of comparing place values. Since 0.8 = 0.80, and 0.45 < 0.80, 0.8 is greater.",
      "They should always choose the number with more digits.",
      "They should ignore the decimal points.",
      "They should add 45 and 8 together."
    ],
    correctIndex:0,
    hint:"Rewrite 0.8 as 0.80 to compare hundredths and tenths clearly.",
    insight:"Misconception: decimals compare like whole numbers. Principle: compare place values. Correct: 0.8 is greater."
  },
  {
    id:"68-logic-15",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"classification",
    inattention:false,
    prompt:"A student says, 'All squares are rectangles, so all rectangles are squares.'",
    work:"Student work: all rectangles are squares",
    options:[
      "They reversed the classification. Squares are a special kind of rectangle, but many rectangles do not have all sides equal.",
      "They should say all triangles are squares too.",
      "They should multiply the side lengths to decide the category.",
      "They should check only one square and stop."
    ],
    correctIndex:0,
    hint:"A category can contain a smaller special case without the reverse being true.",
    insight:"Misconception: category membership works both ways. Principle: subclass does not imply reverse inclusion. Counterexample: a 2-by-5 rectangle."
  },
  {
    id:"68-logic-16",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"divisibility",
    inattention:false,
    prompt:"A student says, 'If a number is divisible by 6, then it must be divisible by 12.'",
    work:"Student work: divisible by 6 means divisible by 12",
    options:[
      "They assumed a stronger rule than the evidence supports. A counterexample is 18: it is divisible by 6 but not by 12.",
      "They should divide by 6 and 12 at the same time.",
      "They should check only 24.",
      "They should say all multiples of 12 are odd."
    ],
    correctIndex:0,
    hint:"Test a number that is a multiple of 6 but not obviously a multiple of 12.",
    insight:"Misconception: one divisibility rule automatically implies another. Principle: use counterexamples. Correct counterexample: 18."
  },
  {
    id:"68-logic-17",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 1, 3, 6, 10 is 13.",
    work:"Student work: 1, 3, 6, 10, 13",
    options:[
      "They used a constant-difference rule on a changing-difference pattern. The differences are +2, +3, +4, so next is +5: 15.",
      "They should double 10 and get 20.",
      "They should keep adding 3 and get 13.",
      "They should subtract 1 and get 9."
    ],
    correctIndex:0,
    hint:"Check the differences between terms, not just the terms themselves.",
    insight:"Misconception: use a constant-difference rule on a changing-difference pattern. Principle: track how the differences change. Correct: 15."
  },
  {
    id:"68-logic-18",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"logic-statement",
    inattention:false,
    prompt:"A student says, 'If it is a square, it has 4 sides' means any 4-sided figure is a square.",
    work:"Student work: any 4-sided figure is a square",
    options:[
      "They reversed the if-then statement. Having 4 sides is not enough to guarantee a square; a rectangle that is not a square is a counterexample.",
      "They should say all shapes with 4 sides are circles.",
      "They should count the diagonals instead of sides.",
      "They should decide by perimeter only."
    ],
    correctIndex:0,
    hint:"The original statement tells a condition squares satisfy, not a test that identifies only squares.",
    insight:"Misconception: reverse if-then logic stays true automatically. Principle: test the reverse with a counterexample."
  },
  {
    id:"68-logic-19",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 100, 50, 25, 12.5 is 7.5.",
    work:"Student work: 100, 50, 25, 12.5, 7.5",
    options:[
      "They changed the rule. Each term is half the previous term, so half of 12.5 is 6.25.",
      "They should subtract 5 and get 7.5.",
      "They should add 12.5 and get 25.",
      "They should multiply by 2 and get 25."
    ],
    correctIndex:0,
    hint:"Check whether each step uses the same multiplicative change.",
    insight:"Misconception: replace halving with subtraction. Principle: keep the same multiplicative rule. Correct: 6.25."
  },
  {
    id:"68-logic-20",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"A student says, 'If a number is greater than 10, it must be a two-digit number.'",
    work:"Student work: greater than 10 means two-digit",
    options:[
      "They forgot that numbers can keep going. A counterexample is 100, which is greater than 10 but has three digits.",
      "They should test only numbers from 11 to 99.",
      "They should say every number greater than 10 is odd.",
      "They should subtract 10 from all numbers first."
    ],
    correctIndex:0,
    hint:"Try a number much larger than 99.",
    insight:"Misconception: a rule fits only a familiar range, so it must always hold. Principle: one counterexample disproves the all-statement. Correct counterexample: 100."
  },  // REASONING 11-20 EXTENSIONS / MIXED CONCEPTS
  {
    id:"68-reason-21",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"rate",
    inattention:false,
    prompt:"A student says if 3 apples cost $6, then 10 apples cost $10.",
    work:"Student work: 3 apples = $6, so 10 apples = $10",
    options:[
      "They did not preserve the unit rate. If 3 apples cost $6, each apple costs $2, so 10 apples cost $20.",
      "They should divide 10 by 3 and stop.",
      "They should always make the dollar amount match the number of apples.",
      "They should add 3 and 6 to get 9."
    ],
    correctIndex:0,
    hint:"Find the cost for 1 apple first.",
    insight:"Misconception: scale without a consistent rate. Principle: use unit cost. Correct: $20."
  },
  {
    id:"68-reason-22",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"one-step-equation",
    inattention:false,
    prompt:"A student solves x - 9 = 4 and gets x = -5.",
    work:"Student work: x - 9 = 4, so x = -5",
    options:[
      "They subtracted instead of undoing subtraction. Add 9 to both sides: x = 13.",
      "They should divide by 9.",
      "They should move the 4 to the left side.",
      "They should keep the answer negative because there is a minus sign."
    ],
    correctIndex:0,
    hint:"Undo subtraction with addition.",
    insight:"Misconception: repeat the same operation instead of using the inverse. Principle: undo subtraction with addition. Correct: 13."
  },
  {
    id:"68-reason-23",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"percent-of-number",
    inattention:false,
    prompt:"A student says 15% of 200 is 150.",
    work:"Student work: 15% of 200 = 150",
    options:[
      "They treated 15% like 15 times 10. Convert 15% to 0.15, then 0.15 × 200 = 30.",
      "They should divide 200 by 15 and stop.",
      "They should add 15 and 200.",
      "They should subtract 15 from 200."
    ],
    correctIndex:0,
    hint:"A percent is a part of the whole, not the whole itself.",
    insight:"Misconception: percent treated like a whole-number multiplier. Principle: convert to decimal or fraction first. Correct: 30."
  },
  {
    id:"68-reason-24",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"comparison",
    inattention:false,
    prompt:"A student says a 2-to-1 ratio means the first quantity is 1 larger than the second.",
    work:"Student work: 2:1 means one more",
    options:[
      "They used additive thinking instead of multiplicative thinking. A 2-to-1 ratio means the first quantity is twice the second.",
      "They should always subtract the ratio numbers.",
      "They should always add the ratio numbers.",
      "They should turn every ratio into a fraction and stop."
    ],
    correctIndex:0,
    hint:"Ratios compare multiplicatively, not just by difference.",
    insight:"Misconception: ratios are about 'how many more.' Principle: ratios compare by multiplication. Correct: twice as much."
  },
  {
    id:"68-reason-25",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"formula-substitution",
    inattention:false,
    prompt:"A student substitutes into y = 2x + 1 with x = 4 and gets y = 9.",
    work:"Student work: y = 2x + 1, x = 4, so y = 9",
    options:[
      "This answer is actually correct. Substitute x = 4: y = 2(4) + 1 = 8 + 1 = 9.",
      "They should have gotten 7.",
      "They should multiply 2 and 1 first.",
      "They should divide 4 by 2."
    ],
    correctIndex:0,
    hint:"Check the substitution step carefully.",
    insight:"Reasoning check: sometimes the student is correct. Principle: verify before assuming there is an error. Correct: 9."
  },
  {
    id:"68-reason-26",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"multi-step-equation",
    inattention:false,
    prompt:"A student solves 6x = 3x + 18 and gets x = 18.",
    work:"Student work: 6x = 3x + 18, so x = 18",
    options:[
      "They did not subtract 3x from both sides. First get 3x = 18, then x = 6.",
      "They should add 6x and 3x.",
      "They should divide by 18 first.",
      "They should move the 18 to the left side and stop."
    ],
    correctIndex:0,
    hint:"Get all x-terms on one side first.",
    insight:"Misconception: stop before combining like terms across the equation. Principle: collect variable terms first. Correct: x = 6."
  },
  {
    id:"68-reason-27",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"measurement",
    inattention:false,
    prompt:"A student says 200 centimeters equals 20 meters.",
    work:"Student work: 200 cm = 20 m",
    options:[
      "They moved the decimal too far. Since 100 cm = 1 m, 200 cm = 2 m.",
      "They should multiply by 100 again.",
      "They should divide by 20.",
      "They should convert to kilometers first."
    ],
    correctIndex:0,
    hint:"Use the benchmark 100 centimeters = 1 meter.",
    insight:"Misconception: metric conversion with the wrong place-value shift. Principle: use the correct unit relationship. Correct: 2 m."
  },
  {
    id:"68-reason-28",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"proportion",
    inattention:false,
    prompt:"A student says 4/7 = x/21 gives x = 3.",
    work:"Student work: 4/7 = x/21, so x = 3",
    options:[
      "They scaled the wrong way. Since 7 goes to 21 by ×3, 4 must also be multiplied by 3, so x = 12.",
      "They should divide 21 by 4.",
      "They should add 7 and 21.",
      "They should subtract 4 from 21."
    ],
    correctIndex:0,
    hint:"Equivalent ratios use the same multiplier top and bottom.",
    insight:"Misconception: mismatch the scale factor. Principle: preserve the same multiplicative change. Correct: x = 12."
  },
  {
    id:"68-reason-29",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"elapsed-time",
    inattention:false,
    prompt:"A student says that from 2:45 to 4:00 is 1 hour and 45 minutes.",
    work:"Student work: 2:45 to 4:00 = 1 hour 45 minutes",
    options:[
      "They overcounted the time. From 2:45 to 3:45 is 1 hour, then to 4:00 is 15 more minutes, so 1 hour 15 minutes.",
      "They should subtract 45 from 4.",
      "They should say 15 minutes only.",
      "They should convert everything to days."
    ],
    correctIndex:0,
    hint:"Break elapsed time into smaller jumps.",
    insight:"Misconception: read clock numbers like whole-number subtraction. Principle: count the time intervals carefully. Correct: 1 hour 15 minutes."
  },
  {
    id:"68-reason-30",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"slope",
    inattention:false,
    prompt:"A student says the slope from (1, 5) to (4, 2) is 1.",
    work:"Student work: slope = 1",
    options:[
      "They did not compute rise over run correctly. Slope = (2 - 5)/(4 - 1) = -3/3 = -1.",
      "They should add the coordinates first.",
      "They should ignore the negative change.",
      "They should always make slope positive."
    ],
    correctIndex:0,
    hint:"Use change in y over change in x, and keep the sign.",
    insight:"Misconception: slope ignores direction. Principle: rise over run includes negative change when y decreases. Correct: -1."
  },  // LOGIC 21-30 EXTENSIONS
  {
    id:"68-logic-21",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"A student says, 'All prime numbers are odd.'",
    work:"Student work: all prime numbers are odd",
    options:[
      "They forgot the special case 2. It is prime and even, so it is a counterexample.",
      "They should check only bigger prime numbers.",
      "They should say all even numbers are prime.",
      "They should multiply prime numbers together."
    ],
    correctIndex:0,
    hint:"Look for a small special case.",
    insight:"Misconception: overlook exceptions. Principle: one counterexample disproves an all-statement. Correct counterexample: 2."
  },
  {
    id:"68-logic-22",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"classification",
    inattention:false,
    prompt:"A student says every parallelogram is a rectangle.",
    work:"Student work: all parallelograms are rectangles",
    options:[
      "They confused a broad category with a special case. Rectangles are parallelograms, but not all parallelograms have right angles.",
      "They should say every shape with four sides is a rectangle.",
      "They should divide the side lengths to classify shapes.",
      "They should check only squares."
    ],
    correctIndex:0,
    hint:"A rectangle is a special kind of parallelogram, not the other way around.",
    insight:"Misconception: broad class and special case are interchangeable. Principle: subclass does not work in reverse."
  },
  {
    id:"68-logic-23",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 7, 14, 28, 56 is 63.",
    work:"Student work: 7, 14, 28, 56, 63",
    options:[
      "They switched from doubling to adding 7. The pattern doubles each time, so the next term is 112.",
      "They should subtract 7 and get 49.",
      "They should square 56.",
      "They should divide by 7."
    ],
    correctIndex:0,
    hint:"Check whether the pattern is additive or multiplicative.",
    insight:"Misconception: replace a multiplicative rule with an additive one. Principle: preserve the same growth rule. Correct: 112."
  },
  {
    id:"68-logic-24",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"if-then",
    inattention:false,
    prompt:"A student says, 'If it rains, the ground gets wet' means that whenever the ground is wet, it must have rained.",
    work:"Student work: wet ground means it rained",
    options:[
      "They reversed the condition. Sprinklers or spilled water could also make the ground wet.",
      "They should say wet ground means it snowed.",
      "They should divide rain by water.",
      "They should only test one rainy day."
    ],
    correctIndex:0,
    hint:"The original statement gives one cause of wet ground, not the only possible cause.",
    insight:"Misconception: reverse if-then logic is automatically true. Principle: the converse needs its own evidence."
  },
  {
    id:"68-logic-25",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"comparison",
    inattention:false,
    prompt:"A student says 3/8 is greater than 1/2 because 8 is bigger than 2.",
    work:"Student work: 3/8 > 1/2 because 8 > 2",
    options:[
      "They compared denominators without considering the whole fraction. Since 1/2 = 4/8, and 3/8 < 4/8, 1/2 is greater.",
      "They should always choose the fraction with the bigger denominator.",
      "They should add numerator and denominator first.",
      "They should turn both fractions into mixed numbers."
    ],
    correctIndex:0,
    hint:"Rewrite one fraction with the same denominator as the other.",
    insight:"Misconception: compare fractions by denominator size alone. Principle: use common denominators or benchmark fractions. Correct: 1/2 is greater."
  },
  {
    id:"68-logic-26",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 2, 6, 12, 20 is 26.",
    work:"Student work: 2, 6, 12, 20, 26",
    options:[
      "They treated the differences like a constant pattern. The differences are +4, +6, +8, so next is +10: 30.",
      "They should always add 6.",
      "They should double 20.",
      "They should subtract 2."
    ],
    correctIndex:0,
    hint:"Look at how the differences change from one step to the next.",
    insight:"Misconception: force a simple rule onto a changing-difference pattern. Principle: track the pattern in the differences. Correct: 30."
  },
  {
    id:"68-logic-27",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"classification",
    inattention:false,
    prompt:"A student says every trapezoid is a parallelogram.",
    work:"Student work: all trapezoids are parallelograms",
    options:[
      "They confused two different categories. A trapezoid does not generally have two pairs of parallel sides, so it is not automatically a parallelogram.",
      "They should check only isosceles trapezoids.",
      "They should multiply the side lengths.",
      "They should say all triangles are trapezoids too."
    ],
    correctIndex:0,
    hint:"Compare the definitions: how many pairs of parallel sides does each shape have?",
    insight:"Misconception: similar-looking quadrilateral categories are interchangeable. Principle: use the defining properties."
  },
  {
    id:"68-logic-28",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"parity",
    inattention:false,
    prompt:"A student says odd + odd is always odd.",
    work:"Student work: odd + odd = odd",
    options:[
      "They generalized incorrectly. For example, 3 + 5 = 8, which is even, so odd + odd gives an even result.",
      "They should only test 1 + 1.",
      "They should say odd + odd is always prime.",
      "They should multiply odd numbers instead."
    ],
    correctIndex:0,
    hint:"Test the claim with a simple example like 3 + 5.",
    insight:"Misconception: pattern guessed without checking. Principle: use examples and counterexamples to test parity rules. Correct: odd + odd is even."
  },
  {
    id:"68-logic-29",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"A student says, 'If a number ends in 0, then it is divisible by 2, so if a number is divisible by 2 it must end in 0.'",
    work:"Student work: divisible by 2 means ends in 0",
    options:[
      "They reversed a true rule incorrectly. A counterexample is 14: it is divisible by 2, but it does not end in 0.",
      "They should test only multiples of 10.",
      "They should say all even numbers end in 5.",
      "They should divide by 10 first."
    ],
    correctIndex:0,
    hint:"A true statement does not automatically make its reverse true.",
    insight:"Misconception: the converse of a divisibility rule stays true. Principle: test the reverse with a counterexample. Correct counterexample: 14."
  },
  {
    id:"68-logic-30",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 4, 9, 16, 25 is 34.",
    work:"Student work: 4, 9, 16, 25, 34",
    options:[
      "They noticed growth but missed the square pattern. These are 2^2, 3^2, 4^2, 5^2, so the next term is 6^2 = 36.",
      "They should keep adding 9.",
      "They should double 25 and get 50.",
      "They should subtract 2."
    ],
    correctIndex:0,
    hint:"Ask whether the numbers come from a meaningful sequence like square numbers.",
    insight:"Misconception: use a rough difference rule on a structured number pattern. Principle: identify the generating rule. Correct: 36."
  },
  // FLUENCY PACK 1 — OPERATIONS 21-32
  {
    id:"68-op-21",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-addition",
    inattention:false,
    prompt:"A student adds fractions and gets 2/5 + 1/10 = 3/15.",
    work:"Student work: 2/5 + 1/10 = 3/15",
    options:[
      "They added across. Use a common denominator: 2/5 = 4/10, so 4/10 + 1/10 = 5/10 = 1/2.",
      "They should multiply the fractions instead.",
      "They should subtract 1/10 from 2/5.",
      "They should keep the denominator 15 because 5 + 10 = 15."
    ],
    correctIndex:0,
    hint:"Fractions must name the same-sized pieces before you add them.",
    insight:"Misconception: add across. Principle: use a common denominator first. Correct: 1/2."
  },
  {
    id:"68-op-22",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-addition",
    inattention:false,
    prompt:"A student adds fractions and gets 3/8 + 1/4 = 4/12.",
    work:"Student work: 3/8 + 1/4 = 4/12",
    options:[
      "They added across. Convert 1/4 to 2/8, then 3/8 + 2/8 = 5/8.",
      "They should multiply the denominators and keep 4 on top.",
      "They should subtract because the denominators are different.",
      "They should turn both fractions into whole numbers first."
    ],
    correctIndex:0,
    hint:"Rewrite 1/4 in eighths.",
    insight:"Misconception: add numerators and denominators. Principle: rename fractions with a common denominator. Correct: 5/8."
  },
  {
    id:"68-op-23",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"integer-sign",
    inattention:false,
    prompt:"A student computes -7 + 2 = -9.",
    work:"Student work: -7 + 2 = -9",
    options:[
      "They added absolute values instead of subtracting them. For unlike signs, subtract 7 - 2 = 5 and keep the sign of the larger absolute value, so the answer is -5.",
      "They should always make the answer positive when adding.",
      "They should multiply -7 and 2 first.",
      "They should write 9 because negatives cancel with positives."
    ],
    correctIndex:0,
    hint:"Unlike signs mean subtract the absolute values and keep the sign of the larger magnitude.",
    insight:"Misconception: add magnitudes for unlike signs. Principle: subtract magnitudes and keep the larger sign. Correct: -5."
  },
  {
    id:"68-op-24",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"integer-sign",
    inattention:false,
    prompt:"A student computes -4 - 3 = 1.",
    work:"Student work: -4 - 3 = 1",
    options:[
      "They treated subtraction like finding a distance only. Starting at -4 and subtracting 3 moves three more units left to -7.",
      "They should add 4 and 3 and make it positive.",
      "They should turn -3 into +3 automatically.",
      "They should divide 4 by 3."
    ],
    correctIndex:0,
    hint:"Subtracting a positive moves left on the number line.",
    insight:"Misconception: subtraction with negatives becomes positive by default. Principle: subtracting a positive from a negative moves farther negative. Correct: -7."
  },
  {
    id:"68-op-25",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"distribution",
    inattention:false,
    prompt:"A student simplifies -2(x + 5) as -2x + 5.",
    work:"Student work: -2(x + 5) = -2x + 5",
    options:[
      "They distributed -2 to only one term. Multiply both terms: -2x - 10.",
      "They should add -2 and 5 first.",
      "They should divide everything by 2.",
      "They should keep the parentheses unchanged forever."
    ],
    correctIndex:0,
    hint:"The outside factor multiplies every term inside the parentheses.",
    insight:"Misconception: distribute to one term only. Principle: distribute to all terms, including the sign. Correct: -2x - 10."
  },
  {
    id:"68-op-26",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"distribution",
    inattention:false,
    prompt:"A student simplifies 5(2x - 3) as 10x - 3.",
    work:"Student work: 5(2x - 3) = 10x - 3",
    options:[
      "They forgot to multiply the constant term by 5. Correct distribution gives 10x - 15.",
      "They should add 5 and 3 first.",
      "They should divide 10x by 5.",
      "They should keep the answer as 10x because constants disappear."
    ],
    correctIndex:0,
    hint:"The 5 multiplies both 2x and -3.",
    insight:"Misconception: distribute to variable term but not constant. Principle: every term gets multiplied. Correct: 10x - 15."
  },
  {
    id:"68-op-27",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"combine-like-terms",
    inattention:false,
    prompt:"A student simplifies 7a + 3b + 2a as 12ab.",
    work:"Student work: 7a + 3b + 2a = 12ab",
    options:[
      "They combined unlike terms incorrectly. Only the a-terms combine: 7a + 2a = 9a, so the expression is 9a + 3b.",
      "They should multiply all coefficients together.",
      "They should turn b into a.",
      "They should divide by a and b first."
    ],
    correctIndex:0,
    hint:"Terms must have exactly the same variable part to combine.",
    insight:"Misconception: all letter terms combine. Principle: only like terms combine. Correct: 9a + 3b."
  },
  {
    id:"68-op-28",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"combine-like-terms",
    inattention:false,
    prompt:"A student simplifies 6y - 2y + 4 as 8y.",
    work:"Student work: 6y - 2y + 4 = 8y",
    options:[
      "They added the y-terms instead of subtracting and dropped the constant. Since 6y - 2y = 4y, the expression is 4y + 4.",
      "They should multiply 6y and 2y.",
      "They should turn 4 into 4y.",
      "They should divide all terms by y."
    ],
    correctIndex:0,
    hint:"Keep the sign on each term and do not drop constants that remain.",
    insight:"Misconception: ignore signs and leftovers. Principle: combine signed like terms and keep remaining constants. Correct: 4y + 4."
  },
  {
    id:"68-op-29",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"order-of-operations",
    inattention:false,
    prompt:"A student evaluates 18 ÷ 3 + 2 as 18 ÷ 5 = 3.6.",
    work:"Student work: 18 ÷ 3 + 2 = 18 ÷ 5 = 3.6",
    options:[
      "They combined 3 and 2 first even though division comes before addition. Compute 18 ÷ 3 = 6, then 6 + 2 = 8.",
      "They should always add before dividing.",
      "They should multiply 3 and 2 instead.",
      "They should subtract 2 from 18 first."
    ],
    correctIndex:0,
    hint:"Division happens before addition unless parentheses say otherwise.",
    insight:"Misconception: combine nearby numbers first. Principle: follow order of operations. Correct: 8."
  },
  {
    id:"68-op-30",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-multiplication",
    inattention:false,
    prompt:"A student multiplies decimals and gets 0.6 × 0.4 = 2.4.",
    work:"Student work: 0.6 × 0.4 = 2.4",
    options:[
      "They ignored size. Since both factors are less than 1, the product must be less than each factor. Compute 6 × 4 = 24, then place two decimal digits: 0.24.",
      "They should add the decimals instead.",
      "They should divide 0.6 by 0.4.",
      "They should move the decimal right because multiplication makes numbers bigger."
    ],
    correctIndex:0,
    hint:"A product of two numbers less than 1 should get smaller, not bigger.",
    insight:"Misconception: multiplication always makes numbers larger. Principle: estimate first, then place decimals correctly. Correct: 0.24."
  },
  {
    id:"68-op-31",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent",
    inattention:false,
    prompt:"A student says 40% of 90 is 36 because 40 + 90 = 130 and 130 ÷ ? gives 36.",
    work:"Student work: 40% of 90 = 36 because of adding 40 and 90 first",
    options:[
      "The answer 36 is correct, but the reasoning is not. Since 40% = 0.4, compute 0.4 × 90 = 36.",
      "They should subtract 40 from 90 instead.",
      "They should divide 90 by 40 and stop.",
      "They should always add the percent and the whole number first."
    ],
    correctIndex:0,
    hint:"A correct answer can still come from faulty reasoning.",
    insight:"Reasoning check: right answer, wrong method. Principle: percent means multiply the whole by the decimal form. Correct: 36."
  },
  {
    id:"68-op-32",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"place-value",
    inattention:false,
    prompt:"A student says 0.09 is greater than 0.4 because 9 is greater than 4.",
    work:"Student work: 0.09 > 0.4 because 9 > 4",
    options:[
      "They compared digits instead of place value. Since 0.4 = 0.40, and 0.09 is only nine hundredths, 0.4 is greater.",
      "They should always choose the number with more digits.",
      "They should add 0.09 and 0.4 to compare them.",
      "They should ignore the decimal point."
    ],
    correctIndex:0,
    hint:"Rewrite 0.4 as 0.40 to compare tenths and hundredths.",
    insight:"Misconception: decimal comparison like whole numbers. Principle: compare place values. Correct: 0.4 is greater."
  },

  // FLUENCY PACK 1 — REASONING 31-42
  {
    id:"68-reason-31",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"equation-solving",
    inattention:false,
    prompt:"A student solves x + 8 = 13 and gets x = 21.",
    work:"Student work: x + 8 = 13, so x = 21",
    options:[
      "They added 8 instead of undoing it. To isolate x, subtract 8 from both sides: x = 5.",
      "They should multiply 13 by 8.",
      "They should divide 13 by 8.",
      "They should move x to the other side."
    ],
    correctIndex:0,
    hint:"Undo addition with subtraction.",
    insight:"Misconception: repeat the same operation instead of the inverse. Principle: use the inverse operation. Correct: 5."
  },
  {
    id:"68-reason-32",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"equation-solving",
    inattention:false,
    prompt:"A student solves 3x = 15 and gets x = 45.",
    work:"Student work: 3x = 15, so x = 45",
    options:[
      "They multiplied instead of dividing. Since 3x means 3 times x, divide 15 by 3 to get x = 5.",
      "They should add 3 to 15.",
      "They should subtract 3 from 15.",
      "They should keep x as 15 because it is already on the left."
    ],
    correctIndex:0,
    hint:"Undo multiplication with division.",
    insight:"Misconception: solving means apply the same operation again. Principle: use the inverse operation. Correct: 5."
  },
  {
    id:"68-reason-33",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equation-solving",
    inattention:false,
    prompt:"A student solves 2x + 5 = 17 and gets x = 12.",
    work:"Student work: 2x + 5 = 17, so x = 12",
    options:[
      "They subtracted 5 but forgot to divide by 2. Since 2x = 12, x = 6.",
      "They should add 5 to 17 first.",
      "They should divide 17 by 2 first and stop.",
      "They should move the 5 to the left and leave it there."
    ],
    correctIndex:0,
    hint:"After undoing the +5, there is still a factor of 2 attached to x.",
    insight:"Misconception: stop halfway in a two-step equation. Principle: keep isolating x. Correct: 6."
  },
  {
    id:"68-reason-34",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"ratio",
    inattention:false,
    prompt:"A student says a ratio of 3:4 means the first quantity is 1 less than the second.",
    work:"Student work: 3:4 means one less",
    options:[
      "They used additive thinking instead of multiplicative thinking. A 3:4 ratio compares quantities by scale, not just by a difference of 1.",
      "They should always subtract the ratio numbers only.",
      "They should always add the ratio numbers first.",
      "They should turn 3:4 into 7:1."
    ],
    correctIndex:0,
    hint:"Ratios describe multiplicative relationships.",
    insight:"Misconception: ratios are just differences. Principle: ratios compare by multiplication. Correct idea: 3 for every 4."
  },
  {
    id:"68-reason-35",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"proportion",
    inattention:false,
    prompt:"A student says 5/8 = x/24 gives x = 16 because 24 - 8 = 16.",
    work:"Student work: 5/8 = x/24, so x = 16",
    options:[
      "They used subtraction instead of scaling. Since 8 goes to 24 by ×3, 5 must also be multiplied by 3, so x = 15.",
      "They should add 5 and 8 first.",
      "They should divide 24 by 5 and stop.",
      "They should always subtract denominators."
    ],
    correctIndex:0,
    hint:"Equivalent ratios use the same multiplier.",
    insight:"Misconception: compare ratio parts additively. Principle: preserve the same multiplicative scale factor. Correct: 15."
  },
  {
    id:"68-reason-36",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"unit-conversion",
    inattention:false,
    prompt:"A student says 2.5 meters is 2500 centimeters.",
    work:"Student work: 2.5 m = 2500 cm",
    options:[
      "They moved the decimal too far. Since 1 meter = 100 centimeters, 2.5 meters = 250 centimeters.",
      "They should divide by 100 instead.",
      "They should add 100 to 2.5.",
      "They should convert to kilometers first."
    ],
    correctIndex:0,
    hint:"Multiply by 100, not by 1000.",
    insight:"Misconception: metric conversion with the wrong place-value shift. Principle: use the correct unit relationship. Correct: 250 cm."
  },
  {
    id:"68-reason-37",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"percent-change",
    inattention:false,
    prompt:"A student says decreasing from 60 to 45 is a 15% decrease.",
    work:"Student work: 60 to 45 means 15% decrease",
    options:[
      "They used the change amount as the percent. The decrease is 15 out of the original 60, so 15/60 = 25%.",
      "They should compare 15 to 45 instead.",
      "They should always subtract the smaller number from 100.",
      "They should divide 60 by 45 and stop."
    ],
    correctIndex:0,
    hint:"Percent decrease compares the change to the original amount.",
    insight:"Misconception: the change number itself is the percent. Principle: divide by the original amount. Correct: 25%."
  },
  {
    id:"68-reason-38",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"part-whole",
    inattention:false,
    prompt:"A student says that if 8 out of 20 students wore hats, then 8/12 is the fraction wearing hats.",
    work:"Student work: hats fraction = 8/12",
    options:[
      "They compared hats to no-hats instead of hats to the whole class. Part-to-whole should be 8/20 = 2/5.",
      "They should always subtract first for fractions.",
      "They should turn 12 into 20 by adding 8.",
      "They should write 12/8 because more students did not wear hats."
    ],
    correctIndex:0,
    hint:"The denominator should be the whole group, not just the remainder.",
    insight:"Misconception: use part-to-part when asked for part-to-whole. Principle: denominator should be the total group. Correct: 2/5."
  },
  {
    id:"68-reason-39",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"slope",
    inattention:false,
    prompt:"A student says the slope from (0, 2) to (3, 8) is 3/6.",
    work:"Student work: slope = 3/6",
    options:[
      "They reversed rise and run. Slope = (8 - 2)/(3 - 0) = 6/3 = 2.",
      "They should add the coordinates first.",
      "They should always put x-change over y-change.",
      "They should divide 8 by 2 and stop."
    ],
    correctIndex:0,
    hint:"Slope is change in y over change in x.",
    graph:{
      xMin:-1,
      xMax:4,
      yMin:0,
      yMax:9,
      objects:[
        { type:"point", x:0, y:2, label:"A" },
        { type:"point", x:3, y:8, label:"B" },
        { type:"segment", x1:0, y1:2, x2:3, y2:8, label:"AB" }
      ]
    },
    insight:"Misconception: reverse rise and run. Principle: slope = Δy/Δx. Correct: 2."
  },
  {
    id:"68-reason-40",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"probability",
    inattention:false,
    prompt:"A student says the probability of choosing a vowel from the letters A, B, C, D, E is 2/3.",
    work:"Student work: P(vowel) = 2/3",
    options:[
      "There are 2 vowels out of 5 total letters, so the probability is 2/5.",
      "They should always simplify to thirds.",
      "They should count only consonants.",
      "They should write 5/2 because there are more total letters."
    ],
    correctIndex:0,
    hint:"Probability is favorable outcomes over total outcomes.",
    insight:"Misconception: wrong denominator in probability. Principle: compare favorable outcomes to the whole sample space. Correct: 2/5."
  },
  {
    id:"68-reason-41",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"multi-step-equation",
    inattention:false,
    prompt:"A student solves 7 + 3x = 22 and gets x = 15.",
    work:"Student work: 7 + 3x = 22, so x = 15",
    options:[
      "They subtracted 7 but forgot to divide by 3. Since 3x = 15, x = 5.",
      "They should add 7 to 22 first.",
      "They should divide 22 by 3 first and stop.",
      "They should move 3x to the other side."
    ],
    correctIndex:0,
    hint:"After removing the constant, there is still a coefficient on x.",
    insight:"Misconception: stop after one inverse operation. Principle: keep isolating x completely. Correct: 5."
  },
  {
    id:"68-reason-42",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"reasoning-check",
    inattention:false,
    prompt:"A student says the area of a triangle with base 10 and height 6 is 30 square units.",
    work:"Student work: Area = (1/2) × 10 × 6 = 30",
    options:[
      "This is correct. The area formula for a triangle is 1/2 × base × height, so the area is 30 square units.",
      "They should have doubled 30 to 60.",
      "They should have added 10 and 6 first.",
      "They should have divided 10 by 6."
    ],
    correctIndex:0,
    hint:"Sometimes the student’s reasoning is already correct.",
    insight:"Reasoning check: not every item contains an error. Principle: verify before correcting. Correct: 30 square units."
  },

  // FLUENCY PACK 1 — LOGIC 31-42
   {
    id:"68-logic-41",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"decimal-comparison",
    inattention:false,
    prompt:"A student says 0.305 is less than 0.29 because 305 is less than 29.",
    work:"Student work: 0.305 < 0.29 because 305 < 29",
    options:[
      "They compared decimals like whole numbers. Rewrite 0.29 as 0.290. Since 0.305 is greater than 0.290, 0.305 is greater.",
      "They should always choose the shorter decimal.",
      "They should add 305 and 29 first.",
      "They should ignore trailing zeros."
    ],
    correctIndex:0,
    hint:"Line up decimal places before comparing.",
    insight:"Misconception: decimal comparison like whole-number comparison. Principle: align place values. Correct: 0.305 is greater."
  },
  {
    id:"68-logic-42",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"reasoning-check",
    inattention:false,
    prompt:"A student says, 'Not all quadrilaterals are squares,' and gives a rectangle that is not a square as evidence.",
    work:"Student work: Not all quadrilaterals are squares because a 2-by-5 rectangle is a quadrilateral but not a square.",
    options:[
      "This reasoning is correct. The rectangle is a valid counterexample showing that not all quadrilaterals are squares.",
      "They should have used a triangle instead.",
      "They should only use squares as evidence.",
      "They should prove it by perimeter alone."
    ],
    correctIndex:0,
    hint:"A valid counterexample can prove a not-all statement.",
    insight:"Reasoning check: correct use of a counterexample. Principle: one valid counterexample disproves an all-statement."
  },
  // PRECISION PACK — OPERATIONS 33-36
  {
    id:"68-op-33",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-subtraction",
    inattention:false,
    prompt:"A student subtracts fractions and gets 7/12 - 1/6 = 6/18.",
    work:"Student work: 7/12 - 1/6 = 6/18",
    options:[
      "They subtracted across. Rewrite 1/6 as 2/12, then 7/12 - 2/12 = 5/12.",
      "They should multiply the fractions instead.",
      "They should add the denominators and keep 6 on top.",
      "They should turn both fractions into mixed numbers first."
    ],
    correctIndex:0,
    hint:"Rename the fractions so they use the same-sized pieces.",
    insight:"Misconception: subtract across. Principle: use a common denominator first. Correct: 5/12."
  },
  {
    id:"68-op-34",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"order-of-operations",
    inattention:false,
    prompt:"A student evaluates 12 - 3(2) as 18.",
    work:"Student work: 12 - 3(2) = 18",
    options:[
      "They subtracted and multiplied in the wrong order. Multiply first: 3(2) = 6, then 12 - 6 = 6.",
      "They should always subtract before multiplying.",
      "They should add 3 and 2 first.",
      "They should divide 12 by 3."
    ],
    correctIndex:0,
    hint:"Multiplication happens before subtraction unless parentheses change the structure.",
    insight:"Misconception: evaluate left to right without order of operations. Principle: multiply first. Correct: 6."
  },
  {
    id:"68-op-35",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"integer-sign",
    inattention:false,
    prompt:"A student computes -6 + (-4) = 10.",
    work:"Student work: -6 + (-4) = 10",
    options:[
      "They ignored the negative signs. Adding two negative numbers keeps the result negative: -6 + (-4) = -10.",
      "They should subtract 4 from 6 and get 2.",
      "They should make the answer positive because two negatives cancel.",
      "They should divide 6 by 4."
    ],
    correctIndex:0,
    hint:"When both numbers are negative, add the magnitudes and keep the negative sign.",
    insight:"Misconception: two negatives cancel in addition. Principle: same-sign addition keeps the common sign. Correct: -10."
  },
  {
    id:"68-op-36",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent",
    inattention:false,
    prompt:"A student says 5% of 240 is 120.",
    work:"Student work: 5% of 240 = 120",
    options:[
      "They treated 5% like 1/2 instead of 5/100. Since 5% = 0.05, compute 0.05 × 240 = 12.",
      "They should add 5 and 240 first.",
      "They should divide 240 by 5 and stop.",
      "They should subtract 5 from 240."
    ],
    correctIndex:0,
    hint:"A small percent of a number should give a relatively small part, not half the whole.",
    insight:"Misconception: percent magnitude misunderstood. Principle: convert the percent to a decimal or fraction first. Correct: 12."
  }
  ,
  // RESTORE LOGIC 33-42
  {
    id:"68-logic-33",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"A student says, 'All numbers greater than 1 are composite.'",
    work:"Student work: all numbers greater than 1 are composite",
    options:[
      "A counterexample is 2. It is greater than 1, but it is prime, not composite.",
      "They should test only odd numbers.",
      "They should say all numbers greater than 1 are even.",
      "They should multiply numbers together to decide."
    ],
    correctIndex:0,
    hint:"Look for a small number greater than 1 that has exactly two factors.",
    insight:"Misconception: overgeneralize from many examples. Principle: one counterexample disproves an all-statement. Correct counterexample: 2."
  },
  {
    id:"68-logic-34",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"comparison",
    inattention:false,
    prompt:"A student says 2/3 is smaller than 3/5 because 3 is smaller than 5.",
    work:"Student work: 2/3 < 3/5 because 3 < 5",
    options:[
      "They compared denominators only. Use common denominators or decimals: 2/3 ≈ 0.667 and 3/5 = 0.6, so 2/3 is greater.",
      "They should always choose the fraction with the smaller denominator.",
      "They should add the numerator and denominator first.",
      "They should turn both fractions into mixed numbers."
    ],
    correctIndex:0,
    hint:"Fractions cannot be compared by denominator size alone.",
    insight:"Misconception: compare fractions by denominator only. Principle: use equivalent fractions, decimals, or benchmarks. Correct: 2/3 is greater."
  },
  {
    id:"68-logic-35",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"if-then",
    inattention:false,
    prompt:"A student says, 'If a figure is a rectangle, then it has 4 right angles' means any figure with 4 right angles must be a rectangle and nothing else matters.",
    work:"Student work: four right angles alone tells the whole story",
    options:[
      "That condition is enough to identify a rectangle among quadrilaterals, but the student is treating the reasoning too loosely. The important point is that definitions matter; you must use the exact defining properties in the right category.",
      "They should ignore right angles completely.",
      "They should count diagonals instead.",
      "They should always use perimeter to classify figures."
    ],
    correctIndex:0,
    hint:"Definitions matter, and statements should be interpreted precisely.",
    insight:"Logic note: correct classification depends on using exact definitions carefully, not vague pattern-matching."
  },
  {
    id:"68-logic-36",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"parity",
    inattention:false,
    prompt:"A student says even + odd is always even.",
    work:"Student work: even + odd = even",
    options:[
      "A counterexample is 2 + 3 = 5, which is odd. In fact, even + odd is odd.",
      "They should only test 10 + 1.",
      "They should say even + odd is always prime.",
      "They should multiply even and odd numbers instead."
    ],
    correctIndex:0,
    hint:"Test with a simple example like 2 + 3.",
    insight:"Misconception: guessed parity rule without checking. Principle: test a rule with examples and counterexamples. Correct: even + odd is odd."
  },
  {
    id:"68-logic-37",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"alternating-pattern",
    inattention:false,
    prompt:"A student says the next term after 1, 10, 2, 20, 3, 30 is 40.",
    work:"Student work: 1, 10, 2, 20, 3, 30, 40",
    options:[
      "They missed the alternating pattern. One sequence is 1, 2, 3, so the next term is 4; the other is 10, 20, 30.",
      "They should always keep increasing by 10.",
      "They should double 30.",
      "They should subtract 6."
    ],
    correctIndex:0,
    hint:"Look for two interwoven sequences.",
    insight:"Misconception: force one rule onto an alternating pattern. Principle: separate the interwoven patterns. Correct: 4."
  },
  {
    id:"68-logic-38",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"classification",
    inattention:false,
    prompt:"A student says every rhombus is a square.",
    work:"Student work: all rhombuses are squares",
    options:[
      "They confused a broader class with a special case. A rhombus has four equal sides, but it does not have to have four right angles, so not every rhombus is a square.",
      "They should say every square is a triangle.",
      "They should classify by perimeter only.",
      "They should divide side lengths to decide."
    ],
    correctIndex:0,
    hint:"A square is a special kind of rhombus, not the other way around.",
    insight:"Misconception: broad category and special case are reversible. Principle: subclass does not work in reverse. Counterexample: a slanted rhombus."
  },
  {
    id:"68-logic-39",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 30, 27, 24, 21 is 19.",
    work:"Student work: 30, 27, 24, 21, 19",
    options:[
      "They broke the subtract-3 rule. The next term should be 18.",
      "They should add 2 instead.",
      "They should double 21.",
      "They should square 21."
    ],
    correctIndex:0,
    hint:"Compare each pair of consecutive terms.",
    insight:"Misconception: switch to a new difference. Principle: preserve the repeated step. Correct: 18."
  },
  {
    id:"68-logic-40",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"A student says, 'If a number is a multiple of 3, then it is odd.'",
    work:"Student work: multiples of 3 are odd",
    options:[
      "A counterexample is 6. It is a multiple of 3, but it is even.",
      "They should test only 3 and 9.",
      "They should say all odd numbers are multiples of 3.",
      "They should divide by 2 first."
    ],
    correctIndex:0,
    hint:"One counterexample is enough to disprove the statement.",
    insight:"Misconception: overgeneralize from a few examples. Principle: use a counterexample. Correct counterexample: 6."
  },
  {
    id:"68-logic-31",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"decimal-comparison",
    inattention:false,
    prompt:"A student says 0.305 is less than 0.29 because 305 is less than 29.",
    work:"Student work: 0.305 < 0.29 because 305 < 29",
    options:[
      "They compared decimals like whole numbers. Rewrite 0.29 as 0.290. Since 0.305 is greater than 0.290, 0.305 is greater.",
      "They should always choose the shorter decimal.",
      "They should add 305 and 29 first.",
      "They should ignore trailing zeros."
    ],
    correctIndex:0,
    hint:"Line up decimal places before comparing.",
    insight:"Misconception: decimal comparison like whole-number comparison. Principle: align place values. Correct: 0.305 is greater."
  },
  {
    id:"68-logic-32",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"reasoning-check",
    inattention:false,
    prompt:"A student says, 'Not all quadrilaterals are squares,' and gives a rectangle that is not a square as evidence.",
    work:"Student work: Not all quadrilaterals are squares because a 2-by-5 rectangle is a quadrilateral but not a square.",
    options:[
      "This reasoning is correct. The rectangle is a valid counterexample showing that not all quadrilaterals are squares.",
      "They should have used a triangle instead.",
      "They should only use squares as evidence.",
      "They should prove it by perimeter alone."
    ],
    correctIndex:0,
    hint:"A valid counterexample can prove a not-all statement.",
    insight:"Reasoning check: correct use of a counterexample. Principle: one valid counterexample disproves an all-statement."
  }
  ,
  // FLUENCY PACK 2 - OPERATIONS 37-44
  {
    id:"68-op-37",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-addition",
    inattention:false,
    prompt:"A student adds fractions and gets 5/6 + 1/3 = 6/9.",
    work:"Student work: 5/6 + 1/3 = 6/9",
    options:[
      "They added across. Rewrite 1/3 as 2/6, then 5/6 + 2/6 = 7/6.",
      "They should multiply the fractions instead.",
      "They should keep 6/9 because the numerators add to 6.",
      "They should subtract because the denominators are different."
    ],
    correctIndex:0,
    hint:"Use the same denominator before adding.",
    insight:"Misconception: add across. Principle: use a common denominator first. Correct: 7/6."
  },
  {
    id:"68-op-38",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"integer-sign",
    inattention:false,
    prompt:"A student computes -9 - (-4) = -13.",
    work:"Student work: -9 - (-4) = -13",
    options:[
      "They treated subtracting a negative like subtracting a positive. Since subtracting a negative means add, -9 + 4 = -5.",
      "They should add 9 and 4 and make it positive.",
      "They should always keep both negative signs.",
      "They should divide 9 by 4."
    ],
    correctIndex:0,
    hint:"Subtracting a negative is the same as adding the opposite.",
    insight:"Misconception: minus a negative stays subtraction. Principle: subtracting a negative becomes addition. Correct: -5."
  },
  {
    id:"68-op-39",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"distribution",
    inattention:false,
    prompt:"A student simplifies 4(3y + 2) as 12y + 2.",
    work:"Student work: 4(3y + 2) = 12y + 2",
    options:[
      "They distributed 4 to only one term. Correct distribution gives 12y + 8.",
      "They should add 4 and 2 first.",
      "They should divide everything by 4.",
      "They should keep the answer as 12y because constants disappear."
    ],
    correctIndex:0,
    hint:"The outside factor multiplies every term inside the parentheses.",
    insight:"Misconception: distribute to one term only. Principle: every term gets multiplied. Correct: 12y + 8."
  },
  {
    id:"68-op-40",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"combine-like-terms",
    inattention:false,
    prompt:"A student simplifies 8m + 2 - 3m as 13m.",
    work:"Student work: 8m + 2 - 3m = 13m",
    options:[
      "They added unlike parts incorrectly. Combine only the m-terms: 8m - 3m = 5m, so the expression is 5m + 2.",
      "They should multiply 8m and 3m first.",
      "They should turn 2 into 2m.",
      "They should divide all terms by m."
    ],
    correctIndex:0,
    hint:"Keep the constant unless it combines with another constant.",
    insight:"Misconception: mix like terms with constants. Principle: combine only truly like terms. Correct: 5m + 2."
  },
  {
    id:"68-op-41",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"order-of-operations",
    inattention:false,
    prompt:"A student evaluates 20 - 4^2 as 16^2 = 256.",
    work:"Student work: 20 - 4^2 = 16^2 = 256",
    options:[
      "They subtracted before evaluating the exponent. Exponents come first: 4^2 = 16, then 20 - 16 = 4.",
      "They should always subtract before exponents.",
      "They should double 4 and get 8.",
      "They should divide 20 by 4."
    ],
    correctIndex:0,
    hint:"Exponents are evaluated before addition or subtraction.",
    insight:"Misconception: combine nearby numbers before using exponents. Principle: exponents first. Correct: 4."
  },
  {
    id:"68-op-42",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-multiplication",
    inattention:false,
    prompt:"A student multiplies decimals and gets 2.4 x 0.5 = 12.",
    work:"Student work: 2.4 x 0.5 = 12",
    options:[
      "They ignored place value and size. Since 24 x 5 = 120 and there are two decimal digits total, the product is 1.2.",
      "They should add the decimals instead.",
      "They should divide 2.4 by 0.5.",
      "They should move the decimal farther right because multiplication always makes numbers bigger."
    ],
    correctIndex:0,
    hint:"Half of 2.4 should be smaller than 2.4, not much larger.",
    insight:"Misconception: multiplication always makes numbers larger. Principle: estimate first, then place decimals correctly. Correct: 1.2."
  },
  {
    id:"68-op-43",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent",
    inattention:false,
    prompt:"A student says 12% of 50 is 600.",
    work:"Student work: 12% of 50 = 600",
    options:[
      "They treated 12% like 12. Since 12% = 0.12, compute 0.12 x 50 = 6.",
      "They should add 12 and 50 first.",
      "They should divide 50 by 12 and stop.",
      "They should subtract 12 from 50."
    ],
    correctIndex:0,
    hint:"A small percent of 50 should be a small part, not hundreds.",
    insight:"Misconception: percent treated like a whole number. Principle: convert percent to a decimal or fraction first. Correct: 6."
  },
  {
    id:"68-op-44",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-division",
    inattention:false,
    prompt:"A student computes 3.6 / 0.6 = 0.6.",
    work:"Student work: 3.6 / 0.6 = 0.6",
    options:[
      "They ignored the meaning of division. Since 3.6 is six groups of 0.6, the quotient is 6.",
      "They should multiply 3.6 and 0.6 instead.",
      "They should add the decimals first.",
      "They should keep the answer less than 1 because decimals are involved."
    ],
    correctIndex:0,
    hint:"Ask how many 0.6s fit into 3.6.",
    insight:"Misconception: decimal division always gives a decimal less than 1. Principle: think of division as how many groups fit. Correct: 6."
  }
  ,
  // FLUENCY PACK 2 - REASONING 43-50
  {
    id:"68-reason-43",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equation-solving",
    inattention:false,
    prompt:"A student solves 4x - 3 = 21 and gets x = 18.",
    work:"Student work: 4x - 3 = 21, so x = 18",
    options:[
      "They added 3 correctly but forgot to divide by 4. Since 4x = 24, x = 6.",
      "They should subtract 3 again.",
      "They should divide 21 by 4 first and stop.",
      "They should move x to the other side."
    ],
    correctIndex:0,
    hint:"After undoing the subtraction, there is still a coefficient on x.",
    insight:"Misconception: stop after one inverse step. Principle: isolate x completely. Correct: 6."
  },
  {
    id:"68-reason-44",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"proportion",
    inattention:false,
    prompt:"A student says 6/9 = x/27 gives x = 18.",
    work:"Student work: 6/9 = x/27, so x = 18",
    options:[
      "This is correct. Since 9 goes to 27 by x3, 6 must also be multiplied by 3, giving x = 18.",
      "They should have added 9 and 27 instead.",
      "They should have divided 27 by 6.",
      "They should have subtracted 9 from 27."
    ],
    correctIndex:0,
    hint:"Equivalent ratios use the same scale factor.",
    insight:"Reasoning check: correct proportion scaling. Principle: preserve the same multiplicative relationship. Correct: 18."
  },
  {
    id:"68-reason-45",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"percent-change",
    inattention:false,
    prompt:"A student says decreasing from 80 to 72 is an 8% decrease.",
    work:"Student work: 80 to 72 means 8% decrease",
    options:[
      "They used the change amount as the percent. The decrease is 8 out of the original 80, so 8/80 = 10%.",
      "They should compare 8 to 72 instead.",
      "They should always subtract from 100.",
      "They should divide 80 by 72 and stop."
    ],
    correctIndex:0,
    hint:"Percent decrease compares the change to the original amount.",
    insight:"Misconception: the change number itself is the percent. Principle: divide the change by the original amount. Correct: 10%."
  },
  {
    id:"68-reason-46",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"unit-conversion",
    inattention:false,
    prompt:"A student says 0.75 kilometers equals 75 meters.",
    work:"Student work: 0.75 km = 75 m",
    options:[
      "They moved the decimal the wrong amount. Since 1 kilometer = 1000 meters, 0.75 kilometer = 750 meters.",
      "They should divide by 1000 instead.",
      "They should add 75 and 1000.",
      "They should convert to centimeters first and stop."
    ],
    correctIndex:0,
    hint:"Use the unit relationship 1 km = 1000 m.",
    insight:"Misconception: metric conversion with the wrong place shift. Principle: use the correct unit relationship. Correct: 750 m."
  },
  {
    id:"68-reason-47",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"slope",
    inattention:false,
    prompt:"A student says the slope from (2, 1) to (6, 9) is 14/8.",
    work:"Student work: slope = 14/8",
    options:[
      "They added coordinates instead of finding changes. Slope = (9 - 1) / (6 - 2) = 8/4 = 2.",
      "They should always add x and y first.",
      "They should put x-change over y-change.",
      "They should divide 9 by 6 and stop."
    ],
    correctIndex:0,
    hint:"Slope is change in y over change in x.",
    insight:"Misconception: slope uses raw coordinate totals. Principle: use rise over run. Correct: 2."
  },
  {
    id:"68-reason-48",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"probability",
    inattention:false,
    prompt:"A student says if a bag has 3 red marbles and 2 blue marbles, then the probability of red is 3/2.",
    work:"Student work: P(red) = 3/2",
    options:[
      "They used part-to-part instead of favorable-to-total. There are 3 favorable outcomes out of 5 total, so the probability is 3/5.",
      "They should always divide the larger count by the smaller count.",
      "They should write 2/3 because blue is smaller.",
      "They should add red and blue to get 6."
    ],
    correctIndex:0,
    hint:"Probability compares favorable outcomes to the total number of outcomes.",
    insight:"Misconception: probability written as part-to-part instead of part-to-whole. Principle: use favorable over total. Correct: 3/5."
  },
  {
    id:"68-reason-49",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"part-whole",
    inattention:false,
    prompt:"A student says if 9 out of 15 students brought lunch, then the fraction who brought lunch is 9/6.",
    work:"Student work: lunch fraction = 9/6",
    options:[
      "They compared students who brought lunch to those who did not. Part-to-whole should be 9/15 = 3/5.",
      "They should always subtract first for fractions.",
      "They should turn 6 into 15 by adding 9.",
      "They should write 6/9 because fewer students did not bring lunch."
    ],
    correctIndex:0,
    hint:"The denominator should be the whole group.",
    insight:"Misconception: part-to-part instead of part-to-whole. Principle: use the total group in the denominator. Correct: 3/5."
  },
  {
    id:"68-reason-50",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"area",
    inattention:false,
    prompt:"A student says the area of a parallelogram with base 7 and height 4 is 14 square units.",
    work:"Student work: Area = 7 + 4 = 14 square units",
    options:[
      "They used addition instead of the area formula. Parallelogram area is base x height, so 7 x 4 = 28 square units.",
      "They should divide 7 by 4.",
      "They should double the base only.",
      "They should write 11 because 7 + 4 = 11."
    ],
    correctIndex:0,
    hint:"Area counts square units covering the inside, not distance around the shape.",
    insight:"Misconception: use addition for area. Principle: parallelogram area is base times height. Correct: 28."
  }
  ,
  // FLUENCY PACK 2 - LOGIC 43-50
  {
    id:"68-logic-43",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"A student says, 'If a number is divisible by 4, then it is even, so if a number is even, it must be divisible by 4.'",
    work:"Student work: even means divisible by 4",
    options:[
      "They reversed the statement incorrectly. A counterexample is 10: it is even, but it is not divisible by 4.",
      "They should test only 8 and 12.",
      "They should say all odd numbers are divisible by 4.",
      "They should divide every even number by 4."
    ],
    correctIndex:0,
    hint:"A true statement does not automatically make its reverse true.",
    insight:"Misconception: converse assumed true automatically. Principle: test the reverse with a counterexample. Correct counterexample: 10."
  },
  {
    id:"68-logic-44",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"changing-difference",
    inattention:false,
    prompt:"A student says the next term after 4, 7, 11, 16 is 20.",
    work:"Student work: 4, 7, 11, 16, 20",
    options:[
      "They missed the changing differences. The increases are +3, +4, +5, so next is +6, giving 22.",
      "They should always add 4.",
      "They should double 16.",
      "They should subtract 1."
    ],
    correctIndex:0,
    hint:"Look at how the differences are changing.",
    insight:"Misconception: use a constant-difference rule on a changing-difference pattern. Principle: track the differences. Correct: 22."
  },
  {
    id:"68-logic-45",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"alternating-pattern",
    inattention:false,
    prompt:"A student says the next term after 2, 1, 4, 2, 6, 3 is 4.",
    work:"Student work: 2, 1, 4, 2, 6, 3, 4",
    options:[
      "They missed the alternating pattern. One sequence is 2, 4, 6, so the next term is 8; the other is 1, 2, 3.",
      "They should always keep adding 1.",
      "They should double 3.",
      "They should subtract 2."
    ],
    correctIndex:0,
    hint:"Try separating the terms into odd-position and even-position patterns.",
    insight:"Misconception: force one rule onto an alternating pattern. Principle: separate the interwoven sequences. Correct: 8."
  },
  {
    id:"68-logic-46",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"decimal-comparison",
    inattention:false,
    prompt:"A student says 0.58 is less than 0.6 because 58 is less than 6.",
    work:"Student work: 0.58 < 0.6 because 58 < 6",
    options:[
      "They compared decimals like whole numbers. Rewrite 0.6 as 0.60. Since 0.58 < 0.60, the conclusion is correct but the reasoning is wrong.",
      "They should always choose the shorter decimal.",
      "They should add 58 and 6 first.",
      "They should ignore the decimal point entirely."
    ],
    correctIndex:0,
    hint:"A correct conclusion can still come from bad reasoning.",
    insight:"Reasoning check: right answer, wrong method. Principle: compare decimals by place value, not by whole-number-looking parts."
  },
  {
    id:"68-logic-47",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"classification",
    inattention:false,
    prompt:"A student says every rectangle with four equal sides is a square.",
    work:"Student work: every rectangle with four equal sides is a square",
    options:[
      "This is correct. A rectangle already has four right angles, and if all four sides are equal, it meets the definition of a square.",
      "They should have used a triangle as a counterexample.",
      "They should classify shapes by perimeter only.",
      "They should divide the side lengths to decide."
    ],
    correctIndex:0,
    hint:"Check the exact definitions of rectangle and square.",
    insight:"Reasoning check: correct use of definitions. Principle: a square is a rectangle with four equal sides."
  },
  {
    id:"68-logic-48",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"parity",
    inattention:false,
    prompt:"A student says even x odd is always odd.",
    work:"Student work: even x odd = odd",
    options:[
      "A counterexample is 2 x 3 = 6, which is even. In fact, even times any whole number is even.",
      "They should test only 1 x 3.",
      "They should say even x odd is always prime.",
      "They should add instead of multiply."
    ],
    correctIndex:0,
    hint:"Try a simple example like 2 x 3.",
    insight:"Misconception: guessed parity rule without testing. Principle: test with examples and counterexamples. Correct: even x odd is even."
  },
  {
    id:"68-logic-49",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 9, 16, 25, 36 is 45.",
    work:"Student work: 9, 16, 25, 36, 45",
    options:[
      "They noticed growth but missed the square-number pattern. These are 3^2, 4^2, 5^2, 6^2, so the next term is 7^2 = 49.",
      "They should keep adding 9.",
      "They should double 36.",
      "They should subtract 4."
    ],
    correctIndex:0,
    hint:"Ask whether the terms are tied to a meaningful sequence like square numbers.",
    insight:"Misconception: use a rough difference rule on a structured number pattern. Principle: identify the generating pattern. Correct: 49."
  },
  {
    id:"68-logic-50",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"A student says, 'All numbers ending in 1 are prime.'",
    work:"Student work: all numbers ending in 1 are prime",
    options:[
      "A counterexample is 21. It ends in 1, but it is not prime because 21 = 3 x 7.",
      "They should test only 11 and 31.",
      "They should say all numbers ending in 1 are odd and prime.",
      "They should divide every number ending in 1 by 2."
    ],
    correctIndex:0,
    hint:"One counterexample is enough to disprove an all-statement.",
    insight:"Misconception: overgeneralize from a few examples. Principle: use a counterexample to test an all-statement. Correct counterexample: 21."
  }
  , // OPERATIONS BALANCE PACK — RATIONAL FLUENCY 45-47
  {
    id:"68-op-45",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-multiplication",
    inattention:false,
    prompt:"A student multiplies and gets 3/4 x 8 = 24/4.",
    work:"Student work: 3/4 x 8 = 24/4",
    options:[
      "They multiplied but did not simplify the meaning. Three-fourths of 8 is 6, and 24/4 also simplifies to 6.",
      "They should add 3/4 and 8 instead.",
      "They should divide 8 by 3 only.",
      "They should keep 24/4 because fractions cannot be simplified."
    ],
    correctIndex:0,
    hint:"Think of 3/4 of 8 as splitting 8 into 4 equal parts, then taking 3 parts.",
    insight:"Misconception: fraction multiplication left unsimplified or not interpreted. Principle: multiply, then simplify and interpret. Correct: 6."
  },
  {
    id:"68-op-46",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-decrease",
    inattention:false,
    prompt:"A student says a 25% discount on $80 gives a sale price of $55 because 80 - 25 = 55.",
    work:"Student work: 80 - 25 = 55",
    options:[
      "They subtracted the percent as if it were dollars. First find 25% of 80, which is 20, then subtract: 80 - 20 = 60.",
      "They should add 25 to 80 instead.",
      "They should divide 80 by 25 and stop.",
      "They should say all discounts use the same number as dollars."
    ],
    correctIndex:0,
    hint:"A percent is part of the whole, not a dollar amount by itself.",
    insight:"Misconception: treat percent as a raw number. Principle: convert the percent to a part of the original amount first. Correct sale price: 60."
  },
  {
    id:"68-op-47",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-addition",
    inattention:false,
    prompt:"A student adds decimals and gets 3.8 + 0.45 = 3.125.",
    work:"Student work: 3.8 + 0.45 = 3.125",
    options:[
      "They did not align place values correctly. Write 3.8 as 3.80, then 3.80 + 0.45 = 4.25.",
      "They should multiply the decimals instead.",
      "They should remove the decimal points and keep 125.",
      "They should always put the longer decimal on top and copy all digits."
    ],
    correctIndex:0,
    hint:"Line up ones, tenths, and hundredths before adding.",
    insight:"Misconception: decimal digits combined without place-value alignment. Principle: align decimal places first. Correct: 4.25."
  }
  , // OPERATIONS BALANCE PACK — RATIONAL FLUENCY 48-50
  {
    id:"68-op-48",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"order-of-operations",
    inattention:false,
    prompt:"A student evaluates 18 / (3 + 3) as 18 / 3 + 3 = 9.",
    work:"Student work: 18 / (3 + 3) = 18 / 3 + 3 = 9",
    options:[
      "They ignored the parentheses. Compute inside first: 3 + 3 = 6, then 18 / 6 = 3.",
      "They should always divide before using parentheses.",
      "They should add 18 and 3 first.",
      "They should multiply 3 and 3."
    ],
    correctIndex:0,
    hint:"Parentheses tell you what must be done first.",
    insight:"Misconception: order of operations ignores grouping symbols. Principle: evaluate parentheses before division. Correct: 3."
  },
  {
    id:"68-op-49",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-division",
    inattention:false,
    prompt:"A student computes 1/2 ÷ 1/4 = 1/8.",
    work:"Student work: 1/2 ÷ 1/4 = 1/8",
    options:[
      "They treated division like multiplication. The question asks how many fourths fit into one-half. Two fourths fit, so the answer is 2.",
      "They should add the fractions instead.",
      "They should keep the denominator 8 because 2 x 4 = 8.",
      "They should always make division answers smaller."
    ],
    correctIndex:0,
    hint:"Ask how many 1/4-size pieces are in 1/2.",
    insight:"Misconception: divide fractions by multiplying straight across. Principle: interpret division as how many groups fit. Correct: 2."
  },
  {
    id:"68-op-50",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"integer-sign",
    inattention:false,
    prompt:"A student says -3 x 5 = 15 because 3 x 5 = 15.",
    work:"Student work: -3 x 5 = 15",
    options:[
      "They ignored the sign rule. A negative times a positive is negative, so -3 x 5 = -15.",
      "They should make every product positive.",
      "They should add 3 and 5 first.",
      "They should divide 15 by -3."
    ],
    correctIndex:0,
    hint:"Different signs in multiplication give a negative product.",
    insight:"Misconception: multiply magnitudes but ignore signs. Principle: use the sign rule after multiplying. Correct: -15."
  }
  , // RATIONAL EQUIVALENCE PACK — 151-153
  {
    id:"68-op-51",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-decimal-conversion",
    inattention:false,
    prompt:"A student says 0.25 of 80 means 0.25% of 80, so the answer is 0.2.",
    work:"Student work: 0.25 of 80 = 0.25% of 80 = 0.2",
    options:[
      "They confused a decimal with a percent. 0.25 means 25%, so 0.25 x 80 = 20.",
      "They should add 0.25 to 80 instead.",
      "They should divide 80 by 25 and stop.",
      "They should move the decimal two places right and get 200."
    ],
    correctIndex:0,
    hint:"0.25 = 25/100 = 25%, not 0.25%.",
    insight:"Misconception: decimal and percent are treated as the same written form. Principle: convert carefully—0.25 equals 25%. Correct: 20."
  },
  {
    id:"68-reason-51",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equivalent-forms",
    inattention:false,
    prompt:"Which statement is correct?",
    work:"Compare these forms of the same amount.",
    options:[
      "1/2, 0.5, and 50% all represent the same value.",
      "1/2 is greater than 0.5 because fractions are written differently.",
      "50% is greater than 1/2 because 50 is greater than 1.",
      "0.5 is less than 1/2 because decimals are always smaller than fractions."
    ],
    correctIndex:0,
    hint:"Think of each as half of a whole.",
    insight:"Misconception: different forms mean different sizes. Principle: equivalent fractions, decimals, and percents can name the same value."
  },
  {
    id:"68-logic-51",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"false-generalization",
    inattention:false,
    prompt:"A student says, 'A percent is always bigger than the matching decimal because 40 is bigger than 0.40.' What is the best response?",
    work:"Claim: 40% > 0.40 because 40 > 0.40",
    options:[
      "The claim is false because 40% means 40/100, which equals 0.40.",
      "The claim is true because whole numbers are always larger.",
      "The claim is true because percents always increase values.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Percent means 'out of 100.'",
    insight:"Misconception: the percent symbol is ignored. Principle: 40% = 40/100 = 0.40."
  }
  , // RATIONAL EQUIVALENCE PACK — 154-156
  {
    id:"68-op-52",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-percent-conversion",
    inattention:false,
    prompt:"A student says 3/4 = 34% because the numerator is 3 and the denominator is 4.",
    work:"Student work: 3/4 = 34%",
    options:[
      "They joined the digits instead of finding the value. 3/4 = 0.75 = 75%.",
      "They should say 3/4 = 12%.",
      "They should always multiply 3 and 4 to get the percent.",
      "They should keep 34% because fractions and percents are unrelated."
    ],
    correctIndex:0,
    hint:"Turn 3/4 into a decimal first.",
    insight:"Misconception: fraction digits are concatenated into a percent. Principle: convert the fraction by division or known equivalence. Correct: 75%."
  },
  {
    id:"68-reason-52",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"benchmark-comparison",
    inattention:false,
    prompt:"Which value is greatest?",
    work:"Compare 45%, 0.5, and 2/5.",
    options:[
      "0.5",
      "45%",
      "2/5",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Rewrite each in the same form: 45% = 0.45 and 2/5 = 0.4.",
    insight:"Misconception: mixed forms are hard to compare unless converted. Principle: compare by rewriting in a common form. Greatest: 0.5."
  },
  {
    id:"68-logic-52",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"always-never-statement",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Choose the logically valid statement.",
    options:[
      "If two numbers are equivalent forms of the same amount, they name the same value even if they look different.",
      "Any percent is greater than any decimal.",
      "Any fraction is less than any percent.",
      "Different forms always mean different answers."
    ],
    correctIndex:0,
    hint:"Equivalent forms are just different names for the same quantity.",
    insight:"Misconception: visual form determines size. Principle: equivalent representations preserve value."
  }
  , // PERCENT-FRACTION-DECIMAL TRANSFER PACK — 157-159
  {
    id:"68-op-53",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-of-quantity",
    inattention:false,
    prompt:"A student says 12.5% of 64 is 12.5 x 64 = 800.",
    work:"Student work: 12.5% of 64 = 12.5 x 64 = 800",
    options:[
      "They forgot that 12.5% means 0.125. So 0.125 x 64 = 8.",
      "They should divide 12.5 by 64 and get 0.1953125.",
      "They should add 12.5 and 64 instead.",
      "They should move the decimal right and get 80."
    ],
    correctIndex:0,
    hint:"Percent means divide by 100 first.",
    insight:"Misconception: percent is treated like a whole-number multiplier. Principle: convert percent to a decimal before multiplying. Correct: 8."
  },
  {
    id:"68-reason-53",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"benchmark-comparison",
    inattention:false,
    prompt:"Which value is closest to 1?",
    work:"Compare 95%, 0.9, 9/10, and 11/10.",
    options:[
      "95%",
      "0.9",
      "9/10",
      "11/10"
    ],
    correctIndex:0,
    hint:"Rewrite each near 1: 95% = 0.95, 0.9 = 0.90, 9/10 = 0.90, 11/10 = 1.10.",
    insight:"Misconception: mixed forms block comparison. Principle: convert to a common form and compare distance from 1. Closest: 0.95."
  },
  {
    id:"68-logic-53",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"false-equivalence-claim",
    inattention:false,
    prompt:"A student says, '0.8, 80%, and 8/100 all mean the same thing because they all use the digit 8.' What is the best response?",
    work:"Claim: 0.8 = 80% = 8/100",
    options:[
      "The claim is false because 0.8 = 80% = 8/10, but 8/100 = 0.08.",
      "The claim is true because matching digits always mean matching values.",
      "The claim is true because decimals, fractions, and percents are interchangeable without checking place value.",
      "The claim cannot be tested."
    ],
    correctIndex:0,
    hint:"Check place value in each form.",
    insight:"Misconception: same digits imply same value. Principle: representation depends on place value and denominator size. 0.8 = 8/10 = 80%, not 8/100."
  }
  , // PERCENT-FRACTION-DECIMAL TRANSFER PACK — 160-162
  {
    id:"68-op-54",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-to-percent-conversion",
    inattention:false,
    prompt:"A student says 0.07 = 7 because you move the decimal two places right.",
    work:"Student work: 0.07 = 7",
    options:[
      "They forgot the percent sign. 0.07 = 7%, not 7.",
      "They should move the decimal one place left and get 0.007.",
      "They should add 7 and 0.07.",
      "They should say 0.07 = 70."
    ],
    correctIndex:0,
    hint:"Moving the decimal two places right gives a percent.",
    insight:"Misconception: decimal-to-percent conversion is done without preserving the unit. Principle: 0.07 becomes 7%, not 7."
  },
  {
    id:"68-reason-54",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equivalent-forms-ordering",
    inattention:false,
    prompt:"Put these in order from least to greatest: 3/5, 62%, 0.58.",
    work:"Compare 3/5, 62%, and 0.58.",
    options:[
      "0.58, 3/5, 62%",
      "3/5, 0.58, 62%",
      "62%, 3/5, 0.58",
      "0.58, 62%, 3/5"
    ],
    correctIndex:0,
    hint:"Rewrite them in decimals: 3/5 = 0.6 and 62% = 0.62.",
    insight:"Misconception: mixed forms cannot be ordered reliably. Principle: convert to a common form. 0.58 < 0.60 < 0.62."
  },
  {
    id:"68-logic-54",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"invalid-rule",
    inattention:false,
    prompt:"A student says, 'To compare any fraction and percent, just compare the top number of the fraction to the percent number.' Why is this wrong?",
    work:"Claim: compare numerator only",
    options:[
      "Because the denominator matters. For example, 3/4 = 75%, not 3%.",
      "Because fractions can never be compared to percents.",
      "Because percents are always larger than fractions.",
      "Because numerators are never useful."
    ],
    correctIndex:0,
    hint:"A fraction's value depends on both numerator and denominator.",
    insight:"Misconception: numerator alone determines fraction size. Principle: the whole fraction must be interpreted before comparison."
  }
  , // BENCHMARK COMPARISON PACK — 163-165
  {
    id:"68-op-55",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-estimation",
    inattention:false,
    prompt:"A student says 150% of 20 must be 10 because 50% of 20 is 10.",
    work:"Student work: 150% of 20 = 10",
    options:[
      "They found only 50% of 20. Since 150% = 100% + 50%, the answer is 20 + 10 = 30.",
      "They should divide 20 by 150.",
      "They should move the decimal and get 2.",
      "They should subtract 50% from 100% and get 0."
    ],
    correctIndex:0,
    hint:"Break 150% into 100% and 50%.",
    insight:"Misconception: 150% is treated like 50% only. Principle: values above 100% are more than the whole. Correct: 30."
  },
  {
    id:"68-reason-55",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"benchmark-comparison",
    inattention:false,
    prompt:"Which value is less than 1/2?",
    work:"Compare 49%, 0.5, 1/2, and 51%.",
    options:[
      "49%",
      "0.5",
      "1/2",
      "51%"
    ],
    correctIndex:0,
    hint:"Remember that 1/2 = 0.5 = 50%.",
    insight:"Misconception: nearby benchmark values get blurred together. Principle: compare each to 50%. Only 49% is less than 1/2."
  },
  {
    id:"68-logic-55",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"overgeneralization",
    inattention:false,
    prompt:"A student says, 'Any number written as a percent must be less than 1.' What is the best response?",
    work:"Claim: all percents are less than 1",
    options:[
      "The claim is false because percents can be greater than 100%, such as 150%, which equals 1.5.",
      "The claim is true because percent means part of a whole.",
      "The claim is true because decimals are the only numbers above 1.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Think about 125% or 150%.",
    insight:"Misconception: percent is assumed to stay below 100. Principle: percents can exceed 100% and then represent values greater than 1."
  }
  , // BENCHMARK COMPARISON PACK — 166-168
  {
    id:"68-op-56",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-greater-than-100",
    inattention:false,
    prompt:"A student says 125% of 40 must be 5 because 25% of 40 is 10 and they subtract instead of add.",
    work:"Student work: 125% of 40 = 5",
    options:[
      "They used the extra 25% in the wrong direction. Since 125% = 100% + 25%, the answer is 40 + 10 = 50.",
      "They should divide 40 by 125.",
      "They should move the decimal left and get 0.5.",
      "They should say 125% always means half."
    ],
    correctIndex:0,
    hint:"125% is more than the whole, not less.",
    insight:"Misconception: percents above 100% are handled like a discount. Principle: 125% = 100% + 25%. Correct: 50."
  },
  {
    id:"68-reason-56",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"benchmark-comparison",
    inattention:false,
    prompt:"Which value is greatest?",
    work:"Compare 99%, 1, and 101%.",
    options:[
      "101%",
      "1",
      "99%",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Rewrite in decimals: 99% = 0.99 and 101% = 1.01.",
    insight:"Misconception: percent form can hide values just below or above 1. Principle: convert to decimals to compare. Greatest: 101%."
  },
  {
    id:"68-logic-56",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"false-benchmark-claim",
    inattention:false,
    prompt:"A student says, 'Anything less than 100% must be less than 1/2.' What is the best response?",
    work:"Claim: if percent < 100, then value < 1/2",
    options:[
      "The claim is false because 75% is less than 100% but greater than 1/2.",
      "The claim is true because all percents are small numbers.",
      "The claim is true because 100% is the only benchmark that matters.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Test the rule with a percent between 50% and 100%.",
    insight:"Misconception: all values below 100% are treated as small. Principle: compare against the correct benchmark. 75% disproves the claim."
  }
  , // FASTER MODE PACK — 169-180
  {
    id:"68-op-57",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"ten-percent-strategy",
    inattention:false,
    prompt:"A student says 10% of 250 is 250 because you just add a zero for 10%.",
    work:"Student work: 10% of 250 = 250",
    options:[
      "They confused multiplying by 10 with finding 10%. Ten percent means 0.10 x 250 = 25.",
      "They should divide 10 by 250.",
      "They should add 10 to 250.",
      "They should move the decimal right and get 2500."
    ],
    correctIndex:0,
    hint:"Ten percent is one tenth of the number.",
    insight:"Misconception: 10% is treated like times 10. Principle: 10% means 10/100 = 1/10. Correct: 25."
  },
  {
    id:"68-reason-57",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equivalent-forms-comparison",
    inattention:false,
    prompt:"Which value is greatest?",
    work:"Compare 24%, 0.25, and 1/4.",
    options:[
      "0.25 and 1/4 are tied for greatest",
      "24%",
      "0.25 only",
      "1/4 only"
    ],
    correctIndex:0,
    hint:"Rewrite them in decimals: 24% = 0.24 and 1/4 = 0.25.",
    insight:"Misconception: different forms look unrelated. Principle: convert to a common form. 0.25 and 1/4 are equal and both exceed 24%."
  },
  {
    id:"68-logic-57",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"digit-matching-fallacy",
    inattention:false,
    prompt:"A student says, '0.6 and 6% are equivalent because both use the digit 6.' What is the best response?",
    work:"Claim: 0.6 = 6%",
    options:[
      "The claim is false because 0.6 = 60%, while 6% = 0.06.",
      "The claim is true because matching digits always mean matching values.",
      "The claim is true because all percents are decimals.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Check the place value and the percent sign.",
    insight:"Misconception: same digits imply same value. Principle: place value and notation matter. 0.6 = 60%, not 6%."
  },

  {
    id:"68-op-58",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"half-percent-benchmark",
    inattention:false,
    prompt:"A student says 50% of 36 is 36 because 50 is a big number.",
    work:"Student work: 50% of 36 = 36",
    options:[
      "They ignored that 50% means one half. Half of 36 is 18.",
      "They should multiply 50 x 36.",
      "They should add 50 to 36.",
      "They should divide 36 by 50 and stop."
    ],
    correctIndex:0,
    hint:"Fifty percent means one half.",
    insight:"Misconception: percent size is judged by the numeral alone. Principle: 50% = 1/2. Correct: 18."
  },
  {
    id:"68-reason-58",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"ordering-equivalent-forms",
    inattention:false,
    prompt:"Put these in order from least to greatest: 3/10, 28%, 0.32.",
    work:"Compare 3/10, 28%, and 0.32.",
    options:[
      "28%, 3/10, 0.32",
      "3/10, 28%, 0.32",
      "0.32, 28%, 3/10",
      "28%, 0.32, 3/10"
    ],
    correctIndex:0,
    hint:"Rewrite them in decimals: 3/10 = 0.30 and 28% = 0.28.",
    insight:"Misconception: mixed forms are hard to order by sight. Principle: convert to a common form. 0.28 < 0.30 < 0.32."
  },
  {
    id:"68-logic-58",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"invalid-comparison-rule",
    inattention:false,
    prompt:"A student says, 'To compare a decimal and a percent, just ignore the percent sign.' Why is this wrong?",
    work:"Claim: ignore the percent sign",
    options:[
      "Because the percent sign changes the value. For example, 0.4 and 40% are equal, but 40 is not.",
      "Because decimals and percents can never be compared.",
      "Because the percent sign means multiply by 100 every time.",
      "Because percents are always larger than decimals."
    ],
    correctIndex:0,
    hint:"Try checking 40%, 0.4, and 40.",
    insight:"Misconception: notation is treated as decoration. Principle: the percent sign changes the number’s value."
  },

  {
    id:"68-op-59",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"quarter-percent-benchmark",
    inattention:false,
    prompt:"A student says 25% of 80 is 80 ÷ 25 = 3.2.",
    work:"Student work: 25% of 80 = 80 ÷ 25 = 3.2",
    options:[
      "They used the percent number as a divisor instead of recognizing that 25% = 1/4. One fourth of 80 is 20.",
      "They should add 25 to 80.",
      "They should multiply 25 x 80.",
      "They should move the decimal two places right and get 800."
    ],
    correctIndex:0,
    hint:"Twenty-five percent is one fourth.",
    insight:"Misconception: percent-of is replaced with divide by the percent number. Principle: use known benchmark equivalences. Correct: 20."
  },
  {
    id:"68-reason-59",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"distance-from-one-benchmark",
    inattention:false,
    prompt:"Which value is closest to 1/2?",
    work:"Compare 48%, 0.52, 1/2, and 5/8.",
    options:[
      "1/2",
      "48%",
      "0.52",
      "5/8"
    ],
    correctIndex:0,
    hint:"Remember 1/2 = 0.5 = 50%.",
    insight:"Misconception: nearby forms can blur together. Principle: compare distance from 0.5. Exact match: 1/2."
  },
  {
    id:"68-logic-59",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"always-never-percent-rule",
    inattention:false,
    prompt:"A student says, 'Any decimal less than 1 is less than any percent.' What is the best response?",
    work:"Claim: any decimal < 1 is less than any percent",
    options:[
      "The claim is false because 0.8 is greater than 5%, since 5% = 0.05.",
      "The claim is true because decimals less than 1 are always tiny.",
      "The claim is true because percents are whole numbers.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Test the claim with 0.8 and 5%.",
    insight:"Misconception: categories are compared instead of values. Principle: convert and compare actual quantities."
  },

  {
    id:"68-op-60",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-increase-benchmark",
    inattention:false,
    prompt:"A student says increasing 40 by 50% means 40 - 20 = 20 because they used subtraction.",
    work:"Student work: increase 40 by 50% = 20",
    options:[
      "They used the wrong operation. Increasing by 50% means add half of 40, so 40 + 20 = 60.",
      "They should divide 40 by 50.",
      "They should move the decimal and get 4.",
      "They should always subtract when a percent appears."
    ],
    correctIndex:0,
    hint:"Increase means add, not subtract.",
    insight:"Misconception: percent change direction is ignored. Principle: a 50% increase adds half the original amount. Correct: 60."
  },
  {
    id:"68-reason-60",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"greater-than-one-comparison",
    inattention:false,
    prompt:"Which value is greater than 1?",
    work:"Compare 95%, 0.99, 101%, and 9/10.",
    options:[
      "101%",
      "95%",
      "0.99",
      "9/10"
    ],
    correctIndex:0,
    hint:"Rewrite in decimals: 101% = 1.01.",
    insight:"Misconception: percent form can hide values above 1. Principle: convert to decimals when comparing to 1. Only 101% is greater than 1."
  },
  {
    id:"68-logic-60",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"false-equivalence-statement",
    inattention:false,
    prompt:"A student says, 'If two values are both less than 1, then they must be equivalent.' Why is this wrong?",
    work:"Claim: both less than 1 means equivalent",
    options:[
      "Because many different values are less than 1. For example, 0.2 and 0.8 are both less than 1 but not equal.",
      "Because values less than 1 cannot be compared.",
      "Because any two fractions less than 1 are equal.",
      "Because being less than 1 means the same as being 50%."
    ],
    correctIndex:0,
    hint:"Less than 1 is a range, not a single value.",
    insight:"Misconception: sharing a broad property is mistaken for equality. Principle: equivalent numbers must have the same exact value, not just the same category."
  }
  , // PERCENT CHANGE PACK — 181-192
  {
    id:"68-op-61",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-decrease",
    inattention:false,
    prompt:"A student says decreasing 80 by 25% means 80 - 25 = 55.",
    work:"Student work: decrease 80 by 25% = 55",
    options:[
      "They subtracted 25 instead of 25% of 80. Since 25% of 80 is 20, the result is 60.",
      "They should add 25 to 80.",
      "They should divide 80 by 25 and stop.",
      "They should multiply 80 by 25."
    ],
    correctIndex:0,
    hint:"Find the percent of the original amount first.",
    insight:"Misconception: the percent number is subtracted directly. Principle: 25% of 80 is 20, so the decrease gives 60."
  },
  {
    id:"68-reason-61",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"sale-price-comparison",
    inattention:false,
    prompt:"An item costs $50 and is on sale for 20% off. Which sale price is correct?",
    work:"Compare the possible sale prices.",
    options:[
      "$40",
      "$30",
      "$45",
      "$20"
    ],
    correctIndex:0,
    hint:"Twenty percent of 50 is 10, so subtract 10.",
    insight:"Misconception: sale discounts are guessed rather than calculated. Principle: 20% of 50 is 10, so the new price is 40."
  },
  {
    id:"68-logic-61",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"wrong-operation-rule",
    inattention:false,
    prompt:"A student says, 'Whenever you see a percent decrease, just subtract the percent number.' Why is this wrong?",
    work:"Claim: subtract the percent number itself",
    options:[
      "Because the percent must be taken of the original amount first. A 20% decrease from 70 is 14, not 20.",
      "Because percent decrease always means add.",
      "Because percents cannot be used with subtraction.",
      "Because percent decrease only works with fractions."
    ],
    correctIndex:0,
    hint:"Use 20% of 70 as a test case.",
    insight:"Misconception: the percent number is treated like an amount. Principle: percent change is based on the original value."
  },

  {
    id:"68-op-62",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-increase",
    inattention:false,
    prompt:"A student says increasing 90 by 10% means 90 + 10 = 100.",
    work:"Student work: increase 90 by 10% = 100",
    options:[
      "They added 10 instead of 10% of 90. Since 10% of 90 is 9, the result is 99.",
      "They should subtract 10 from 90.",
      "They should divide 90 by 10.",
      "They should multiply 90 by 10 and keep 900."
    ],
    correctIndex:0,
    hint:"Ten percent of 90 is not 10.",
    insight:"Misconception: the percent number is added directly. Principle: 10% of 90 is 9, so the increase gives 99."
  },
  {
    id:"68-reason-62",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"percent-change-comparison",
    inattention:false,
    prompt:"Which is the greatest final value?",
    work:"Start with 100 in each case: increase by 5%, decrease by 5%, keep the same, or increase by 2%.",
    options:[
      "Increase by 5%",
      "Keep the same",
      "Increase by 2%",
      "Decrease by 5%"
    ],
    correctIndex:0,
    hint:"Compare the final amounts: 105, 100, 102, and 95.",
    insight:"Misconception: small percent changes can be hard to compare mentally. Principle: translate each change into a final amount."
  },
  {
    id:"68-logic-62",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"false-cancellation-claim",
    inattention:false,
    prompt:"A student says, 'A 10% increase and a 10% decrease always cancel each other out.' What is the best response?",
    work:"Claim: +10% and -10% cancel",
    options:[
      "The claim is false because the second percent is taken on a different amount. Starting at 100 gives 110, then 99.",
      "The claim is true because opposite signs always cancel exactly.",
      "The claim is true because percents ignore the starting value.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Try the claim with a starting value of 100.",
    insight:"Misconception: opposite percent changes are assumed to undo perfectly. Principle: each percent is based on the current amount, not always the original."
  },

  {
    id:"68-op-63",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"discount-from-original",
    inattention:false,
    prompt:"A student says a 30% discount on $70 means the new price is $30.",
    work:"Student work: 30% off 70 = 30",
    options:[
      "They used the discount amount as the final price. Since 30% of 70 is 21, the new price is 49.",
      "They should add 30 to 70.",
      "They should divide 70 by 30 and stop.",
      "They should say the new price is 21."
    ],
    correctIndex:0,
    hint:"First find the discount, then subtract it from the original price.",
    insight:"Misconception: the discount amount is mistaken for the sale price. Principle: 30% of 70 is 21, and 70 - 21 = 49."
  },
  {
    id:"68-reason-63",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"markup-comparison",
    inattention:false,
    prompt:"A shirt costs $40. Which markup gives the largest final price?",
    work:"Compare markups of 10%, 25%, 50%, and 5%.",
    options:[
      "50%",
      "25%",
      "10%",
      "5%"
    ],
    correctIndex:0,
    hint:"The largest percent increase gives the largest final price when the original price is the same.",
    insight:"Misconception: percent changes may be compared without connecting to the same base. Principle: with the same original amount, the largest markup produces the largest result."
  },
  {
    id:"68-logic-63",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"same-percent-same-change-fallacy",
    inattention:false,
    prompt:"A student says, 'A 20% increase always adds 20 no matter what the starting number is.' Why is this wrong?",
    work:"Claim: 20% increase always adds 20",
    options:[
      "Because 20% depends on the starting number. Twenty percent of 50 is 10, but 20% of 200 is 40.",
      "Because 20% is always less than 1.",
      "Because increase means subtract.",
      "Because percents never describe change."
    ],
    correctIndex:0,
    hint:"Compare 20% of two different starting values.",
    insight:"Misconception: percent change is treated like a fixed amount. Principle: percent is relative to the original quantity."
  },

  {
    id:"68-op-64",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"tax-addition",
    inattention:false,
    prompt:"A student says adding 8% tax to $25 means $25.08.",
    work:"Student work: 25 with 8% tax = 25.08",
    options:[
      "They treated 8% like 8 cents. Since 8% of 25 is 2, the total is 27.",
      "They should subtract 8 from 25.",
      "They should move the decimal and get 2508.",
      "They should keep 25 because tax does not change the total."
    ],
    correctIndex:0,
    hint:"Find 8% of 25 first.",
    insight:"Misconception: percent is confused with hundredths of a dollar. Principle: 8% of 25 is 2, so the taxed total is 27."
  },
  {
    id:"68-reason-64",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"increase-vs-decrease",
    inattention:false,
    prompt:"Which change makes the final amount smallest, starting from the same original value?",
    work:"Compare +15%, -15%, +5%, and no change.",
    options:[
      "Decrease by 15%",
      "No change",
      "Increase by 5%",
      "Increase by 15%"
    ],
    correctIndex:0,
    hint:"Think about what each change does to the original amount.",
    insight:"Misconception: all percent changes are not equally directional. Principle: the largest decrease gives the smallest final value."
  },
  {
    id:"68-logic-64",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"greater-percent-always-greater-result",
    inattention:false,
    prompt:"A student says, 'A 50% discount is always a bigger dollar savings than a 25% discount.' What is the best response?",
    work:"Claim: bigger percent always means bigger dollar savings",
    options:[
      "The claim is not always true across different original prices. Twenty-five percent of a large price can be more dollars than 50% of a small price.",
      "The claim is always true because 50 is greater than 25.",
      "The claim is always false because discounts do not affect dollars.",
      "The claim cannot be checked in any situation."
    ],
    correctIndex:0,
    hint:"Compare 25% of 200 with 50% of 20.",
    insight:"Misconception: percent size is compared without considering the base amount. Principle: dollar change depends on both percent and original value."
  }
  , // RATIO AND RATE TRANSFER PACK — 193-204
  {
    id:"68-op-65",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"unit-rate-scaling",
    inattention:false,
    prompt:"A student says if 3 notebooks cost $6, then 1 notebook costs $3 because 6 is twice 3.",
    work:"Student work: 3 notebooks cost $6, so 1 notebook costs $3",
    options:[
      "They should divide total cost by total notebooks. Since 6 ÷ 3 = 2, one notebook costs $2.",
      "They should add 3 and 6.",
      "They should say one notebook costs $6.",
      "They should multiply 3 by 6."
    ],
    correctIndex:0,
    hint:"Unit rate means per 1 item.",
    insight:"Misconception: ratio comparison replaces actual division. Principle: divide total by number of items to find the unit rate. Correct: $2 per notebook."
  },
  {
    id:"68-reason-65",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"rate-comparison",
    inattention:false,
    prompt:"Which is the better deal?",
    work:"Option A: 4 cans for $8. Option B: 6 cans for $15.",
    options:[
      "Option A",
      "Option B",
      "They cost the same per can",
      "There is not enough information"
    ],
    correctIndex:0,
    hint:"Compare cost per can: 8 ÷ 4 and 15 ÷ 6.",
    insight:"Misconception: larger bundle size is assumed better. Principle: compare unit rates. Option A is $2 per can; Option B is $2.50 per can."
  },
  {
    id:"68-logic-65",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"bigger-number-better-deal",
    inattention:false,
    prompt:"A student says, '6 for $15 is a better deal than 4 for $8 because 6 is more than 4.' Why is this wrong?",
    work:"Claim: more items automatically means better deal",
    options:[
      "Because the price also matters. A better deal depends on the unit rate, not just the item count.",
      "Because 6 is actually less than 4.",
      "Because deals can only be compared with percentages.",
      "Because bundles cannot be compared."
    ],
    correctIndex:0,
    hint:"Look at cost per 1 item.",
    insight:"Misconception: larger quantity is confused with better value. Principle: compare the cost for one item, not just the bundle size."
  },

  {
    id:"68-op-66",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"scale-factor",
    inattention:false,
    prompt:"A student says if 5 miles takes 10 minutes, then 10 miles takes 15 minutes because they added 5 minutes.",
    work:"Student work: 5 miles in 10 min, so 10 miles in 15 min",
    options:[
      "They should use the same scale factor. Doubling 5 miles to 10 miles doubles 10 minutes to 20 minutes.",
      "They should subtract 5 minutes.",
      "They should keep 10 minutes the same.",
      "They should divide 10 by 5 and stop."
    ],
    correctIndex:0,
    hint:"If one quantity doubles, the matching quantity must also double in a proportional relationship.",
    insight:"Misconception: random additive change is used instead of proportional scaling. Principle: equal scale factors preserve ratios. Correct: 20 minutes."
  },
  {
    id:"68-reason-66",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"proportional-pair",
    inattention:false,
    prompt:"Which pair is proportional to 2 apples for $3?",
    work:"Compare these options to 2 for $3.",
    options:[
      "4 apples for $6",
      "4 apples for $5",
      "6 apples for $8",
      "3 apples for $6"
    ],
    correctIndex:0,
    hint:"Multiply both parts of 2:3 by the same number.",
    insight:"Misconception: near matches are mistaken for exact proportional pairs. Principle: both parts must scale by the same factor."
  },
  {
    id:"68-logic-66",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"additive-vs-multiplicative",
    inattention:false,
    prompt:"A student says, 'To keep ratios equivalent, just add the same number to both terms.' What is the best response?",
    work:"Claim: add the same number to both parts",
    options:[
      "The claim is false because equivalent ratios are made by multiplying or dividing both terms by the same factor, not by adding.",
      "The claim is true for all ratios.",
      "The claim is true because addition is easier than multiplication.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Compare 2:3 with 4:5 and 4:6.",
    insight:"Misconception: additive thinking replaces multiplicative structure. Principle: equivalent ratios come from a common scale factor."
  },

  {
    id:"68-op-67",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"rate-multiplication",
    inattention:false,
    prompt:"A student says if a car travels 60 miles in 1 hour, then in 3 hours it travels 63 miles because they added 3.",
    work:"Student work: 60 miles in 1 hour, so 3 hours = 63 miles",
    options:[
      "They should multiply the rate by the number of hours. Since 60 x 3 = 180, the car travels 180 miles.",
      "They should divide 60 by 3.",
      "They should add 60 and 3 only once.",
      "They should keep 60 miles."
    ],
    correctIndex:0,
    hint:"A constant rate means repeated equal amounts.",
    insight:"Misconception: additive change is used where repeated multiplication is needed. Principle: distance = rate × time. Correct: 180 miles."
  },
  {
    id:"68-reason-67",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"unit-rate-choice",
    inattention:false,
    prompt:"Which rate is fastest?",
    work:"Compare 100 miles in 2 hours, 90 miles in 1.5 hours, and 45 miles in 1 hour.",
    options:[
      "90 miles in 1.5 hours",
      "100 miles in 2 hours",
      "45 miles in 1 hour",
      "They are all the same"
    ],
    correctIndex:0,
    hint:"Compare miles per hour: 50, 60, and 45.",
    insight:"Misconception: bigger total distance is assumed faster. Principle: compare unit rates. Fastest: 60 miles per hour."
  },
  {
    id:"68-logic-67",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"wrong-comparison-focus",
    inattention:false,
    prompt:"A student says, '100 miles in 2 hours is fastest because 100 is the biggest number.' Why is this wrong?",
    work:"Claim: biggest distance means fastest",
    options:[
      "Because speed depends on distance per unit of time, not distance alone.",
      "Because 100 is not bigger than 90.",
      "Because hours do not affect speed.",
      "Because only smaller numbers can be fast."
    ],
    correctIndex:0,
    hint:"Speed compares two quantities together.",
    insight:"Misconception: one part of a rate is used without the other. Principle: rate comparisons require both quantities."
  },

  {
    id:"68-op-68",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"ratio-to-fraction",
    inattention:false,
    prompt:"A student says a ratio of 2 red marbles to 3 blue marbles means red is 2/3 of the total.",
    work:"Student work: red:blue = 2:3, so red is 2/3 of all marbles",
    options:[
      "They used part-to-part as part-to-whole. There are 5 total marbles, so red is 2/5 of the total.",
      "They should say red is 3/2 of the total.",
      "They should keep 2/3 because ratios are always fractions of the whole.",
      "They should add 2 and 3 and get 6."
    ],
    correctIndex:0,
    hint:"Total marbles means combine both parts first.",
    insight:"Misconception: part-to-part ratios are confused with part-to-whole fractions. Principle: use the total when finding a fraction of the whole."
  },
  {
    id:"68-reason-68",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"part-to-whole-interpretation",
    inattention:false,
    prompt:"In a class with boys:girls = 3:5, what fraction of the class are boys?",
    work:"Use the ratio 3:5.",
    options:[
      "3/8",
      "3/5",
      "5/3",
      "5/8"
    ],
    correctIndex:0,
    hint:"There are 3 + 5 = 8 total parts.",
    insight:"Misconception: part-to-part is treated as part-to-whole. Principle: the whole includes all parts. Boys are 3/8 of the class."
  },
  {
    id:"68-logic-68",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"ratio-fraction-conflation",
    inattention:false,
    prompt:"A student says, 'Any ratio a:b means a/b of the whole.' What is the best response?",
    work:"Claim: a:b always means a/b of the whole",
    options:[
      "The claim is false because a:b is usually part-to-part. The fraction of the whole would be a/(a+b).",
      "The claim is true for every ratio.",
      "The claim is true because colons and fraction bars mean the same thing in all cases.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Ask whether the ratio compares a part to another part or a part to the whole.",
    insight:"Misconception: all ratios are interpreted as fractions of the whole. Principle: part-to-part and part-to-whole comparisons are different structures."
  }
  , // PROPORTION AND CONSTANT OF PROPORTIONALITY PACK — 205-216
  {
    id:"68-op-69",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"unit-rate-from-table",
    inattention:false,
    prompt:"A student says if 4 tickets cost $28, then 1 ticket costs $24 because they subtracted 4 from 28.",
    work:"Student work: 4 tickets cost $28, so 1 ticket costs $24",
    options:[
      "They should divide total cost by total tickets. Since 28 ÷ 4 = 7, one ticket costs $7.",
      "They should add 4 and 28.",
      "They should keep $28 as the unit price.",
      "They should multiply 4 by 28."
    ],
    correctIndex:0,
    hint:"A unit rate tells the amount for 1.",
    insight:"Misconception: subtraction is used instead of division to find a unit rate. Principle: divide total amount by number of units. Correct: $7 per ticket."
  },
  {
    id:"68-reason-69",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"proportional-table-choice",
    inattention:false,
    prompt:"Which table shows a proportional relationship?",
    work:"A: (2,6), (4,12), (6,18)   B: (2,6), (4,11), (6,18)",
    options:[
      "Table A",
      "Table B",
      "Both tables",
      "Neither table"
    ],
    correctIndex:0,
    hint:"In a proportional relationship, the ratio y/x stays constant.",
    insight:"Misconception: near-patterns are mistaken for proportionality. Principle: a proportional table has the same multiplier each time."
  },
  {
    id:"68-logic-69",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"same-difference-fallacy",
    inattention:false,
    prompt:"A student says, 'If both columns go up by the same difference each row, the relationship must be proportional.' Why is this wrong?",
    work:"Claim: same differences guarantee proportionality",
    options:[
      "Because proportional relationships depend on equal scale factors or constant ratios, not just equal differences.",
      "Because differences are never useful.",
      "Because proportional relationships cannot be shown in tables.",
      "Because only fractions can be proportional."
    ],
    correctIndex:0,
    hint:"Check whether y/x stays the same, not just whether values increase regularly.",
    insight:"Misconception: additive patterns replace multiplicative structure. Principle: proportionality is about constant ratios, not equal jumps."
  },

  {
    id:"68-op-70",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"missing-value-proportion",
    inattention:false,
    prompt:"A student says if 3 folders cost $12, then 5 folders cost $17 because they added 5 to 12.",
    work:"Student work: 3 folders = $12, so 5 folders = $17",
    options:[
      "They should find the unit price first. Since 12 ÷ 3 = 4, then 5 folders cost 5 x 4 = 20.",
      "They should subtract 3 from 12.",
      "They should keep the cost at 12.",
      "They should multiply 12 by 5 only."
    ],
    correctIndex:0,
    hint:"Find the price for 1 folder before scaling up.",
    insight:"Misconception: additive change is used instead of proportional scaling. Principle: use the unit rate or common factor. Correct: $20."
  },
  {
    id:"68-reason-70",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"constant-of-proportionality",
    inattention:false,
    prompt:"If y is proportional to x and y = 5 when x = 2, what is y when x = 6?",
    work:"Given: y/x stays constant and 5/2 = 2.5.",
    options:[
      "15",
      "11",
      "12",
      "30"
    ],
    correctIndex:0,
    hint:"If x is multiplied by 3, y must also be multiplied by 3.",
    insight:"Misconception: proportional growth is handled additively. Principle: preserve the same multiplier. Since 2 to 6 is times 3, 5 becomes 15."
  },
  {
    id:"68-logic-70",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"zero-check-rule",
    inattention:false,
    prompt:"A student says, 'Any straight-line pattern is proportional.' What is the best response?",
    work:"Claim: all straight-line relationships are proportional",
    options:[
      "The claim is false because proportional relationships must also pass through (0,0). A straight line like y = x + 2 is not proportional.",
      "The claim is true because all lines are proportional.",
      "The claim is true because straight lines always have equal ratios.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Ask whether the relationship includes 0 mapping to 0.",
    insight:"Misconception: linear and proportional are treated as the same. Principle: proportional relationships are a special kind of linear relationship that passes through the origin."
  },

  {
    id:"68-op-71",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"recipe-scaling",
    inattention:false,
    prompt:"A student says if 2 cups of juice mix with 3 cups of water, then 6 cups of juice mix with 7 cups of water because they added 4.",
    work:"Student work: 2:3 becomes 6:7",
    options:[
      "They should scale both parts by the same factor. Since 2 becomes 6 by multiplying by 3, 3 becomes 9.",
      "They should keep the water at 3 cups.",
      "They should subtract 2 from 3.",
      "They should add 6 and 3."
    ],
    correctIndex:0,
    hint:"Equivalent ratios use the same multiplier on both parts.",
    insight:"Misconception: only one side is scaled correctly. Principle: both quantities must change by the same factor. Correct: 6:9."
  },
  {
    id:"68-reason-71",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"best-unit-rate",
    inattention:false,
    prompt:"Which is the better buy?",
    work:"Option A: 3 pens for $4.50. Option B: 5 pens for $8.00.",
    options:[
      "Option A",
      "Option B",
      "They cost the same per pen",
      "There is not enough information"
    ],
    correctIndex:0,
    hint:"Compare cost per pen: 4.50 ÷ 3 and 8.00 ÷ 5.",
    insight:"Misconception: bigger pack size is assumed to be a better buy. Principle: compare unit prices. Option A costs $1.50 per pen; Option B costs $1.60 per pen."
  },
  {
    id:"68-logic-71",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"cross-product-rule-misuse",
    inattention:false,
    prompt:"A student says, 'If two ratios look close, they must be equivalent.' Why is this wrong?",
    work:"Claim: close-looking ratios are equivalent",
    options:[
      "Because equivalent ratios must have exactly the same value, not just similar-looking numbers.",
      "Because ratios can never be compared.",
      "Because only whole numbers can form equivalent ratios.",
      "Because equivalent ratios always use the same digits."
    ],
    correctIndex:0,
    hint:"Compare 2/3 with 3/4. They are close, but not equal.",
    insight:"Misconception: approximate similarity is mistaken for exact equivalence. Principle: equivalent ratios must match exactly."
  },

  {
    id:"68-op-72",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"part-to-whole-percent",
    inattention:false,
    prompt:"A student says if 6 out of 15 students wear glasses, then 6% wear glasses because 6 is the part.",
    work:"Student work: 6 out of 15 = 6%",
    options:[
      "They should form the fraction 6/15 = 0.4 = 40%.",
      "They should say 6 out of 15 is 60%.",
      "They should say 6 out of 15 is 15%.",
      "They should add 6 and 15 to get 21%."
    ],
    correctIndex:0,
    hint:"Turn the part-to-whole fraction into a decimal or percent.",
    insight:"Misconception: the part alone is read as the percent. Principle: percent comes from part divided by whole. Correct: 40%."
  },
  {
    id:"68-reason-72",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"proportional-graph-interpretation",
    inattention:false,
    prompt:"Which relationship is proportional?",
    work:"A: 0 books cost $0, 2 books cost $10, 4 books cost $20.   B: 0 books cost $3, 2 books cost $13, 4 books cost $23.",
    options:[
      "A",
      "B",
      "Both",
      "Neither"
    ],
    correctIndex:0,
    hint:"A proportional relationship starts at 0 and keeps the same rate.",
    insight:"Misconception: any steady increase is assumed proportional. Principle: a proportional relationship must start at the origin and keep a constant ratio."
  },
  {
    id:"68-logic-72",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"part-whole-vs-part-part",
    inattention:false,
    prompt:"A student says, 'If the ratio of cats to dogs is 2:3, then 2/3 of the pets are cats.' What is the best response?",
    work:"Claim: cats:dogs = 2:3 means cats are 2/3 of all pets",
    options:[
      "The claim is false because 2:3 is part-to-part. Cats are 2 out of 5 total pets, so the fraction is 2/5.",
      "The claim is true because the first number always goes over the second.",
      "The claim is true because ratios and fractions always mean the same thing.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Count all the parts first to get the whole.",
    insight:"Misconception: part-to-part ratios are confused with part-to-whole fractions. Principle: to find a fraction of the whole, add all parts first."
  }
  , // INTEGER OPERATIONS AND ORDER PACK — 217-228
  {
    id:"68-op-73",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"integer-addition",
    inattention:false,
    prompt:"A student says -4 + 7 = -11 because they added 4 and 7 and kept the negative sign.",
    work:"Student work: -4 + 7 = -11",
    options:[
      "They ignored the direction of the numbers. Starting at -4 and moving 7 right gives 3.",
      "They should always keep the negative sign.",
      "They should subtract 7 from 4 and get -3.",
      "They should multiply 4 and 7."
    ],
    correctIndex:0,
    hint:"Compare the sizes and signs of the two numbers.",
    insight:"Misconception: signed addition is treated like unsigned addition with a copied sign. Principle: compare magnitudes and directions. Correct: 3."
  },
  {
    id:"68-reason-73",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"integer-ordering",
    inattention:false,
    prompt:"Which number is greatest?",
    work:"Compare -2, 0, 3, and -5.",
    options:[
      "3",
      "0",
      "-2",
      "-5"
    ],
    correctIndex:0,
    hint:"Numbers farther right on the number line are greater.",
    insight:"Misconception: negative numbers can seem larger because of their digits. Principle: order signed numbers on the number line. Greatest: 3."
  },
  {
    id:"68-logic-73",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"negative-number-rule",
    inattention:false,
    prompt:"A student says, 'Any number with a negative sign is greater because negatives are more dramatic.' Why is this wrong?",
    work:"Claim: negatives are greater",
    options:[
      "Because negative numbers are less than zero and less than positive numbers on the number line.",
      "Because negative signs do not affect value.",
      "Because all negative numbers equal zero.",
      "Because only positive numbers can be compared."
    ],
    correctIndex:0,
    hint:"Use the number line to compare a negative number and a positive number.",
    insight:"Misconception: the sign is treated as decoration or intensity. Principle: the sign changes location and value on the number line."
  },

  {
    id:"68-op-74",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"subtracting-negative",
    inattention:false,
    prompt:"A student says 6 - (-2) = 4 because subtraction always makes numbers smaller.",
    work:"Student work: 6 - (-2) = 4",
    options:[
      "They missed that subtracting a negative is adding its opposite. So 6 - (-2) = 6 + 2 = 8.",
      "They should always subtract 2.",
      "They should say the answer is -8.",
      "They should multiply 6 and 2."
    ],
    correctIndex:0,
    hint:"Subtracting a negative moves right on the number line.",
    insight:"Misconception: subtraction is assumed to always decrease value. Principle: subtracting a negative is equivalent to adding."
  },
  {
    id:"68-reason-74",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"distance-from-zero",
    inattention:false,
    prompt:"Which number is farthest from 0?",
    work:"Compare -9, 6, -4, and 8.",
    options:[
      "-9",
      "8",
      "6",
      "-4"
    ],
    correctIndex:0,
    hint:"Farthest from zero means greatest absolute value.",
    insight:"Misconception: distance from zero is confused with just being positive. Principle: use absolute value. Farthest: -9."
  },
  {
    id:"68-logic-74",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"subtraction-always-smaller",
    inattention:false,
    prompt:"A student says, 'Subtracting always makes the answer smaller.' What is the best response?",
    work:"Claim: subtraction always decreases value",
    options:[
      "The claim is false because subtracting a negative increases the value, as in 5 - (-3) = 8.",
      "The claim is true for all numbers.",
      "The claim is true whenever zero is involved.",
      "The claim cannot be tested."
    ],
    correctIndex:0,
    hint:"Test the claim with a negative subtrahend.",
    insight:"Misconception: subtraction is treated as one-directional. Principle: the sign of the number being subtracted matters."
  },

  {
    id:"68-op-75",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"integer-multiplication",
    inattention:false,
    prompt:"A student says (-3)(4) = 12 because 3 x 4 = 12 and they ignored the sign.",
    work:"Student work: (-3)(4) = 12",
    options:[
      "They ignored the sign rule. A negative times a positive is negative, so the answer is -12.",
      "They should always make products positive.",
      "They should subtract 4 from 3.",
      "They should say the answer is 1."
    ],
    correctIndex:0,
    hint:"A product with one negative factor is negative.",
    insight:"Misconception: sign rules are ignored in multiplication. Principle: one negative factor gives a negative product. Correct: -12."
  },
  {
    id:"68-reason-75",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"integer-product-comparison",
    inattention:false,
    prompt:"Which product is greatest?",
    work:"Compare (-2)(5), (2)(5), (-2)(-5), and (2)(-5).",
    options:[
      "(2)(5) and (-2)(-5) are tied for greatest",
      "(-2)(5)",
      "(2)(-5)",
      "They are all different with no greatest value"
    ],
    correctIndex:0,
    hint:"Find each product first.",
    insight:"Misconception: negative signs can hide equal positive results. Principle: compute and compare. Both (2)(5) and (-2)(-5) equal 10."
  },
  {
    id:"68-logic-75",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"negative-times-negative-rule",
    inattention:false,
    prompt:"A student says, 'A negative times a negative must stay negative because there are two negatives.' Why is this wrong?",
    work:"Claim: negative x negative is negative",
    options:[
      "Because the rule is that two negatives multiply to a positive, so (-3)(-2) = 6.",
      "Because all multiplication results are negative.",
      "Because negatives cannot be multiplied.",
      "Because two negatives always equal zero."
    ],
    correctIndex:0,
    hint:"Test the claim with a simple example like (-2)(-2).",
    insight:"Misconception: counting negatives replaces the multiplication sign rule. Principle: two negatives multiply to a positive."
  },

  {
    id:"68-op-76",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"integer-division",
    inattention:false,
    prompt:"A student says -24 ÷ 6 = 4 because division makes numbers smaller and they dropped the sign.",
    work:"Student work: -24 ÷ 6 = 4",
    options:[
      "They ignored the sign. A negative divided by a positive is negative, so the answer is -4.",
      "They should multiply 24 by 6.",
      "They should keep the answer positive because 24 is bigger.",
      "They should say the answer is -30."
    ],
    correctIndex:0,
    hint:"Division follows the same sign pattern as multiplication.",
    insight:"Misconception: sign rules are ignored in division. Principle: one negative factor gives a negative quotient. Correct: -4."
  },
  {
    id:"68-reason-76",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"integer-sequence",
    inattention:false,
    prompt:"Put these in order from least to greatest: -7, -3, 2, 0.",
    work:"Order the integers on a number line.",
    options:[
      "-7, -3, 0, 2",
      "-3, -7, 0, 2",
      "0, 2, -3, -7",
      "-7, 0, -3, 2"
    ],
    correctIndex:0,
    hint:"Farther left means smaller.",
    insight:"Misconception: negative numbers are often reversed in order. Principle: use left-to-right order on the number line."
  },
  {
    id:"68-logic-76",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"absolute-value-fallacy",
    inattention:false,
    prompt:"A student says, 'Because 10 is bigger than 2, -10 must be greater than -2.' What is the best response?",
    work:"Claim: -10 > -2 because 10 > 2",
    options:[
      "The claim is false because among negatives, the number farther left is smaller. So -10 < -2.",
      "The claim is true because larger digits always mean larger value.",
      "The claim is true because the negative sign does not matter.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Compare -10 and -2 on a number line.",
    insight:"Misconception: absolute value is confused with signed value. Principle: for negative numbers, larger absolute value means a smaller number."
  }
  , // EXPRESSIONS AND ORDER OF OPERATIONS PACK — 229-240
  {
    id:"68-op-77",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"order-of-operations",
    inattention:false,
    prompt:"A student says 3 + 4 x 5 = 35 because they added first.",
    work:"Student work: 3 + 4 x 5 = 7 x 5 = 35",
    options:[
      "They should multiply before adding. Since 4 x 5 = 20, the answer is 3 + 20 = 23.",
      "They should add 3 and 5 first.",
      "They should multiply everything together and get 60.",
      "They should subtract 4 from 5."
    ],
    correctIndex:0,
    hint:"Multiplication comes before addition unless parentheses say otherwise.",
    insight:"Misconception: operations are done left to right without priority. Principle: multiply before adding. Correct: 23."
  },
  {
    id:"68-reason-77",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equivalent-expression",
    inattention:false,
    prompt:"Which expression has the same value as 2(6 + 3)?",
    work:"Compare each option to 2(6 + 3).",
    options:[
      "2 x 6 + 2 x 3",
      "2 x 6 + 3",
      "2 + 6 + 3",
      "6 + 3 + 2"
    ],
    correctIndex:0,
    hint:"Distribute the 2 to both terms inside the parentheses.",
    insight:"Misconception: the factor outside parentheses is applied to only one term or ignored. Principle: distribution applies to every term inside the group."
  },
  {
    id:"68-logic-77",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"left-to-right-rule",
    inattention:false,
    prompt:"A student says, 'You always do math strictly left to right.' What is the best response?",
    work:"Claim: all expressions are evaluated strictly left to right",
    options:[
      "The claim is false because multiplication and division come before addition and subtraction unless grouping symbols change the order.",
      "The claim is true for every expression.",
      "The claim is true whenever there are no parentheses.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Try the claim on 3 + 4 x 5.",
    insight:"Misconception: order of operations is replaced by a blanket left-to-right rule. Principle: operation priority matters."
  },

  {
    id:"68-op-78",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"parentheses-evaluation",
    inattention:false,
    prompt:"A student says 5(2 + 4) = 10 + 4 = 14 because they multiplied only the first number in the parentheses.",
    work:"Student work: 5(2 + 4) = 10 + 4 = 14",
    options:[
      "They should add inside the parentheses first: 2 + 4 = 6, then 5 x 6 = 30.",
      "They should multiply 5 by 2 only.",
      "They should add 5 + 2 + 4.",
      "They should say the answer is 11."
    ],
    correctIndex:0,
    hint:"Parentheses tell you to evaluate the grouped expression first.",
    insight:"Misconception: grouping is only partly respected. Principle: evaluate the entire expression inside parentheses first. Correct: 30."
  },
  {
    id:"68-reason-78",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"compare-expression-values",
    inattention:false,
    prompt:"Which expression has the greatest value?",
    work:"Compare 8 + 2 x 3, (8 + 2) x 3, 8 + (2 x 3), and 8 x 2 + 3.",
    options:[
      "(8 + 2) x 3",
      "8 x 2 + 3",
      "8 + 2 x 3 and 8 + (2 x 3) are tied for greatest",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Evaluate each expression carefully.",
    insight:"Misconception: similar-looking expressions are assumed equal. Principle: grouping symbols can change the value a lot."
  },
  {
    id:"68-logic-78",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"parentheses-do-not-matter",
    inattention:false,
    prompt:"A student says, 'Parentheses are just decoration; they do not change the answer.' Why is this wrong?",
    work:"Claim: parentheses do not matter",
    options:[
      "Because parentheses can change which operation happens first, as in 2 + 3 x 4 versus (2 + 3) x 4.",
      "Because parentheses only matter in geometry.",
      "Because parentheses always make numbers smaller.",
      "Because parentheses are used only for fractions."
    ],
    correctIndex:0,
    hint:"Compare an expression with and without grouping symbols.",
    insight:"Misconception: grouping symbols are treated as optional. Principle: parentheses can change the order and the result."
  },

  {
    id:"68-op-79",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"distributive-property",
    inattention:false,
    prompt:"A student says 3(x + 2) = 3x + 2 because the 3 only goes with x.",
    work:"Student work: 3(x + 2) = 3x + 2",
    options:[
      "They should distribute 3 to both terms: 3x + 6.",
      "They should add 3 + x + 2.",
      "They should multiply x by 2 only.",
      "They should say the expression equals 5x."
    ],
    correctIndex:0,
    hint:"The factor outside the parentheses multiplies every term inside.",
    insight:"Misconception: distribution is incomplete. Principle: distribute to each term in the parentheses."
  },
  {
    id:"68-reason-79",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"substitution-into-expression",
    inattention:false,
    prompt:"If x = 4, what is the value of 2x + 5?",
    work:"Substitute x = 4.",
    options:[
      "13",
      "9",
      "45",
      "8"
    ],
    correctIndex:0,
    hint:"Replace x with 4, then evaluate.",
    insight:"Misconception: variables are sometimes left untouched or digits are concatenated. Principle: substitute the value, then follow order of operations."
  },
  {
    id:"68-logic-79",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"variable-as-label",
    inattention:false,
    prompt:"A student says, 'In 2x + 5, the x is just a label, so you cannot calculate anything even if x = 4.' What is the best response?",
    work:"Claim: variable is only a label",
    options:[
      "The claim is false because if x is given a value, you substitute that value and evaluate the expression.",
      "The claim is true because variables can never stand for numbers.",
      "The claim is true because x always means multiply only.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"A variable can stand for a number.",
    insight:"Misconception: variables are treated as non-numeric symbols. Principle: when a variable’s value is known, substitution makes evaluation possible."
  },

  {
    id:"68-op-80",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"combining-like-terms",
    inattention:false,
    prompt:"A student says 4x + 3x = 7x^2 because 4 + 3 = 7 and there are two x's.",
    work:"Student work: 4x + 3x = 7x^2",
    options:[
      "They should combine like terms by adding the coefficients only. The result is 7x.",
      "They should multiply 4 and 3 and get 12x.",
      "They should keep the answer as 43x.",
      "They should say the answer is x^7."
    ],
    correctIndex:0,
    hint:"Like terms add their coefficients; the variable part stays the same.",
    insight:"Misconception: adding like terms is confused with multiplying variables. Principle: 4x and 3x are both groups of x, so together they make 7x."
  },
  {
    id:"68-reason-80",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"not-like-terms",
    inattention:false,
    prompt:"Which expression is simplified correctly?",
    work:"Compare the simplifications.",
    options:[
      "5x + 2y cannot be combined into 7xy",
      "5x + 2y = 7xy",
      "5x + 2y = 7x",
      "5x + 2y = 7y"
    ],
    correctIndex:0,
    hint:"Terms must have the same variable part to combine.",
    insight:"Misconception: any terms with variables are treated as combinable. Principle: only like terms combine."
  },
  {
    id:"68-logic-80",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"all-terms-combine",
    inattention:false,
    prompt:"A student says, 'You can always combine terms as long as there is a plus sign.' Why is this wrong?",
    work:"Claim: all added terms can be combined",
    options:[
      "Because only like terms can be combined. For example, 3x + 2y stays as two different kinds of terms.",
      "Because plus signs mean multiply.",
      "Because terms with variables must always be separated by parentheses.",
      "Because combining terms is never allowed."
    ],
    correctIndex:0,
    hint:"Ask whether the terms represent the same kind of quantity.",
    insight:"Misconception: addition is treated as automatic simplification. Principle: combine only terms with matching variable parts."
  }
, // UNLIKE DENOMINATORS PACK — 241-252
  {
    id:"68-op-81",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-addition",
    inattention:false,
    prompt:"A student adds 1/2 + 1/3 and gets 2/5.",
    work:"Student work: 1/2 + 1/3 = 2/5",
    options:[
      "They added across. Rename with sixths: 1/2 = 3/6 and 1/3 = 2/6, so the sum is 5/6.",
      "They should multiply 1/2 and 1/3 instead.",
      "They should keep 2/5 because the numerators and denominators both changed.",
      "They should subtract because the denominators are different."
    ],
    correctIndex:0,
    hint:"Find a common denominator before adding.",
    insight:"Misconception: add numerators and denominators directly. Principle: rewrite with a common denominator first. Correct: 5/6."
  },
  {
    id:"68-reason-81",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"sum-comparison",
    inattention:false,
    prompt:"Which sum is greatest?",
    work:"Compare 1/2 + 1/4, 1/3 + 1/3, 2/5 + 1/5, and 3/8 + 1/4.",
    options:[
      "1/2 + 1/4",
      "1/3 + 1/3",
      "2/5 + 1/5",
      "3/8 + 1/4"
    ],
    correctIndex:0,
    hint:"Rewrite or estimate each sum: 3/4, 2/3, 3/5, and 5/8.",
    insight:"Misconception: unlike denominators make sums too hard to compare mentally. Principle: rewrite or estimate each sum in a common form. Greatest: 1/2 + 1/4."
  },
  {
    id:"68-logic-81",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"always-never-statement",
    inattention:false,
    prompt:"Which statement must be true when adding fractions with unlike denominators?",
    work:"Choose the logically valid statement.",
    options:[
      "Renaming fractions with a common denominator changes the names but not the values, which makes the addition valid.",
      "Adding denominators directly always works if the numerators are small.",
      "The larger denominator should always stay as the answer's denominator.",
      "Fractions with unlike denominators cannot be added exactly."
    ],
    correctIndex:0,
    hint:"Equivalent fractions represent the same value even when they look different.",
    insight:"Logic note: common denominators work because equivalent renaming preserves value."
  },
  {
    id:"68-op-82",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-subtraction",
    inattention:false,
    prompt:"A student subtracts 5/6 - 1/4 and gets 4/2.",
    work:"Student work: 5/6 - 1/4 = 4/2",
    options:[
      "They subtracted across. Use twelfths: 5/6 = 10/12 and 1/4 = 3/12, so the difference is 7/12.",
      "They should add instead because subtraction does not work with fractions.",
      "They should keep the denominator 6 and subtract only the numerators.",
      "They should multiply 6 and 4 to get 24/24."
    ],
    correctIndex:0,
    hint:"Find a common denominator before subtracting.",
    insight:"Misconception: subtract across. Principle: rewrite both fractions with the same denominator first. Correct: 7/12."
  },
  {
    id:"68-reason-82",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"sum-size",
    inattention:false,
    prompt:"A student says 2/3 + 1/6 must be less than 2/3 because 1/6 is a small fraction. What is the best response?",
    work:"Claim: 2/3 + 1/6 < 2/3",
    options:[
      "That cannot be right because adding a positive fraction makes the total larger. In sixths, 2/3 + 1/6 = 4/6 + 1/6 = 5/6.",
      "That is right because 1/6 is too small to change the sum.",
      "That is right because 2 + 1 is less than 3 + 6.",
      "It depends on whether 2/3 is changed into thirds or sixths."
    ],
    correctIndex:0,
    hint:"Adding a positive amount increases a number.",
    insight:"Misconception: a small positive fraction might not affect the total. Principle: any positive addend increases the sum. Correct: 5/6 is greater than 2/3."
  },
  {
    id:"68-logic-82",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"faulty-reasoning",
    inattention:false,
    prompt:"A student says, '5/12 > 1/3 because 12 is bigger than 3.' What is the best response?",
    work:"Claim: 5/12 > 1/3 because 12 > 3",
    options:[
      "The conclusion is true, but the reasoning is not. Rename 1/3 as 4/12, then compare 5/12 and 4/12.",
      "The reasoning is correct because bigger denominators always mean bigger fractions.",
      "The reasoning is correct because 5 is bigger than 1 and 12 is bigger than 3.",
      "The claim must be false because the denominators are different."
    ],
    correctIndex:0,
    hint:"A conclusion can be right even when the reason given is wrong.",
    insight:"Logic note: denominator size alone does not compare fractions with different numerators. Correct reasoning uses equivalent fractions."
  },
  {
    id:"68-op-83",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"fraction-addition",
    inattention:false,
    prompt:"A student adds 3/8 + 1/2 and gets 4/10.",
    work:"Student work: 3/8 + 1/2 = 4/10",
    options:[
      "They added across. Rename 1/2 as 4/8, then 3/8 + 4/8 = 7/8.",
      "They should subtract 1/2 from 3/8 instead.",
      "They should keep 4/10 because 3 + 1 = 4 and 8 + 2 = 10.",
      "They should multiply to get 3/16."
    ],
    correctIndex:0,
    hint:"Rename 1/2 with denominator 8.",
    insight:"Misconception: add across when denominators differ. Principle: convert to equivalent fractions with a shared denominator. Correct: 7/8."
  },
  {
    id:"68-reason-83",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"closest-to-one",
    inattention:false,
    prompt:"Which sum is closest to 1?",
    work:"Compare 2/5 + 1/2, 1/4 + 1/3, 3/8 + 1/4, and 1/6 + 2/3.",
    options:[
      "2/5 + 1/2",
      "1/4 + 1/3",
      "3/8 + 1/4",
      "1/6 + 2/3"
    ],
    correctIndex:0,
    hint:"Estimate each sum: 9/10, 7/12, 5/8, and 5/6.",
    insight:"Misconception: unlike denominators prevent good estimation. Principle: rewrite or estimate each sum and compare distance from 1. Closest: 2/5 + 1/2."
  },
  {
    id:"68-logic-83",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"Which example is a valid counterexample to the claim 'When adding fractions, you can always add the denominators too'?",
    work:"Choose the best counterexample.",
    options:[
      "1/2 + 1/2 = 1, but adding denominators too would give 2/4, which is 1/2.",
      "1/3 + 1/3 = 2/3, so fractions can be added.",
      "2/5 + 1/5 = 3/5, so common denominators are useful.",
      "3/4 is bigger than 1/2, so denominators matter."
    ],
    correctIndex:0,
    hint:"A counterexample shows one case where a rule fails.",
    insight:"Logic note: one clear failing case is enough to disprove an 'always' claim."
  },
  {
    id:"68-op-84",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-subtraction",
    inattention:false,
    prompt:"A student subtracts 7/12 - 1/3 and gets 6/9.",
    work:"Student work: 7/12 - 1/3 = 6/9",
    options:[
      "They subtracted across. Rename 1/3 as 4/12, then 7/12 - 4/12 = 3/12 = 1/4.",
      "They should add because the denominators are not equal.",
      "They should keep the denominator 12 and subtract 1 from 12.",
      "They should multiply 7 and 3 to get 21/12."
    ],
    correctIndex:0,
    hint:"Turn 1/3 into twelfths first.",
    insight:"Misconception: subtract numerator from numerator and denominator from denominator. Principle: use equivalent fractions with a common denominator. Correct: 1/4."
  },
  {
    id:"68-reason-84",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"method-choice",
    inattention:false,
    prompt:"Which method makes the best sense for finding 3/5 + 1/2?",
    work:"Choose the best reasoning method.",
    options:[
      "Rename both fractions as tenths: 3/5 = 6/10 and 1/2 = 5/10, so the sum is 11/10.",
      "Add straight across to get 4/7.",
      "Keep denominator 5 and add numerators to get 4/5.",
      "Subtract because the denominators are different."
    ],
    correctIndex:0,
    hint:"Use a denominator both 5 and 2 can share.",
    insight:"Misconception: unlike denominators can be ignored. Principle: choose a common denominator that works for both fractions. Correct: 11/10."
  },
  {
    id:"68-logic-84",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"must-be-true",
    inattention:false,
    prompt:"Which statement must be true about adding two positive fractions?",
    work:"Choose the logically valid statement.",
    options:[
      "The sum is greater than either addend.",
      "The sum must be less than 1.",
      "The sum must have the larger denominator.",
      "The sum must be a proper fraction."
    ],
    correctIndex:0,
    hint:"Adding a positive amount increases the total.",
    insight:"Logic note: for positive numbers, adding another positive number makes the result larger than each addend."
  }
  , // DECIMAL PLACE VALUE & COMPARISON PACK — 253-264
  {
    id:"68-op-85",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-addition-alignment",
    inattention:false,
    prompt:"A student adds 3.45 + 0.6 and gets 3.51.",
    work:"Student work: 3.45 + 0.6 = 3.51",
    options:[
      "They did not align place value correctly. Write 0.6 as 0.60, then 3.45 + 0.60 = 4.05.",
      "They should ignore the decimal points and add 345 + 6.",
      "They should subtract because the decimals have different lengths.",
      "They should keep 3.51 because 45 + 6 = 51."
    ],
    correctIndex:0,
    hint:"Write both numbers so tenths line up with tenths and hundredths line up with hundredths.",
    insight:"Misconception: line up digits by the end instead of by place value. Principle: align decimal places before adding. Correct: 4.05."
  },
  {
    id:"68-reason-85",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"decimal-comparison",
    inattention:false,
    prompt:"Which decimal is greatest?",
    work:"Compare 0.7, 0.68, 0.699, and 0.67.",
    options:[
      "0.7",
      "0.68",
      "0.699",
      "0.67"
    ],
    correctIndex:0,
    hint:"Rename 0.7 as 0.700 and compare digit by digit.",
    insight:"Misconception: a longer decimal must be greater. Principle: compare place values from left to right. Greatest: 0.7."
  },
  {
    id:"68-logic-85",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"equivalent-decimals",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Choose the logically valid statement about decimals.",
    options:[
      "0.5 and 0.50 name the same value.",
      "0.5 is greater than 0.50 because it has fewer digits.",
      "0.50 is greater than 0.5 because it has more digits.",
      "Decimals with trailing zeros always change value."
    ],
    correctIndex:0,
    hint:"A zero added to the right of a decimal does not change the amount.",
    insight:"Logic note: trailing zeros to the right of a decimal do not change value."
  },
  {
    id:"68-op-86",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-subtraction-alignment",
    inattention:false,
    prompt:"A student subtracts 7.0 - 0.35 and gets 6.95.",
    work:"Student work: 7.0 - 0.35 = 6.95",
    options:[
      "They did not rename 7.0 as 7.00. Then 7.00 - 0.35 = 6.65.",
      "They should add because subtraction does not work with decimals.",
      "They should ignore the decimal points and do 70 - 35 = 35.",
      "They should keep 6.95 because 7 minus 35 is 95."
    ],
    correctIndex:0,
    hint:"Write 7.0 as 7.00 before subtracting.",
    insight:"Misconception: subtract without matching place values. Principle: rename with zeros if needed and align decimals. Correct: 6.65."
  },
  {
    id:"68-reason-86",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"distance-from-one",
    inattention:false,
    prompt:"Which decimal is closest to 1?",
    work:"Compare 0.99, 0.909, 0.9, and 0.999.",
    options:[
      "0.99",
      "0.909",
      "0.9",
      "0.999"
    ],
    correctIndex:3,
    hint:"Think about how far each number is from 1.",
    insight:"Misconception: the decimal with fewer digits might be simpler and therefore closer. Principle: compare each distance from 1. Closest: 0.999."
  },
  {
    id:"68-logic-86",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"Which example is a valid counterexample to the claim 'A decimal with more digits is always greater'?",
    work:"Choose the example that proves the claim false.",
    options:[
      "0.9 and 0.87, because 0.9 > 0.87 even though 0.87 has more digits.",
      "0.45 and 0.46, because 46 is greater than 45.",
      "0.300 and 0.300, because they are equal.",
      "0.71 and 0.72, because 72 is greater than 71."
    ],
    correctIndex:0,
    hint:"A counterexample needs one clear case where the rule fails.",
    insight:"Logic note: one valid counterexample is enough to disprove an 'always' statement."
  },
  {
    id:"68-op-87",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-addition-place-value",
    inattention:false,
    prompt:"A student adds 4.08 + 0.7 and gets 4.15.",
    work:"Student work: 4.08 + 0.7 = 4.15",
    options:[
      "They added 8 hundredths and 7 tenths as if they were the same place. Write 0.7 as 0.70, then 4.08 + 0.70 = 4.78.",
      "They should drop the zeros and add 4.8 + 0.7.",
      "They should subtract because one number has a zero.",
      "They should keep 4.15 because 8 + 7 = 15."
    ],
    correctIndex:0,
    hint:"Rewrite 0.7 as 0.70 and then add by place value.",
    insight:"Misconception: combine digits without respecting tenths and hundredths. Principle: align place values. Correct: 4.78."
  },
  {
    id:"68-reason-87",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"ordering-decimals",
    inattention:false,
    prompt:"Which list shows these decimals from least to greatest?",
    work:"Order 0.45, 0.405, 0.5, and 0.399.",
    options:[
      "0.399, 0.405, 0.45, 0.5",
      "0.405, 0.399, 0.45, 0.5",
      "0.45, 0.405, 0.399, 0.5",
      "0.5, 0.45, 0.405, 0.399"
    ],
    correctIndex:0,
    hint:"Rename each with thousandths if needed: 0.450, 0.405, 0.500, 0.399.",
    insight:"Misconception: the longest decimal or the one with the biggest last digits must be greatest. Principle: compare equal place values left to right."
  },
  {
    id:"68-logic-87",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"place-value-rule",
    inattention:false,
    prompt:"Which statement must be true when comparing two decimals with the same whole-number part?",
    work:"Choose the logically valid comparison rule.",
    options:[
      "Compare tenths first; if tenths are equal, compare hundredths, then thousandths if needed.",
      "The decimal with more digits is always greater.",
      "The decimal with fewer digits is always greater.",
      "Compare only the last digit."
    ],
    correctIndex:0,
    hint:"Comparison starts at the greatest place value, not the smallest.",
    insight:"Logic note: decimal comparison works by checking place values from left to right."
  },
  {
    id:"68-op-88",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-subtraction-place-value",
    inattention:false,
    prompt:"A student subtracts 9.03 - 1.7 and gets 8.86.",
    work:"Student work: 9.03 - 1.7 = 8.86",
    options:[
      "They did not align place value. Write 1.7 as 1.70, then 9.03 - 1.70 = 7.33.",
      "They should add because 9 is larger than 1.",
      "They should ignore the decimal points and do 903 - 17.",
      "They should keep 8.86 because 03 minus 7 is 86."
    ],
    correctIndex:0,
    hint:"Rewrite 1.7 as 1.70 before subtracting.",
    insight:"Misconception: subtract digits without aligning place values. Principle: line up decimals first. Correct: 7.33."
  },
  {
    id:"68-reason-88",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"sum-comparison",
    inattention:false,
    prompt:"Which sum is greatest?",
    work:"Compare 0.4 + 0.35, 0.62 + 0.08, 0.19 + 0.6, and 0.505 + 0.2.",
    options:[
      "0.4 + 0.35",
      "0.62 + 0.08",
      "0.19 + 0.6",
      "0.505 + 0.2"
    ],
    correctIndex:2,
    hint:"Find each sum: 0.75, 0.70, 0.79, and 0.705.",
    insight:"Misconception: a sum with more digits must be greater. Principle: compute or estimate each total and compare values. Greatest: 0.19 + 0.6."
  },
  {
    id:"68-logic-88",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"trailing-zeros",
    inattention:false,
    prompt:"Which statement is logically correct about writing decimals?",
    work:"Choose the valid rule.",
    options:[
      "Adding zeros to the right end of a decimal does not change its value.",
      "Adding any zero anywhere never changes a value.",
      "Removing the decimal point never changes a value.",
      "A decimal with more zeros is always smaller."
    ],
    correctIndex:0,
    hint:"Think about 0.4, 0.40, and 0.400.",
    insight:"Logic note: trailing zeros to the right of a decimal preserve the same value, but zeros in other places can change it."
  }
  , // EQUATIONS / INVERSE OPERATIONS PACK — 265-276
  {
    id:"68-op-89",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"equation-inverse-operation",
    inattention:false,
    prompt:"A student solves x + 7 = 19 by saying x = 26.",
    work:"Student work: x + 7 = 19, so x = 19 + 7 = 26",
    options:[
      "They used the wrong operation. Undo +7 by subtracting 7: x = 19 - 7 = 12.",
      "They should multiply 19 by 7.",
      "They should divide 19 by 7.",
      "They should keep 26 because 19 and 7 are both positive."
    ],
    correctIndex:0,
    hint:"Use the inverse of addition.",
    insight:"Misconception: do the same operation again instead of the inverse. Principle: undo +7 with -7. Correct: x = 12."
  },
  {
    id:"68-reason-89",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equation-value-check",
    inattention:false,
    prompt:"Which value makes the equation true?",
    work:"Test x in 3x = 21.",
    options:[
      "x = 7",
      "x = 18",
      "x = 24",
      "x = 63"
    ],
    correctIndex:0,
    hint:"Think: what number times 3 gives 21?",
    insight:"Misconception: add or subtract when multiplication is shown. Principle: use the inverse operation or test values. Correct: x = 7."
  },
  {
    id:"68-logic-89",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"equation-meaning",
    inattention:false,
    prompt:"What does the equal sign mean in an equation?",
    work:"Choose the correct meaning.",
    options:[
      "The amounts on both sides have the same value.",
      "Now write the answer.",
      "Add all the numbers shown.",
      "The variable must be 1."
    ],
    correctIndex:0,
    hint:"An equation states a balance between two expressions.",
    insight:"Logic note: the equal sign means both sides represent the same amount."
  },
  {
    id:"68-op-90",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"equation-subtraction",
    inattention:false,
    prompt:"A student solves y - 4 = 11 by saying y = 7.",
    work:"Student work: y - 4 = 11, so y = 11 - 4 = 7",
    options:[
      "They used the wrong inverse. Undo -4 by adding 4: y = 15.",
      "They should multiply 11 by 4.",
      "They should divide 11 by 4.",
      "They should keep 7 because 11 - 4 is 7."
    ],
    correctIndex:0,
    hint:"Ask what number minus 4 gives 11.",
    insight:"Misconception: repeat the shown subtraction instead of undoing it. Principle: undo -4 with +4. Correct: y = 15."
  },
  {
    id:"68-reason-90",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"two-step-order",
    inattention:false,
    prompt:"A student says the first step in solving 2x + 5 = 17 is to divide by 2. What is the best response?",
    work:"Equation: 2x + 5 = 17",
    options:[
      "Subtract 5 first to undo the addition, then divide by 2.",
      "Divide by 2 first because 2 is closer to x.",
      "Add 5 first so the left side is bigger.",
      "Multiply by 2 first to clear the coefficient."
    ],
    correctIndex:0,
    hint:"Undo operations in reverse order.",
    insight:"Misconception: solve from left to right. Principle: undo the outermost operation first. Correct path: subtract 5, then divide by 2."
  },
  {
    id:"68-logic-90",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"balance-rule",
    inattention:false,
    prompt:"Which move always keeps an equation balanced?",
    work:"Choose the valid rule.",
    options:[
      "Do the same operation to both sides.",
      "Do any operation to the left side only.",
      "Change the larger side until the numbers look simpler.",
      "Move numbers across the equal sign and change them randomly."
    ],
    correctIndex:0,
    hint:"Balance means both sides stay equal after the step.",
    insight:"Logic note: equations stay true when the same operation is applied to both sides."
  },
  {
    id:"68-op-91",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"equation-division",
    inattention:false,
    prompt:"A student solves n/5 = 8 by saying n = 13.",
    work:"Student work: n/5 = 8, so n = 8 + 5 = 13",
    options:[
      "They used addition instead of the inverse of division. Multiply both sides by 5: n = 40.",
      "They should subtract 5 from 8.",
      "They should divide 8 by 5 again.",
      "They should keep 13 because 8 and 5 combine to 13."
    ],
    correctIndex:0,
    hint:"Undo division by 5 with multiplication by 5.",
    insight:"Misconception: combine the visible numbers instead of undoing the operation. Principle: inverse of divide by 5 is multiply by 5. Correct: n = 40."
  },
  {
    id:"68-reason-91",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"solution-check",
    inattention:false,
    prompt:"Which value solves 4m - 3 = 13?",
    work:"Choose the value of m.",
    options:[
      "m = 4",
      "m = 2.5",
      "m = 10",
      "m = 16"
    ],
    correctIndex:0,
    hint:"Add 3 first, then divide by 4.",
    insight:"Misconception: use only one inverse step. Principle: undo both operations in reverse order. Correct: m = 4."
  },
  {
    id:"68-logic-91",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"equation-checking",
    inattention:false,
    prompt:"Why is substituting a value back into the original equation a good test?",
    work:"Choose the best reason.",
    options:[
      "It checks whether both sides really have the same value.",
      "It makes the variable disappear, so the answer must be right.",
      "It always produces the largest possible value.",
      "It changes the equation into an inequality."
    ],
    correctIndex:0,
    hint:"A correct solution makes the equation true when substituted.",
    insight:"Logic note: substitution verifies whether a proposed solution actually satisfies the equation."
  },
  {
    id:"68-op-92",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"two-step-equation",
    inattention:false,
    prompt:"A student solves 3p + 2 = 20 by saying p = 6.",
    work:"Student work: 3p + 2 = 20, so p = 20 ÷ 3 = 6",
    options:[
      "They skipped undoing the +2. First subtract 2 to get 3p = 18, then divide by 3 to get p = 6.",
      "They should add 2 and 3 to get p = 25.",
      "They should multiply 20 by 3 first.",
      "They should keep p = 6 because dividing by 3 is the only needed step."
    ],
    correctIndex:0,
    hint:"Undo addition before undoing multiplication.",
    insight:"Misconception: divide too early. Principle: reverse the order of operations when solving. Correct reasoning: subtract 2, then divide by 3."
  },
  {
    id:"68-reason-92",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"which-equation-matches",
    inattention:false,
    prompt:"Which equation matches the sentence 'Seven less than a number is 12'?",
    work:"Let the number be x.",
    options:[
      "x - 7 = 12",
      "7 - x = 12",
      "x + 7 = 12",
      "12 - 7 = x"
    ],
    correctIndex:0,
    hint:"'Less than a number' means subtract 7 from the number.",
    insight:"Misconception: reverse the subtraction order in words. Principle: translate the phrase carefully. Correct equation: x - 7 = 12."
  },
  {
    id:"68-logic-92",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"always-sometimes-never",
    inattention:false,
    prompt:"Complete the statement: 'Solving an equation means finding a value that makes the equation true.'",
    work:"Choose the best classification.",
    options:[
      "Always true",
      "Sometimes true",
      "Never true",
      "Only true for one-step equations"
    ],
    correctIndex:0,
    hint:"A solution is defined by making the equation true.",
    insight:"Logic note: this is the definition of solving an equation, so it is always true."
  }
  , // GEOMETRY MEASUREMENT TRAPS PACK — 277-288
  {
    id:"68-op-93",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"perimeter-vs-area",
    inattention:false,
    prompt:"A student finds the perimeter of a rectangle with length 6 cm and width 4 cm by doing 6 × 4 = 24 cm.",
    work:"Student work: perimeter = 6 × 4 = 24 cm",
    options:[
      "They found area, not perimeter. Perimeter = 6 + 4 + 6 + 4 = 20 cm.",
      "They should divide 24 by 2 to get 12 cm.",
      "They should add only one length and one width to get 10 cm.",
      "They should keep 24 cm because multiplication is always used in geometry."
    ],
    correctIndex:0,
    hint:"Perimeter measures the distance around a shape.",
    insight:"Misconception: use area multiplication when the question asks for perimeter. Principle: perimeter is the total around the edges. Correct: 20 cm."
  },
  {
    id:"68-reason-93",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"unit-choice",
    inattention:false,
    prompt:"Which measurement should be in square units?",
    work:"Choose the quantity that uses square units.",
    options:[
      "Area of a classroom floor",
      "Perimeter of a garden",
      "Length of a table",
      "Distance around a track"
    ],
    correctIndex:0,
    hint:"Square units cover a surface.",
    insight:"Misconception: all geometry measurements use the same kind of units. Principle: area uses square units because it measures surface covered."
  },
  {
    id:"68-logic-93",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"measurement-definition",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Choose the logically correct statement.",
    options:[
      "Perimeter is a linear measure, and area is a surface measure.",
      "Perimeter and area are measured the same way.",
      "Area is always greater than perimeter.",
      "A shape with longer sides always has greater area."
    ],
    correctIndex:0,
    hint:"Think about what each quantity is measuring.",
    insight:"Logic note: perimeter measures boundary length, while area measures the region inside."
  },
  {
    id:"68-op-94",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"area-rectangle",
    inattention:false,
    prompt:"A student finds the area of a rectangle with side lengths 8 m and 3 m by doing 8 + 3 = 11 m².",
    work:"Student work: area = 8 + 3 = 11 m²",
    options:[
      "They found neither the correct area nor the correct unit use. Area = 8 × 3 = 24 m².",
      "They should double 11 to get 22 m².",
      "They should subtract 3 from 8 to get 5 m².",
      "They should keep 11 m² because area means combine the side lengths."
    ],
    correctIndex:0,
    hint:"Area of a rectangle is length times width.",
    insight:"Misconception: add side lengths instead of multiplying dimensions for area. Principle: area counts square units covering the rectangle. Correct: 24 m²."
  },
  {
    id:"68-reason-94",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"compare-perimeters",
    inattention:false,
    prompt:"Which rectangle has the greatest perimeter?",
    work:"Compare 2 by 9, 4 by 6, 5 by 5, and 3 by 7.",
    options:[
      "2 by 9",
      "4 by 6",
      "5 by 5",
      "3 by 7"
    ],
    correctIndex:0,
    hint:"Use perimeter = 2(length + width).",
    insight:"Misconception: the rectangle with the largest area must also have the largest perimeter. Principle: compare perimeter directly. Greatest perimeter: 2 by 9."
  },
  {
    id:"68-logic-94",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"Which example is a valid counterexample to the claim 'A shape with greater perimeter must have greater area'?",
    work:"Choose the example that proves the claim false.",
    options:[
      "A 1 by 9 rectangle has perimeter 20 and area 9, while a 4 by 4 square has perimeter 16 and area 16.",
      "A 3 by 3 square has perimeter 12 and area 9.",
      "A 2 by 6 rectangle has perimeter 16 and area 12.",
      "A 5 by 5 square has perimeter 20 and area 25."
    ],
    correctIndex:0,
    hint:"Look for a case where the larger perimeter goes with a smaller area.",
    insight:"Logic note: one counterexample disproves an 'must' or 'always' claim."
  },
  {
    id:"68-op-95",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"triangle-perimeter",
    inattention:false,
    prompt:"A student finds the perimeter of a triangle with side lengths 5 cm, 7 cm, and 9 cm by doing 5 × 7 × 9 = 315 cm.",
    work:"Student work: perimeter = 5 × 7 × 9 = 315 cm",
    options:[
      "They multiplied the side lengths, but perimeter is the sum of the side lengths: 5 + 7 + 9 = 21 cm.",
      "They should divide 315 by 3 to get 105 cm.",
      "They should add only the two shorter sides to get 12 cm.",
      "They should keep 315 cm because all geometry problems use multiplication."
    ],
    correctIndex:0,
    hint:"Perimeter means total distance around the outside.",
    insight:"Misconception: multiply all dimensions in any geometry problem. Principle: perimeter adds edge lengths. Correct: 21 cm."
  },
  {
    id:"68-reason-95",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"same-perimeter-different-area",
    inattention:false,
    prompt:"Which pair of rectangles has the same perimeter but different areas?",
    work:"Compare the choices.",
    options:[
      "2 by 8 and 5 by 5",
      "3 by 6 and 4 by 5",
      "2 by 7 and 3 by 6",
      "4 by 4 and 2 by 8"
    ],
    correctIndex:0,
    hint:"Check perimeter first, then compare area.",
    insight:"Misconception: same perimeter means same area. Principle: perimeter and area can vary independently. Here both perimeters are 20, but the areas are 16 and 25."
  },
  {
    id:"68-logic-95",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"unit-consistency",
    inattention:false,
    prompt:"Which statement is logically correct about units?",
    work:"Choose the valid statement.",
    options:[
      "If a rectangle’s side lengths are in feet, its area is in square feet.",
      "If side lengths are in feet, area is also in feet.",
      "Perimeter is measured in square units.",
      "Area and perimeter should always have the same units."
    ],
    correctIndex:0,
    hint:"Multiplying length by width multiplies the units too.",
    insight:"Logic note: area comes from multiplying two lengths, so its units are squared."
  },
  {
    id:"68-op-96",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"missing-side-perimeter",
    inattention:false,
    prompt:"A rectangle has perimeter 30 in and one side length 8 in. A student says the other side length is 22 in.",
    work:"Student work: 30 - 8 = 22",
    options:[
      "They forgot that perimeter includes two of each side. Since 2L + 2W = 30 and L = 8, then 16 + 2W = 30, so W = 7.",
      "They should divide 22 by 8 to get the missing side.",
      "They should keep 22 because perimeter minus one side gives the other side.",
      "They should double 8 to get 16 and stop there."
    ],
    correctIndex:0,
    hint:"A rectangle has two equal lengths and two equal widths.",
    insight:"Misconception: subtract only one side from perimeter. Principle: account for both matching sides. Correct missing side: 7 in."
  },
  {
    id:"68-reason-96",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"best-measure",
    inattention:false,
    prompt:"A teacher wants to know how much carpet is needed to cover a room. Which measurement is most useful?",
    work:"Choose the quantity that answers the question.",
    options:[
      "Area of the floor",
      "Perimeter of the room",
      "Length of one wall",
      "Height of the ceiling"
    ],
    correctIndex:0,
    hint:"Carpet covers the inside surface of the floor.",
    insight:"Misconception: any room measurement might work. Principle: choose the quantity that matches the real situation. Covering a floor uses area."
  },
  {
    id:"68-logic-96",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"always-sometimes-never",
    inattention:false,
    prompt:"Complete the statement: 'Two shapes with the same area have the same perimeter.'",
    work:"Choose the best classification.",
    options:[
      "Sometimes true",
      "Always true",
      "Never true",
      "Only true for rectangles"
    ],
    correctIndex:0,
    hint:"Think of cases where it works and cases where it does not.",
    insight:"Logic note: some shapes with the same area can have different perimeters, so the statement is only sometimes true."
  }
  , // AREA VS PERIMETER CONFUSION PACK — 289-300
  {
    id:"68-op-97",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"area-vs-perimeter",
    inattention:false,
    prompt:"A student says the area of a rectangle with length 9 cm and width 2 cm is 22 cm² because 9 + 9 + 2 + 2 = 22.",
    work:"Student work: area = 9 + 9 + 2 + 2 = 22 cm²",
    options:[
      "They found the perimeter, not the area. Area = 9 × 2 = 18 cm².",
      "They should divide 22 by 2 to get 11 cm².",
      "They should add only 9 + 2 to get 11 cm².",
      "They should keep 22 cm² because area means total edge length."
    ],
    correctIndex:0,
    hint:"Area counts the square units inside the rectangle.",
    insight:"Misconception: use perimeter addition for area. Principle: area of a rectangle is length × width. Correct: 18 cm²."
  },
  {
    id:"68-reason-97",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"real-world-measure-choice",
    inattention:false,
    prompt:"A gardener wants to put fencing around a rectangular garden. Which measurement is needed?",
    work:"Choose the quantity that matches the situation.",
    options:[
      "Perimeter",
      "Area",
      "Volume",
      "Height"
    ],
    correctIndex:0,
    hint:"Fencing goes around the outside edge.",
    insight:"Misconception: all shape questions use area. Principle: choose the measure that matches the context. Around the outside uses perimeter."
  },
  {
    id:"68-logic-97",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"definition-match",
    inattention:false,
    prompt:"Which statement is logically correct?",
    work:"Choose the valid definition.",
    options:[
      "Area measures the space inside a shape, while perimeter measures the distance around it.",
      "Area and perimeter both measure the outside edge of a shape.",
      "Perimeter is found by multiplying side lengths.",
      "Area is always smaller than perimeter."
    ],
    correctIndex:0,
    hint:"Think about inside versus around.",
    insight:"Logic note: area and perimeter describe different attributes of a shape."
  },
  {
    id:"68-op-98",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"perimeter-vs-area",
    inattention:false,
    prompt:"A student says the perimeter of a 5 m by 3 m rectangle is 15 m because 5 × 3 = 15.",
    work:"Student work: perimeter = 5 × 3 = 15 m",
    options:[
      "They found the area, not the perimeter. Perimeter = 5 + 3 + 5 + 3 = 16 m.",
      "They should divide 15 by 2 to get 7.5 m.",
      "They should keep 15 m because perimeter uses multiplication.",
      "They should add 5 + 3 to get 8 m."
    ],
    correctIndex:0,
    hint:"Perimeter is the total around all sides.",
    insight:"Misconception: use area multiplication when perimeter is asked. Principle: add all side lengths for perimeter. Correct: 16 m."
  },
  {
    id:"68-reason-98",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"same-area-different-perimeter",
    inattention:false,
    prompt:"Which pair of rectangles has the same area but different perimeters?",
    work:"Compare the choices.",
    options:[
      "2 by 6 and 3 by 4",
      "2 by 5 and 1 by 10",
      "4 by 4 and 2 by 8",
      "3 by 7 and 1 by 21"
    ],
    correctIndex:0,
    hint:"Check area first, then compare perimeter.",
    insight:"Misconception: same area means same perimeter. Principle: area and perimeter can change independently. Both areas are 12, but the perimeters are 16 and 14."
  },
  {
    id:"68-logic-98",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"always-sometimes-never",
    inattention:false,
    prompt:"Complete the statement: 'Two rectangles with the same perimeter have the same area.'",
    work:"Choose the best classification.",
    options:[
      "Sometimes true",
      "Always true",
      "Never true",
      "Only true when both rectangles are squares"
    ],
    correctIndex:0,
    hint:"Think of one case where it works and one where it does not.",
    insight:"Logic note: equal perimeter does not force equal area, though it can happen sometimes."
  },
  {
    id:"68-op-99",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"tile-count-area",
    inattention:false,
    prompt:"A floor is covered by 4 rows of 7 square tiles. A student says the area is 22 square tiles because 4 + 7 + 4 + 7 = 22.",
    work:"Student work: area = 4 + 7 + 4 + 7 = 22 square tiles",
    options:[
      "They counted the boundary idea instead of the inside coverage. Area = 4 × 7 = 28 square tiles.",
      "They should divide 22 by 2 to get 11 square tiles.",
      "They should keep 22 because rows and columns are added.",
      "They should subtract 4 from 7 to get 3 square tiles."
    ],
    correctIndex:0,
    hint:"Rows times columns gives the number of square tiles.",
    insight:"Misconception: use perimeter addition for tiled area. Principle: area counts all unit squares inside. Correct: 28 square tiles."
  },
  {
    id:"68-reason-99",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"which-shape-needs-more-fence",
    inattention:false,
    prompt:"Which rectangle needs more fencing?",
    work:"Compare a 4 by 9 rectangle and a 6 by 6 rectangle.",
    options:[
      "4 by 9 rectangle",
      "6 by 6 rectangle",
      "They need the same amount",
      "There is not enough information"
    ],
    correctIndex:0,
    hint:"Fencing depends on perimeter, not area.",
    insight:"Misconception: compare only area. Principle: compute perimeter for the real need. Perimeters are 26 and 24, so 4 by 9 needs more fencing."
  },
  {
    id:"68-logic-99",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"Which example is a valid counterexample to the claim 'A figure with greater area must have greater perimeter'?",
    work:"Choose the example that proves the claim false.",
    options:[
      "A 4 by 4 square has area 16 and perimeter 16, while a 1 by 10 rectangle has area 10 and perimeter 22.",
      "A 3 by 3 square has area 9 and perimeter 12.",
      "A 2 by 8 rectangle has area 16 and perimeter 20.",
      "A 5 by 5 square has area 25 and perimeter 20."
    ],
    correctIndex:0,
    hint:"Look for a case where the larger area has the smaller perimeter.",
    insight:"Logic note: one counterexample is enough to break an 'must' claim."
  },
  {
    id:"68-op-100",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"missing-side-area",
    inattention:false,
    prompt:"A rectangle has area 36 cm² and one side length 4 cm. A student says the other side is 32 cm because 36 - 4 = 32.",
    work:"Student work: 36 - 4 = 32",
    options:[
      "They used subtraction instead of division. Since area = length × width, the missing side is 36 ÷ 4 = 9 cm.",
      "They should add 36 and 4 to get 40 cm.",
      "They should keep 32 cm because area minus one side gives the other side.",
      "They should double 4 to get 8 cm."
    ],
    correctIndex:0,
    hint:"Use the area formula and undo multiplication.",
    insight:"Misconception: subtract one side from area. Principle: use inverse operations with the area formula. Correct missing side: 9 cm."
  },
  {
    id:"68-reason-100",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"cover-vs-border",
    inattention:false,
    prompt:"A teacher wants to know how much paint is needed to cover the front of a bulletin board. Which measurement matters most?",
    work:"Choose the quantity that matches the situation.",
    options:[
      "Area",
      "Perimeter",
      "Length of one side",
      "Number of corners"
    ],
    correctIndex:0,
    hint:"Paint covers the inside surface.",
    insight:"Misconception: border and cover are the same kind of measurement. Principle: covering a surface uses area."
  },
  {
    id:"68-logic-100",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"unit-logic",
    inattention:false,
    prompt:"Which statement must be true about units?",
    work:"Choose the logically correct statement.",
    options:[
      "Perimeter is measured in linear units, while area is measured in square units.",
      "Perimeter and area always use the same units.",
      "Area is measured in linear units because sides are lines.",
      "Perimeter is measured in square units because it surrounds a shape."
    ],
    correctIndex:0,
    hint:"One measures length; the other measures surface.",
    insight:"Logic note: unit type tells you what kind of quantity is being measured."
  }
  , // RATIOS AND PROPORTIONAL REASONING TRAPS PACK — 301-312
  {
    id:"68-op-101",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"additive-instead-of-multiplicative",
    inattention:false,
    prompt:"A drink mix uses 2 cups concentrate for every 5 cups water. A student says that for 10 cups of water, you need 7 cups of concentrate because 5 more water means 5 more concentrate.",
    work:"Student work: 2 + 5 = 7 cups concentrate",
    options:[
      "They added instead of scaling the ratio. Since 10 is double 5, the concentrate should also double: 2 × 2 = 4 cups.",
      "They should subtract 5 from 10 to get 5 cups of concentrate.",
      "They should keep 7 cups because both parts must increase by the same amount.",
      "They should use 12 cups of concentrate because 2 + 10 = 12."
    ],
    correctIndex:0,
    hint:"Equivalent ratios use the same scale factor on both quantities.",
    insight:"Misconception: treat a ratio as additive. Principle: proportional relationships scale multiplicatively. Correct amount: 4 cups concentrate."
  },
  {
    id:"68-reason-101",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"identify-proportional-table",
    inattention:false,
    prompt:"Which table shows a proportional relationship between x and y?",
    work:"Choose the table with a constant multiplicative relationship.",
    options:[
      "x: 1, 2, 3   y: 4, 8, 12",
      "x: 1, 2, 3   y: 4, 7, 10",
      "x: 0, 1, 2   y: 5, 9, 13",
      "x: 2, 4, 6   y: 3, 5, 7"
    ],
    correctIndex:0,
    hint:"For a proportional relationship, the ratio y/x stays constant for nonzero x.",
    insight:"Misconception: equal increases always mean proportional. Principle: proportional tables keep the same multiplicative relationship. Here, y = 4x."
  },
  {
    id:"68-logic-101",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"equivalent-ratio-rule",
    inattention:false,
    prompt:"Which statement is logically correct about equivalent ratios?",
    work:"Choose the valid rule.",
    options:[
      "A ratio stays equivalent when both terms are multiplied or divided by the same nonzero number.",
      "A ratio stays equivalent whenever the same number is added to both terms.",
      "Equivalent ratios must always use smaller numbers.",
      "Two ratios are equivalent whenever their first terms match."
    ],
    correctIndex:0,
    hint:"Think about what preserves the same multiplicative relationship.",
    insight:"Logic note: equivalent ratios preserve value by using the same scale factor on both terms."
  },
  {
    id:"68-op-102",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"unit-rate-subtraction",
    inattention:false,
    prompt:"A store sells 4 granola bars for $6. A student says 1 granola bar costs $2 because 6 - 4 = 2.",
    work:"Student work: 6 - 4 = 2 dollars",
    options:[
      "They used subtraction instead of division. The unit price is $6 ÷ 4 = $1.50 per bar.",
      "They should add 6 and 4 to get $10 per bar.",
      "They should keep $2 because unit rate means the difference between numbers.",
      "They should divide 4 by 6 to get about $0.67 per bar."
    ],
    correctIndex:0,
    hint:"A unit rate tells the amount for 1 unit.",
    insight:"Misconception: find a unit rate by subtracting. Principle: use division to find the amount per 1 unit. Correct unit price: $1.50."
  },
  {
    id:"68-reason-102",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"equivalent-mixture",
    inattention:false,
    prompt:"A paint mix uses 2 cups red for every 3 cups yellow. Which mixture keeps the same ratio?",
    work:"Choose the equivalent ratio.",
    options:[
      "4 cups red and 6 cups yellow",
      "4 cups red and 5 cups yellow",
      "3 cups red and 4 cups yellow",
      "2 cups red and 6 cups yellow"
    ],
    correctIndex:0,
    hint:"Multiply both parts of the ratio by the same number.",
    insight:"Misconception: close numbers are automatically equivalent. Principle: equivalent ratios come from the same scale factor."
  },
  {
    id:"68-logic-102",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"graph-origin",
    inattention:false,
    prompt:"Which statement must be true if a graph represents a proportional relationship?",
    work:"Choose the statement that always holds.",
    options:[
      "The graph passes through the origin.",
      "The graph has a constant difference between y-values.",
      "The graph curves upward.",
      "The graph always rises by 1."
    ],
    correctIndex:0,
    hint:"In a proportional relationship, 0 of one quantity matches 0 of the other.",
    insight:"Logic note: proportional relationships have the form y = kx, so their graphs pass through (0, 0)."
  },
  {
    id:"68-op-103",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"part-part-vs-part-whole",
    inattention:false,
    prompt:"A class has 12 boys and 18 girls. A student says the ratio of boys to total students is 12:18.",
    work:"Student work: boys : total = 12 : 18",
    options:[
      "They used boys to girls instead of boys to total. The correct ratio is 12:30, which simplifies to 2:5.",
      "They should add 12 and 18 to get 30:30.",
      "They should keep 12:18 because total means the other group.",
      "They should subtract 18 from 12 to get 6:1."
    ],
    correctIndex:0,
    hint:"Total students means boys plus girls.",
    insight:"Misconception: confuse part-part and part-whole ratios. Principle: match the ratio to the words in the question. Correct ratio: 12:30 = 2:5."
  },
  {
    id:"68-reason-103",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"nonproportional-situation",
    inattention:false,
    prompt:"Which situation is NOT proportional?",
    work:"Choose the situation that does not keep a constant ratio.",
    options:[
      "A babysitter charges $10 to arrive plus $8 per hour.",
      "A map uses 1 inch for every 20 miles.",
      "A recipe uses 3 cups flour for every 2 cups milk.",
      "A runner travels 6 miles each hour at a constant speed."
    ],
    correctIndex:0,
    hint:"Look for a fixed starting amount that breaks the constant ratio.",
    insight:"Misconception: every increasing relationship is proportional. Principle: proportional situations have no starting fee and keep a constant multiplicative relationship."
  },
  {
    id:"68-logic-103",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample-larger-numbers",
    inattention:false,
    prompt:"Which example is a valid counterexample to the claim 'A ratio with larger numbers is always greater'?",
    work:"Choose the example that proves the claim false.",
    options:[
      "1:2 and 2:4",
      "3:5 and 4:5",
      "2:3 and 3:4",
      "5:6 and 6:7"
    ],
    correctIndex:0,
    hint:"A counterexample needs one case where the claim fails.",
    insight:"Logic note: 1:2 and 2:4 are equal ratios even though 2:4 uses larger numbers."
  },
  {
    id:"68-op-104",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"scale-factor-addition",
    inattention:false,
    prompt:"On a map, 1 cm represents 8 km. A student says a 5 cm route represents 13 km because 8 + 5 = 13.",
    work:"Student work: 8 + 5 = 13 km",
    options:[
      "They added instead of multiplying. Since each centimeter is 8 km, 5 cm represents 5 × 8 = 40 km.",
      "They should divide 8 by 5 to get 1.6 km.",
      "They should keep 13 km because map scales are additive.",
      "They should subtract 5 from 8 to get 3 km."
    ],
    correctIndex:0,
    hint:"A scale tells how many real units match 1 map unit.",
    insight:"Misconception: combine scale numbers by addition. Principle: use multiplication for repeated equal groups. Correct distance: 40 km."
  },
  {
    id:"68-reason-104",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"same-taste-ratio",
    inattention:false,
    prompt:"A sports drink mix uses 1 scoop of powder for every 12 ounces of water. Which mix will taste the same?",
    work:"Choose the equivalent ratio.",
    options:[
      "3 scoops with 36 ounces of water",
      "2 scoops with 20 ounces of water",
      "4 scoops with 40 ounces of water",
      "5 scoops with 72 ounces of water"
    ],
    correctIndex:0,
    hint:"Equivalent mixtures keep the same amount of water per scoop.",
    insight:"Misconception: similar-looking numbers keep the same taste. Principle: equivalent mixtures preserve the same ratio."
  },
  {
    id:"68-logic-104",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"doubling-property",
    inattention:false,
    prompt:"Complete the statement: 'When two quantities are proportional, doubling one quantity doubles the other.'",
    work:"Choose the best classification.",
    options:[
      "Always true",
      "Sometimes true",
      "Never true",
      "Only true when the numbers are whole numbers"
    ],
    correctIndex:0,
    hint:"A proportional relationship keeps the same scale factor throughout.",
    insight:"Logic note: proportional relationships preserve multiplicative scaling, so doubling one quantity doubles the other."
  }
  , // PERCENT MISCONCEPTIONS PACK — 313-324
  {
    id:"68-op-105",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"percent-add-instead-of-take",
    inattention:false,
    prompt:"A student says 25% of 60 is 85 because 60 + 25 = 85.",
    work:"Student work: 60 + 25 = 85",
    options:[
      "They added the percent to the whole number. Since 25% = 0.25, compute 0.25 × 60 = 15.",
      "They should subtract 25 from 60 to get 35.",
      "They should keep 85 because percent means add-on.",
      "They should divide 60 by 25 to get 2.4."
    ],
    correctIndex:0,
    hint:"'Of' in a percent problem usually means multiply.",
    insight:"Misconception: treat a percent as a whole number to add. Principle: convert percent to a decimal or fraction, then multiply. Correct answer: 15."
  },
  {
    id:"68-reason-105",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"discount-meaning",
    inattention:false,
    prompt:"A jacket costs $50 and is on sale for 20% off. How much money is the discount?",
    work:"Choose the amount taken off.",
    options:[
      "$10",
      "$20",
      "$30",
      "$40"
    ],
    correctIndex:0,
    hint:"Find 20% of 50.",
    insight:"Misconception: confuse the percent, the discount amount, and the final price. Principle: discount amount = percent of original price. Here, 20% of $50 is $10."
  },
  {
    id:"68-logic-105",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"fraction-percent-equivalence",
    inattention:false,
    prompt:"Which statement is logically correct?",
    work:"Choose the valid equivalence.",
    options:[
      "25% means 25 out of 100, which is the same as 1/4.",
      "25% means 1 out of 25.",
      "25% is greater than 1/2.",
      "25% and 0.25 are unrelated."
    ],
    correctIndex:0,
    hint:"Percent means 'per 100.'",
    insight:"Logic note: 25% = 25/100 = 1/4 = 0.25."
  },
  {
    id:"68-op-106",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-subtract-instead-of-multiply",
    inattention:false,
    prompt:"A student says 15% of 80 is 65 because 80 - 15 = 65.",
    work:"Student work: 80 - 15 = 65",
    options:[
      "They subtracted instead of finding a percent of the whole. Since 15% = 0.15, compute 0.15 × 80 = 12.",
      "They should keep 65 because percent means difference.",
      "They should add 15 and 80 to get 95.",
      "They should divide 80 by 15 to get about 5.33."
    ],
    correctIndex:0,
    hint:"A percent of a number is found by multiplying.",
    insight:"Misconception: use subtraction because the percent is smaller than the whole. Principle: percent of a number means multiply by the percent written as a decimal or fraction. Correct answer: 12."
  },
  {
    id:"68-reason-106",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"percent-increase-meaning",
    inattention:false,
    prompt:"A phone price rises from $200 to $250. What is the percent increase?",
    work:"Choose the correct percent increase.",
    options:[
      "25%",
      "20%",
      "50%",
      "125%"
    ],
    correctIndex:0,
    hint:"First find the increase, then compare it to the original price.",
    insight:"Misconception: compare to the wrong base. Principle: percent increase uses the original amount as the reference. Increase is $50, and 50/200 = 25%."
  },
  {
    id:"68-logic-106",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"always-sometimes-never-percent",
    inattention:false,
    prompt:"Complete the statement: 'A 50% discount cuts the original price in half.'",
    work:"Choose the best classification.",
    options:[
      "Always true",
      "Sometimes true",
      "Never true",
      "Only true for even dollar amounts"
    ],
    correctIndex:0,
    hint:"Think about what 50% means.",
    insight:"Logic note: 50% means one-half of the original amount, so a 50% discount always halves the original price."
  },
  {
    id:"68-op-107",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"discount-final-price-confusion",
    inattention:false,
    prompt:"A backpack costs $80 and is on sale for 25% off. A student says the sale price is $25 because 25% off means the answer is 25.",
    work:"Student work: sale price = $25",
    options:[
      "They confused the percent with the final price. First find 25% of $80, which is $20, then subtract: $80 - $20 = $60.",
      "They should add 25 to 80 to get $105.",
      "They should divide 80 by 25 to get $3.20.",
      "They should keep $25 because percent off gives the final price directly."
    ],
    correctIndex:0,
    hint:"Percent off tells how much to subtract from the original price.",
    insight:"Misconception: use the percent number itself as the answer. Principle: find the discount amount, then subtract it from the original price. Correct sale price: $60."
  },
  {
    id:"68-reason-107",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"which-is-greater-percent",
    inattention:false,
    prompt:"Which is greater?",
    work:"Compare the two quantities.",
    options:[
      "30% of 90",
      "20% of 120",
      "They are equal",
      "There is not enough information"
    ],
    correctIndex:0,
    hint:"Find each percent of each whole.",
    insight:"Misconception: the larger whole always gives the larger percent result. Principle: compare the actual amounts. 30% of 90 is 27, while 20% of 120 is 24."
  },
  {
    id:"68-logic-107",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample-percent",
    inattention:false,
    prompt:"Which example is a valid counterexample to the claim 'A larger percent always means a larger amount'?",
    work:"Choose the example that proves the claim false.",
    options:[
      "50% of 10 is 5, while 20% of 40 is 8.",
      "10% of 30 is 3, while 5% of 30 is 1.5.",
      "25% of 100 is 25, while 10% of 100 is 10.",
      "40% of 50 is 20, while 30% of 50 is 15."
    ],
    correctIndex:0,
    hint:"Look for a case where the larger percent gives the smaller actual amount.",
    insight:"Logic note: one counterexample breaks an 'always' claim. Here, 50% is the larger percent, but it produces the smaller amount."
  },
  {
    id:"68-op-108",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-to-decimal-place-value",
    inattention:false,
    prompt:"A student says 7% of 300 is 210 because 7% = 0.7 and 0.7 × 300 = 210.",
    work:"Student work: 7% = 0.7, so answer = 210",
    options:[
      "They moved the decimal the wrong way. 7% = 0.07, so 0.07 × 300 = 21.",
      "They should divide 300 by 7 to get about 42.9.",
      "They should keep 210 because 7% is the same as 7 tenths.",
      "They should add 7 and 300 to get 307."
    ],
    correctIndex:0,
    hint:"Percent means divide by 100.",
    insight:"Misconception: convert percent to decimal incorrectly. Principle: 7% = 7/100 = 0.07. Correct answer: 21."
  },
  {
    id:"68-reason-108",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"tax-vs-final-price",
    inattention:false,
    prompt:"A game costs $40 before tax. Sales tax is 5%. Which amount is the tax only?",
    work:"Choose the tax amount, not the total price.",
    options:[
      "$2",
      "$5",
      "$35",
      "$42"
    ],
    correctIndex:0,
    hint:"Find 5% of 40.",
    insight:"Misconception: confuse the tax amount with the final total. Principle: tax only is the percent of the original price. Here, 5% of $40 is $2."
  },
  {
    id:"68-logic-108",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"benchmark-percent",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Choose the logically correct statement.",
    options:[
      "10% of any number is one-tenth of that number.",
      "10% of a number is always greater than the number.",
      "10% means add 10 to the number.",
      "10% and 0.10 describe different amounts."
    ],
    correctIndex:0,
    hint:"Percent means per hundred.",
    insight:"Logic note: 10% = 10/100 = 1/10, so 10% of any number is one-tenth of it."
  }
  , // INTEGER OPERATIONS CONFUSION PACK — 325-336
  {
    id:"68-op-109",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"integer-addition-signs",
    inattention:false,
    prompt:"A student says -3 + 8 = -11 because 3 + 8 = 11 and one number is negative.",
    work:"Student work: -3 + 8 = -11",
    options:[
      "They added the absolute values without thinking about direction on the number line. Since 8 is 5 more than 3, -3 + 8 = 5.",
      "They should subtract 8 from 3 to get -5.",
      "They should keep -11 because any sum with a negative is negative.",
      "They should multiply 3 and 8 to get 24."
    ],
    correctIndex:0,
    hint:"For different signs, compare the distances from 0.",
    insight:"Misconception: add the absolute values and keep a negative sign. Principle: when signs differ, subtract absolute values and keep the sign of the number with greater magnitude. Correct answer: 5."
  },
  {
    id:"68-reason-109",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"integer-comparison-context",
    inattention:false,
    prompt:"At noon the temperature was -4°C. By evening it rose 9 degrees. What was the evening temperature?",
    work:"Choose the correct temperature.",
    options:[
      "5°C",
      "-13°C",
      "-5°C",
      "13°C"
    ],
    correctIndex:0,
    hint:"A rise means add.",
    insight:"Misconception: negative temperatures always stay negative after a change. Principle: model the situation with integer addition. -4 + 9 = 5."
  },
  {
    id:"68-logic-109",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"number-line-order",
    inattention:false,
    prompt:"Which statement is logically correct?",
    work:"Choose the valid statement.",
    options:[
      "On a number line, the number farther to the right is greater, even when both numbers are negative.",
      "-8 is greater than -3 because 8 is greater than 3.",
      "All negative numbers are less than 0 and also less than each other equally.",
      "A number with a negative sign is always farther right than a positive number."
    ],
    correctIndex:0,
    hint:"Think about the order of numbers on the number line.",
    insight:"Logic note: location on the number line determines which integer is greater."
  },
  {
    id:"68-op-110",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"subtract-negative",
    inattention:false,
    prompt:"A student says 6 - (-4) = 2 because 6 - 4 = 2.",
    work:"Student work: 6 - (-4) = 2",
    options:[
      "They ignored that subtracting a negative is the same as adding the opposite. So 6 - (-4) = 6 + 4 = 10.",
      "They should keep 2 because subtraction always makes a number smaller.",
      "They should compute -6 + 4 = -2.",
      "They should divide 6 by 4 to get 1.5."
    ],
    correctIndex:0,
    hint:"Subtracting a negative moves right on the number line.",
    insight:"Misconception: treat subtracting a negative like ordinary subtraction. Principle: subtracting a negative is addition. Correct answer: 10."
  },
  {
    id:"68-reason-110",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"integer-change-elevator",
    inattention:false,
    prompt:"An elevator starts on floor -3 and goes up 7 floors. Where does it end?",
    work:"Choose the final floor.",
    options:[
      "4",
      "-10",
      "-4",
      "10"
    ],
    correctIndex:0,
    hint:"Going up means add 7.",
    insight:"Misconception: add the numbers but keep the negative sign. Principle: use the number line meaning of integer addition. -3 + 7 = 4."
  },
  {
    id:"68-logic-110",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"opposite-definition",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Choose the logically correct statement.",
    options:[
      "The opposite of -7 is 7.",
      "The opposite of -7 is -7.",
      "The opposite of 7 is 0.",
      "Every number has two opposites."
    ],
    correctIndex:0,
    hint:"Opposites are the same distance from 0 in opposite directions.",
    insight:"Logic note: a number and its opposite add to 0."
  },
  {
    id:"68-op-111",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"integer-multiplication-sign",
    inattention:false,
    prompt:"A student says -4 × 5 = 20 because 4 × 5 = 20.",
    work:"Student work: -4 × 5 = 20",
    options:[
      "They ignored the sign rule. A negative times a positive is negative, so -4 × 5 = -20.",
      "They should keep 20 because multiplication always gives a positive result.",
      "They should add -4 and 5 to get 1.",
      "They should divide 20 by 5 to get 4."
    ],
    correctIndex:0,
    hint:"One negative factor makes the product negative.",
    insight:"Misconception: multiply the numbers and ignore the sign. Principle: the product of one negative and one positive is negative. Correct answer: -20."
  },
  {
    id:"68-reason-111",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"smallest-integer-expression",
    inattention:false,
    prompt:"Which expression has the smallest value?",
    work:"Compare the values.",
    options:[
      "-3 × 4",
      "-3 + 4",
      "3 - 4",
      "-3 - 4"
    ],
    correctIndex:0,
    hint:"Evaluate each expression, then compare the results.",
    insight:"Misconception: expressions with subtraction are always the smallest. Principle: compare actual values. The results are -12, 1, -1, and -7, so -12 is smallest."
  },
  {
    id:"68-logic-111",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"integer-product-rule",
    inattention:false,
    prompt:"Complete the statement: 'The product of two negative integers is positive.'",
    work:"Choose the best classification.",
    options:[
      "Always true",
      "Sometimes true",
      "Never true",
      "Only true when the integers are even"
    ],
    correctIndex:0,
    hint:"Think of examples such as (-2)(-3).",
    insight:"Logic note: the sign rule for multiplying two negative integers always gives a positive product."
  },
  {
    id:"68-op-112",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"absolute-value-sign",
    inattention:false,
    prompt:"A student says |-9| = -9 because the number inside the bars is negative.",
    work:"Student work: |-9| = -9",
    options:[
      "They confused absolute value with the original number. Absolute value is distance from 0, so |-9| = 9.",
      "They should keep -9 because the bars do not change the sign.",
      "They should add 9 and 0 to get 9 only when the number is positive.",
      "They should change it to 0 because absolute value means zero out the sign."
    ],
    correctIndex:0,
    hint:"Distance from 0 is never negative.",
    insight:"Misconception: absolute value keeps the original sign. Principle: absolute value is distance from 0, so it is nonnegative. Correct answer: 9."
  },
  {
    id:"68-reason-112",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"integer-bank-context",
    inattention:false,
    prompt:"A bank account is $12 below zero. Then $20 is deposited. What is the new balance?",
    work:"Choose the new balance.",
    options:[
      "$8",
      "-$8",
      "$32",
      "-$32"
    ],
    correctIndex:0,
    hint:"Below zero means -12. A deposit means add.",
    insight:"Misconception: keep the negative sign after any operation with a negative number. Principle: represent the situation with integers. -12 + 20 = 8."
  },
  {
    id:"68-logic-112",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample-subtraction",
    inattention:false,
    prompt:"Which example is a valid counterexample to the claim 'Subtracting always makes a number smaller'?",
    work:"Choose the example that proves the claim false.",
    options:[
      "5 - (-2) = 7",
      "9 - 3 = 6",
      "12 - 5 = 7",
      "8 - 1 = 7"
    ],
    correctIndex:0,
    hint:"Look for a subtraction example where the result gets larger.",
    insight:"Logic note: one counterexample breaks an 'always' claim. Subtracting a negative can make a number larger."
  },
// EXPRESSIONS AND ORDER OF OPERATIONS PACK — 337-348
  {
    id:"68-op-113",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"order-of-operations",
    inattention:false,
    prompt:"A student computes 8 + 2 × 5 = 50.",
    work:"Student work: 8 + 2 × 5 = 50",
    options:[
      "They added first, but multiplication comes before addition. Compute 2 × 5 = 10, then 8 + 10 = 18.",
      "They should subtract 2 from 8 first.",
      "They should keep 50 because left to right always comes first.",
      "They should divide 8 by 2 and then multiply by 5."
    ],
    correctIndex:0,
    hint:"Multiply before adding unless parentheses change the grouping.",
    insight:"Misconception: evaluate strictly left to right without order of operations. Principle: multiplication comes before addition. Correct: 18."
  },
  {
    id:"68-reason-113",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"expression-value",
    inattention:false,
    prompt:"Which expression has a value of 18?",
    work:"Evaluate each choice using order of operations.",
    options:[
      "8 + 2 × 5",
      "(8 + 2) × 5",
      "8 × 2 + 5",
      "8 + 2 + 5"
    ],
    correctIndex:0,
    hint:"Check whether multiplication happens before addition.",
    insight:"Misconception: the same numbers always make similar values. Principle: operation order matters. Here 8 + 2 × 5 = 18."
  },
  {
    id:"68-logic-113",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"must-be-true",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Choose the logically valid statement about expressions.",
    options:[
      "Changing parentheses can change the value of an expression.",
      "Multiplication is always done last.",
      "Expressions with the same numbers always have the same value.",
      "Parentheses never affect the value."
    ],
    correctIndex:0,
    hint:"Compare 8 + 2 × 5 with (8 + 2) × 5.",
    insight:"Logic note: grouping symbols can change which operations happen first, so they can change the result."
  },
  {
    id:"68-op-114",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"substitution",
    inattention:false,
    prompt:"When x = 4, a student evaluates 2x + 3 as 24 + 3 = 27.",
    work:"Student work: 2x + 3 = 24 + 3 = 27",
    options:[
      "They treated 2x like 24 instead of 2 × 4. Correct substitution gives 2(4) + 3 = 11.",
      "They should always place the variable after the number.",
      "They should add 2 and 4 first to get 6, then write 63.",
      "They should ignore the 3 because variables matter more."
    ],
    correctIndex:0,
    hint:"Substitute the value for x, then multiply.",
    insight:"Misconception: attach the value to the coefficient as digits. Principle: 2x means 2 times x. Correct: 11."
  },
  {
    id:"68-reason-114",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"negative-substitution",
    inattention:false,
    prompt:"If y = -2, which value is correct for 3y - 4?",
    work:"Substitute carefully and follow order of operations.",
    options:[
      "-10",
      "2",
      "10",
      "-2"
    ],
    correctIndex:0,
    hint:"Replace y with -2, then multiply before subtracting.",
    insight:"Misconception: lose the negative sign or subtract in the wrong order. Principle: substitute first, then evaluate carefully. Correct: -10."
  },
  {
    id:"68-logic-114",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"procedure-logic",
    inattention:false,
    prompt:"Which statement about substitution is logically correct?",
    work:"Choose the best rule.",
    options:[
      "To evaluate an expression, replace the variable with its value and then follow order of operations.",
      "Variables should never be replaced with numbers.",
      "After substitution, addition must always come first.",
      "Substitution only works for equations, not expressions."
    ],
    correctIndex:0,
    hint:"Substitution turns a variable expression into a numerical expression.",
    insight:"Logic note: substitution is valid because the variable stands for a value that can be replaced before evaluating."
  },
  {
    id:"68-op-115",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"exponent-order",
    inattention:false,
    prompt:"A student computes 3^2 + 4 as 49 because they add first and then square.",
    work:"Student work: 3^2 + 4 = 49",
    options:[
      "They changed the grouping. Evaluate the exponent first: 3^2 = 9, then 9 + 4 = 13.",
      "They should square the 4 too and get 25.",
      "They should subtract 4 from 9 and get 5.",
      "They should keep 49 because exponents always apply to the whole expression."
    ],
    correctIndex:0,
    hint:"The exponent is attached only to the 3.",
    insight:"Misconception: treat an exponent as if it covers nearby addition. Principle: exponents apply to the grouped base only. Correct: 13."
  },
  {
    id:"68-reason-115",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equivalent-value",
    inattention:false,
    prompt:"Which pair has the same value?",
    work:"Evaluate both parts of each pair carefully.",
    options:[
      "2 + 3 × 4 and 14",
      "(2 + 3) × 4 and 14",
      "2 + 3 × 4 and 20",
      "2^3 + 4 and 16"
    ],
    correctIndex:0,
    hint:"Multiplication happens before addition.",
    insight:"Misconception: similar-looking expressions must match the same number. Principle: evaluate each expression exactly. Here 2 + 3 × 4 = 14."
  },
  {
    id:"68-logic-115",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"rule-statement",
    inattention:false,
    prompt:"Which statement is logically valid?",
    work:"Choose the correct rule about exponents.",
    options:[
      "An exponent is applied before addition unless parentheses change the grouping.",
      "You should always add before using an exponent.",
      "If an expression has an exponent, ignore multiplication.",
      "Parentheses and exponents always do the same job."
    ],
    correctIndex:0,
    hint:"Compare 3^2 + 4 with (3 + 4)^2.",
    insight:"Logic note: exponents act on their base or grouped base, and parentheses can change what that base is."
  },
  {
    id:"68-op-116",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"distribution",
    inattention:false,
    prompt:"A student simplifies 3(x + 4) as 3x + 4.",
    work:"Student work: 3(x + 4) = 3x + 4",
    options:[
      "They distributed 3 to only one term. Correct distribution gives 3x + 12.",
      "They should add x and 4 first and leave it as x + 7.",
      "They should divide everything by 3.",
      "They should keep 3x + 4 because the outside number affects only x."
    ],
    correctIndex:0,
    hint:"The outside factor multiplies every term inside the parentheses.",
    insight:"Misconception: distribute to one term only. Principle: multiplication outside parentheses applies to each term. Correct: 3x + 12."
  },
  {
    id:"68-reason-116",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"expression-equivalence",
    inattention:false,
    prompt:"When x = 2, which expression has the same value as 3(x + 4)?",
    work:"Compare by substitution or distribution.",
    options:[
      "3x + 12",
      "3x + 4",
      "x + 12",
      "3 + x + 4"
    ],
    correctIndex:0,
    hint:"Try evaluating the original expression first.",
    insight:"Misconception: the distributed form loses part of the original grouping. Principle: equivalent expressions give the same value for the same input. Here both equal 18."
  },
  {
    id:"68-logic-116",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"always-sometimes-never",
    inattention:false,
    prompt:"Complete the statement: '3(x + 4) = 3x + 12' is...",
    work:"Choose the best classification.",
    options:[
      "Always true",
      "Sometimes true",
      "Never true",
      "Only true when x = 4"
    ],
    correctIndex:0,
    hint:"Distribution works for every value of x.",
    insight:"Logic note: equivalent expressions remain equal for all allowed values of the variable."
  }
, // BASIC PROBABILITY MISCONCEPTIONS PACK — 349-360
  {
    id:"68-op-117",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"probability-total-outcomes",
    inattention:false,
    prompt:"A bag has 3 red marbles and 2 blue marbles. A student says the probability of drawing a red marble is 3/2.",
    work:"Student work: red = 3, blue = 2, so probability of red = 3/2",
    options:[
      "They used red over blue instead of favorable over total. The correct probability is 3/5.",
      "They should add 3 and 2 and get 6/5.",
      "They should subtract 2 from 3 and get 1/5.",
      "They should keep 3/2 because red is more likely than blue."
    ],
    correctIndex:0,
    hint:"Probability is favorable outcomes divided by total outcomes.",
    insight:"Misconception: compare one color to another instead of using the whole sample space. Principle: probability = favorable ÷ total. Correct: 3/5."
  },
  {
    id:"68-reason-117",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"probability-comparison",
    inattention:false,
    prompt:"A spinner has 8 equal sections: 5 are green and 3 are yellow. Which statement is correct?",
    work:"Use favorable outcomes over total outcomes.",
    options:[
      "The probability of green is 5/8.",
      "The probability of green is 5/3.",
      "The probability of green is 3/8.",
      "The probability of green is 8/5."
    ],
    correctIndex:0,
    hint:"Count green sections, then divide by all sections.",
    insight:"Misconception: use part-to-part instead of part-to-whole. Principle: total outcomes belong in the denominator. Correct: 5/8."
  },
  {
    id:"68-logic-117",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"probability-rule",
    inattention:false,
    prompt:"Which statement about probability must be true?",
    work:"Choose the logically correct rule.",
    options:[
      "A probability is found by dividing favorable outcomes by total possible outcomes.",
      "A probability is always found by dividing the larger number by the smaller number.",
      "A probability can be greater than 1 in ordinary situations.",
      "A probability never depends on all possible outcomes."
    ],
    correctIndex:0,
    hint:"Think about what the denominator counts.",
    insight:"Logic note: basic probability compares desired outcomes with the entire set of possible outcomes."
  },
  {
    id:"68-op-118",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"probability-range",
    inattention:false,
    prompt:"A student says an event has probability 7/4 because it is very likely.",
    work:"Student work: very likely means a probability bigger than 1",
    options:[
      "That is incorrect because basic probability must be between 0 and 1 inclusive.",
      "That is correct because likely events always have probabilities above 1.",
      "That is correct because 7 is larger than 4.",
      "That is incorrect only if the event is impossible."
    ],
    correctIndex:0,
    hint:"Impossible is 0 and certain is 1.",
    insight:"Misconception: treat probability like a score that can exceed 1. Principle: probabilities range from 0 to 1 inclusive."
  },
  {
    id:"68-reason-118",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"certain-impossible",
    inattention:false,
    prompt:"Which event has probability 1?",
    work:"Identify the certain event.",
    options:[
      "Rolling a number less than 7 on a standard six-sided die",
      "Rolling a 7 on a standard six-sided die",
      "Rolling an even number on a standard six-sided die",
      "Rolling a prime number on a standard six-sided die"
    ],
    correctIndex:0,
    hint:"Probability 1 means the event must happen.",
    insight:"Misconception: confuse likely with certain. Principle: probability 1 means guaranteed. On a six-sided die, every outcome is less than 7."
  },
  {
    id:"68-logic-118",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"probability-language",
    inattention:false,
    prompt:"Which statement is logically valid?",
    work:"Match the language to the probability value.",
    options:[
      "An impossible event has probability 0.",
      "A likely event always has probability 1.",
      "An unlikely event has probability greater than 1.",
      "A certain event has probability 1/2."
    ],
    correctIndex:0,
    hint:"Impossible means no outcomes satisfy the event.",
    insight:"Logic note: probability language has precise meanings. Impossible = 0, certain = 1, and everything else lies between."
  },
  {
    id:"68-op-119",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"unequal-likelihood",
    inattention:false,
    prompt:"A bag contains 1 gold coin and 9 silver coins. A student says getting gold or silver is equally likely because there are two colors.",
    work:"Student work: two types means 1/2 each",
    options:[
      "That is incorrect. The outcomes are not equally likely because the counts are different.",
      "That is correct because any two choices always have probability 1/2.",
      "That is incorrect only if the bag has more than 10 coins.",
      "That is correct because color names do not affect probability."
    ],
    correctIndex:0,
    hint:"Equal likelihood depends on equal numbers of equally possible outcomes.",
    insight:"Misconception: two categories means 50-50. Principle: probabilities depend on how many of each kind there are."
  },
  {
    id:"68-reason-119",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"sample-space",
    inattention:false,
    prompt:"A bag has 4 red tiles, 4 blue tiles, and 2 yellow tiles. Which color is most likely to be chosen at random?",
    work:"Compare the counts of each color.",
    options:[
      "Red and blue are tied for most likely.",
      "Yellow is most likely because it is different.",
      "Blue is most likely because blue usually appears more.",
      "All three colors are equally likely."
    ],
    correctIndex:0,
    hint:"The largest count gives the greatest probability.",
    insight:"Misconception: focus on labels instead of counts. Principle: with equally likely picks, larger groups are more likely. Red and blue each have probability 4/10."
  },
  {
    id:"68-logic-119",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"equal-probability-condition",
    inattention:false,
    prompt:"When are two events equally likely in a simple setting like a fair spinner or random draw?",
    work:"Choose the best condition.",
    options:[
      "When they have the same number of favorable outcomes out of the same total equally likely outcomes",
      "When they have different names but are on the same spinner",
      "Whenever there are exactly two events",
      "Whenever one event sounds more common in real life"
    ],
    correctIndex:0,
    hint:"Equal probability comes from equal counts in the same sample space.",
    insight:"Logic note: equally likely events require equal favorable counts when the underlying outcomes are equally likely."
  },
  {
    id:"68-op-120",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"complement-confusion",
    inattention:false,
    prompt:"On a fair six-sided die, a student says the probability of not rolling a 2 is 1/6 because rolling a 2 is 1/6.",
    work:"Student work: P(not 2) = 1/6",
    options:[
      "They confused an event with its complement. The probability of not rolling a 2 is 5/6.",
      "They should double 1/6 and get 2/6.",
      "They should keep 1/6 because 'not' does not change probability.",
      "They should subtract 2 from 6 and get 4/6."
    ],
    correctIndex:0,
    hint:"If one outcome is a 2, how many outcomes are not 2?",
    insight:"Misconception: treat an event and its complement as having the same probability. Principle: complement counts the remaining outcomes. Correct: 5/6."
  },
  {
    id:"68-reason-120",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"complement-reasoning",
    inattention:false,
    prompt:"A fair coin is flipped once. Which statement is correct?",
    work:"Think about the event and its complement.",
    options:[
      "The probability of not getting heads is 1/2.",
      "The probability of not getting heads is 1.",
      "The probability of not getting heads is 0.",
      "The probability of not getting heads is 2/2."
    ],
    correctIndex:0,
    hint:"If the coin is fair, heads and tails are equally likely.",
    insight:"Misconception: 'not heads' sounds broad, but on a single fair coin toss it means tails only. Correct: 1/2."
  },
  {
    id:"68-logic-120",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"complement-rule",
    inattention:false,
    prompt:"Which statement about an event and its complement must be true?",
    work:"Choose the correct logical rule.",
    options:[
      "Their probabilities add to 1.",
      "Their probabilities are always equal.",
      "Their probabilities are always both greater than 1/2.",
      "Their probabilities depend only on the event name."
    ],
    correctIndex:0,
    hint:"An event either happens or does not happen.",
    insight:"Logic note: an event and its complement cover the whole sample space without overlap, so their probabilities sum to 1."
  }
, // SIGNED-NUMBER COMPARISON AND INEQUALITY TRAPS PACK — 361-372
  {
    id:"68-op-121",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"negative-comparison",
    inattention:false,
    prompt:"A student says -7 > -2 because 7 is greater than 2.",
    work:"Student work: -7 > -2",
    options:[
      "That is incorrect. -7 is less than -2 because it is farther left on the number line.",
      "That is correct because the larger absolute value is always greater.",
      "That is incorrect only if both numbers are positive.",
      "That is correct because both numbers are negative."
    ],
    correctIndex:0,
    hint:"For negative numbers, the one closer to zero is greater.",
    insight:"Misconception: compare only the digits and ignore sign. Principle: numbers farther right on the number line are greater. So -2 > -7."
  },
  {
    id:"68-reason-121",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"greatest-signed-number",
    inattention:false,
    prompt:"Which number is greatest?",
    work:"Compare negatives, zero, and positives on a number line.",
    options:[
      "3",
      "0",
      "-1",
      "-5"
    ],
    correctIndex:0,
    hint:"Any positive number is greater than 0 and any negative number.",
    insight:"Misconception: a number with a negative sign can still seem large because of its digit. Principle: positives are greater than zero and negatives."
  },
  {
    id:"68-logic-121",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"signed-number-rule",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Choose the logically correct comparison rule.",
    options:[
      "Any positive number is greater than any negative number.",
      "Any negative number is greater than zero.",
      "The number with the larger digit is always greater.",
      "Negative numbers cannot be compared."
    ],
    correctIndex:0,
    hint:"Think about where positives and negatives sit on a number line.",
    insight:"Logic note: all positive numbers are to the right of all negative numbers, so every positive is greater than every negative."
  },
  {
    id:"68-op-122",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"negative-ordering",
    inattention:false,
    prompt:"A student says -12 < -20 because 20 is bigger than 12.",
    work:"Student work: -12 < -20",
    options:[
      "That is incorrect. -12 is greater than -20 because it is closer to zero.",
      "That is correct because the larger digit always makes the smaller number.",
      "That is incorrect because both should be positive.",
      "That is correct because -20 is closer to zero."
    ],
    correctIndex:0,
    hint:"Among negatives, the number closer to zero is greater.",
    insight:"Misconception: compare absolute values only. Principle: for negatives, bigger absolute value means smaller actual value. So -12 > -20."
  },
  {
    id:"68-reason-122",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"least-to-greatest",
    inattention:false,
    prompt:"Which list is in order from least to greatest?",
    work:"Use the number line idea.",
    options:[
      "-4, -1, 0, 2",
      "-1, -4, 0, 2",
      "0, -4, -1, 2",
      "-4, 0, -1, 2"
    ],
    correctIndex:0,
    hint:"Least means farthest left on the number line.",
    insight:"Misconception: place negatives by digit size instead of position. Principle: more negative numbers are smaller."
  },
  {
    id:"68-logic-122",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"zero-comparison",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Choose the correct relationship involving zero.",
    options:[
      "Any negative number is less than 0, and 0 is less than any positive number.",
      "0 is less than every negative number.",
      "0 is greater than every positive number.",
      "0 cannot be compared to signed numbers."
    ],
    correctIndex:0,
    hint:"Zero sits between negatives and positives.",
    insight:"Logic note: the number line order is negatives, then zero, then positives."
  },
  {
    id:"68-op-123",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"inequality-with-negatives",
    inattention:false,
    prompt:"A student says -3 < -7 because 3 is less than 7.",
    work:"Student work: -3 < -7",
    options:[
      "That is incorrect. -3 is greater than -7 because it is closer to zero.",
      "That is correct because the smaller digit always makes the smaller number.",
      "That is incorrect because -7 should become positive first.",
      "That is correct because both numbers are on the same side of zero."
    ],
    correctIndex:0,
    hint:"Check which number is farther right on the number line.",
    insight:"Misconception: reverse comparison is missed with negatives. Principle: among negatives, the number closer to zero is greater. So -3 > -7."
  },
  {
    id:"68-reason-123",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"inequality-solution-check",
    inattention:false,
    prompt:"Which value makes the inequality n > -4 true?",
    work:"Choose the number greater than -4.",
    options:[
      "-1",
      "-6",
      "-8",
      "-4"
    ],
    correctIndex:0,
    hint:"Numbers greater than -4 lie to the right of -4.",
    insight:"Misconception: all negatives may seem smaller without comparison. Principle: greater means farther right. -1 is to the right of -4."
  },
  {
    id:"68-logic-123",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"comparison-principle",
    inattention:false,
    prompt:"Which statement is logically valid?",
    work:"Choose the correct general rule.",
    options:[
      "If one number is to the right of another on a number line, it is greater.",
      "If a number has a larger digit, it is always greater.",
      "Negative numbers are always greater than positive numbers with smaller digits.",
      "A number line does not help with inequalities."
    ],
    correctIndex:0,
    hint:"Number line position directly shows order.",
    insight:"Logic note: number lines encode comparison. Right means greater, left means less."
  },
  {
    id:"68-op-124",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"absolute-value-comparison",
    inattention:false,
    prompt:"A student says |-8| < |-3| because -8 < -3.",
    work:"Student work: |-8| < |-3|",
    options:[
      "That is incorrect. |-8| = 8 and |-3| = 3, so 8 > 3.",
      "That is correct because absolute value keeps the numbers negative.",
      "That is incorrect because |-8| = -8 and |-3| = -3.",
      "That is correct because -8 is farther left than -3."
    ],
    correctIndex:0,
    hint:"Absolute value is distance from zero, not the original sign.",
    insight:"Misconception: compare the original signed numbers instead of their distances from zero. Principle: absolute value gives nonnegative distance."
  },
  {
    id:"68-reason-124",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"true-inequality-choice",
    inattention:false,
    prompt:"Which inequality is true?",
    work:"Test each comparison carefully.",
    options:[
      "-6 < -2",
      "-1 < -9",
      "0 < -4",
      "5 < -3"
    ],
    correctIndex:0,
    hint:"Farther left means smaller.",
    insight:"Misconception: negatives can flip intuition. Principle: -6 is left of -2, so -6 < -2."
  },
  {
    id:"68-logic-124",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"mixed-sign-inequality",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Use sign and order together.",
    options:[
      "If x < 0 and y > 0, then x < y.",
      "If x < 0 and y > 0, then x > y.",
      "If x < 0 and y > 0, then x = y.",
      "If x < 0 and y > 0, the numbers cannot be compared."
    ],
    correctIndex:0,
    hint:"Every negative number is less than every positive number.",
    insight:"Logic note: mixed-sign comparisons are direct: negative is always less than positive."
  }
  , // FRACTION / DECIMAL / PERCENT EQUIVALENCE CONFUSION PACK — 373-384
  {
    id:"68-op-125",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"percent-decimal-equivalence",
    inattention:false,
    prompt:"A student says 25% = 0.25 = 25.",
    work:"Student work: 25% = 0.25 = 25",
    options:[
      "That is incorrect. 25% = 0.25 = 25/100 = 1/4, not 25.",
      "That is correct because percent means multiply by 100.",
      "That is incorrect because 25% equals 2.5.",
      "That is incorrect because 0.25 equals 25/10."
    ],
    correctIndex:0,
    hint:"Percent means 'out of 100.'",
    insight:"Misconception: treat percent as a whole number instead of a part of 100. Principle: 25% = 25/100 = 0.25 = 1/4."
  },
  {
    id:"68-reason-125",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"equivalent-forms",
    inattention:false,
    prompt:"Which set shows equivalent values?",
    work:"Compare fraction, decimal, and percent carefully.",
    options:[
      "1/2, 0.5, 50%",
      "1/2, 0.05, 50%",
      "1/2, 0.5, 5%",
      "1/2, 5.0, 50%"
    ],
    correctIndex:0,
    hint:"Half means five tenths and fifty hundredths out of 100.",
    insight:"Misconception: confuse place value in decimals and percent scale. Principle: equivalent forms represent the same quantity."
  },
  {
    id:"68-logic-125",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"equivalence-rule",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Choose the correct rule about equivalent forms.",
    options:[
      "A fraction, decimal, and percent can name the same amount in different forms.",
      "A percent is always greater than its decimal form.",
      "A decimal can never be written as a fraction.",
      "Fractions and percents cannot be compared."
    ],
    correctIndex:0,
    hint:"Different notations can still represent the same value.",
    insight:"Logic note: equivalent representations differ in form, not in value."
  },
  {
    id:"68-op-126",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"decimal-to-percent",
    inattention:false,
    prompt:"A student converts 0.8 to a percent and gets 0.8%.",
    work:"Student work: 0.8 = 0.8%",
    options:[
      "That is incorrect. 0.8 = 80%.",
      "That is correct because the decimal stays the same.",
      "That is incorrect because 0.8 = 8%.",
      "That is incorrect because 0.8 = 800% only."
    ],
    correctIndex:0,
    hint:"To convert a decimal to a percent, multiply by 100.",
    insight:"Misconception: keep the decimal unchanged when adding the percent sign. Principle: percent is per hundred. 0.8 = 80%."
  },
  {
    id:"68-reason-126",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"percent-to-decimal",
    inattention:false,
    prompt:"Which decimal is equal to 7%?",
    work:"Percent means out of 100.",
    options:[
      "0.07",
      "0.7",
      "7.0",
      "0.007"
    ],
    correctIndex:0,
    hint:"7% means 7/100.",
    insight:"Misconception: move the decimal the wrong number of places. Principle: 7% = 7/100 = 0.07."
  },
  {
    id:"68-logic-126",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"conversion-principle",
    inattention:false,
    prompt:"Which statement is logically valid?",
    work:"Choose the correct conversion idea.",
    options:[
      "To change a percent to a decimal, divide by 100.",
      "To change a percent to a decimal, always add 100.",
      "To change a decimal to a percent, always divide by 10.",
      "Percents and decimals are unrelated forms."
    ],
    correctIndex:0,
    hint:"Percent means 'per 100.'",
    insight:"Logic note: conversion rules come from place value and the meaning of percent."
  },
  {
    id:"68-op-127",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-percent-confusion",
    inattention:false,
    prompt:"A student says 3/4 = 34% because the numerator is 3 and the denominator is 4.",
    work:"Student work: 3/4 = 34%",
    options:[
      "That is incorrect. 3/4 = 0.75 = 75%.",
      "That is correct because 3 and 4 make 34.",
      "That is incorrect because 3/4 = 0.34 = 34%.",
      "That is incorrect because 3/4 = 7%."
    ],
    correctIndex:0,
    hint:"Convert 3/4 to a decimal first.",
    insight:"Misconception: read the fraction digits as a two-digit percent. Principle: 3/4 = 75/100 = 75%."
  },
  {
    id:"68-reason-127",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equivalent-choice",
    inattention:false,
    prompt:"Which value is equivalent to 0.125?",
    work:"Choose the matching fraction or percent.",
    options:[
      "1/8",
      "1/2",
      "12.5",
      "125%"
    ],
    correctIndex:0,
    hint:"0.125 is one hundred twenty-five thousandths, which simplifies.",
    insight:"Misconception: confuse 0.125 with 12.5 or 125%. Principle: 0.125 = 125/1000 = 1/8."
  },
  {
    id:"68-logic-127",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"representation-consistency",
    inattention:false,
    prompt:"Which statement must be true about equivalent forms?",
    work:"Pick the correct general statement.",
    options:[
      "If two forms are equivalent, they represent the same point on the number line.",
      "Equivalent forms must look similar.",
      "A decimal and a percent can never both be less than 1.",
      "Fractions always represent larger values than decimals."
    ],
    correctIndex:0,
    hint:"Equivalent forms name the same quantity.",
    insight:"Logic note: equal quantities share the same location on the number line, no matter how they are written."
  },
  {
    id:"68-op-128",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"small-percent-comparison",
    inattention:false,
    prompt:"A student says 0.05 = 5 because the digits are 5 and 0.",
    work:"Student work: 0.05 = 5",
    options:[
      "That is incorrect. 0.05 is five hundredths, which is 5%.",
      "That is correct because leading zeros do not matter.",
      "That is incorrect because 0.05 is 50%.",
      "That is incorrect because 0.05 is 0.5."
    ],
    correctIndex:0,
    hint:"Read the place value: hundredths.",
    insight:"Misconception: ignore decimal place value. Principle: 0.05 means 5/100, not 5 wholes."
  },
  {
    id:"68-reason-128",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"ordering-equivalent-forms",
    inattention:false,
    prompt:"Which list is in order from least to greatest?",
    work:"Convert to a common form if helpful.",
    options:[
      "5%, 1/10, 0.2",
      "1/10, 5%, 0.2",
      "0.2, 1/10, 5%",
      "5%, 0.2, 1/10"
    ],
    correctIndex:0,
    hint:"Write them as decimals: 0.05, 0.1, 0.2.",
    insight:"Misconception: compare different forms by appearance instead of value. Principle: convert to a common form to order reliably."
  },
  {
    id:"68-logic-128",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"must-be-true-equivalence",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Choose the statement that is always correct.",
    options:[
      "50% and 0.5 are equivalent.",
      "0.5 is greater than 50%.",
      "50% is greater than 1/2.",
      "0.5, 50%, and 1/2 are all different values."
    ],
    correctIndex:0,
    hint:"Half can be written in several forms.",
    insight:"Logic note: 1/2, 0.5, and 50% are three names for the same quantity."
  }
  , // VARIABLE EXPRESSION SUBSTITUTION ERRORS PACK — 385-396
  {
    id:"68-op-129",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"substitution-basic",
    inattention:false,
    prompt:"A student evaluates x + 5 when x = 3 and gets 35.",
    work:"Student work: x + 5 = 35",
    options:[
      "That is incorrect. Substitute 3 for x: 3 + 5 = 8.",
      "That is correct because x stands next to 5.",
      "That is incorrect because x + 5 always equals 15.",
      "That is incorrect because you should subtract 5 from 3."
    ],
    correctIndex:0,
    hint:"Replace the variable with its value, then compute.",
    insight:"Misconception: join the digits instead of evaluating the expression. Principle: substitution means replace x with 3. Correct value: 8."
  },
  {
    id:"68-reason-129",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"substitution-value",
    inattention:false,
    prompt:"If n = 4, what is the value of 2n + 1?",
    work:"Substitute first, then follow order of operations.",
    options:[
      "9",
      "24",
      "6",
      "3"
    ],
    correctIndex:0,
    hint:"2n means 2 times n.",
    insight:"Misconception: read 2n as 24. Principle: a coefficient means multiplication. 2(4) + 1 = 9."
  },
  {
    id:"68-logic-129",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"substitution-rule",
    inattention:false,
    prompt:"Which statement must be true about substitution?",
    work:"Choose the correct rule.",
    options:[
      "To evaluate an expression, replace each variable with its given value and then simplify.",
      "Variables should stay as letters even when values are given.",
      "Substitution means writing the number next to the variable name.",
      "After substitution, multiplication should be ignored."
    ],
    correctIndex:0,
    hint:"Substitution turns a variable expression into a numerical one.",
    insight:"Logic note: substitution is a replacement process, not a digit-joining trick."
  },
  {
    id:"68-op-130",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"parentheses-substitution",
    inattention:false,
    prompt:"A student evaluates 3(x + 2) when x = 4 and gets 3(42) = 126.",
    work:"Student work: 3(x + 2) = 3(42) = 126",
    options:[
      "That is incorrect. Substitute x = 4 inside the parentheses: 3(4 + 2) = 18.",
      "That is correct because 4 and 2 make 42.",
      "That is incorrect because 3(4 + 2) = 12.",
      "That is incorrect because x should be replaced after multiplying by 3."
    ],
    correctIndex:0,
    hint:"Substitute into the entire expression, not by combining digits.",
    insight:"Misconception: turn 4 + 2 into 42. Principle: evaluate grouped operations after substitution. Correct value: 18."
  },
  {
    id:"68-reason-130",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"negative-substitution",
    inattention:false,
    prompt:"If y = -3, which value is correct for y + 8?",
    work:"Replace y with -3 and evaluate.",
    options:[
      "5",
      "-11",
      "38",
      "-5"
    ],
    correctIndex:0,
    hint:"Keep the negative sign when substituting.",
    insight:"Misconception: lose the sign or join digits. Principle: y = -3 means the expression becomes -3 + 8, which equals 5."
  },
  {
    id:"68-logic-130",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"same-value-equivalence",
    inattention:false,
    prompt:"If two expressions are equivalent, what must be true after substituting the same value for the variable?",
    work:"Choose the correct logical statement.",
    options:[
      "They will have the same value.",
      "They will always have opposite values.",
      "One must be larger than the other.",
      "Substitution cannot be used to compare them."
    ],
    correctIndex:0,
    hint:"Equivalent expressions name the same quantity.",
    insight:"Logic note: equivalence means the expressions match for every allowed input, including any substituted value."
  },
  {
    id:"68-op-131",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"coefficient-substitution",
    inattention:false,
    prompt:"A student evaluates 5a when a = 2 and gets 52.",
    work:"Student work: 5a = 52",
    options:[
      "That is incorrect. 5a means 5 × 2, so the value is 10.",
      "That is correct because 5 and 2 are written next to each other.",
      "That is incorrect because 5a always equals 7.",
      "That is incorrect because 5a means 5 + 2, so the value is 7."
    ],
    correctIndex:0,
    hint:"A number next to a variable means multiplication.",
    insight:"Misconception: concatenate digits instead of multiplying. Principle: coefficient times variable value. Correct value: 10."
  },
  {
    id:"68-reason-131",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"multiple-variables",
    inattention:false,
    prompt:"If a = 2 and b = 5, what is the value of a + b?",
    work:"Substitute each variable with its own value.",
    options:[
      "7",
      "25",
      "10",
      "3"
    ],
    correctIndex:0,
    hint:"Replace both variables, then add.",
    insight:"Misconception: write the two values side by side. Principle: variables stand for numbers to be used in operations. 2 + 5 = 7."
  },
  {
    id:"68-logic-131",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"variable-identity",
    inattention:false,
    prompt:"Which statement must be true when evaluating an expression with two different variables?",
    work:"Choose the correct rule.",
    options:[
      "Each variable must be replaced by its own given value.",
      "All variables should be replaced by the same number.",
      "Only one variable should be substituted and the rest ignored.",
      "Different letters always stand for the same number."
    ],
    correctIndex:0,
    hint:"Different variable names can represent different values.",
    insight:"Logic note: substitution respects the value assigned to each specific variable."
  },
  {
    id:"68-op-132",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"substitution-order-operations",
    inattention:false,
    prompt:"A student evaluates 2m - 3 when m = 6 and gets 23.",
    work:"Student work: 2m - 3 = 23",
    options:[
      "That is incorrect. Substitute m = 6, then multiply: 2(6) - 3 = 9.",
      "That is correct because 2 and 6 make 26, then 26 - 3 = 23.",
      "That is incorrect because 2(6) - 3 = 12.",
      "That is incorrect because m should stay as a letter."
    ],
    correctIndex:0,
    hint:"After substitution, follow order of operations.",
    insight:"Misconception: join digits before evaluating. Principle: coefficients indicate multiplication. Correct value: 9."
  },
  {
    id:"68-reason-132",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"substitution-choice",
    inattention:false,
    prompt:"If p = 1, which expression has a value of 4?",
    work:"Substitute p = 1 into each choice.",
    options:[
      "3p + 1",
      "p + 1",
      "2p",
      "p - 4"
    ],
    correctIndex:0,
    hint:"Test each choice carefully.",
    insight:"Misconception: guess from the form instead of evaluating. Principle: substitution lets you compare exact values. 3(1) + 1 = 4."
  },
  {
    id:"68-logic-132",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"substitution-meaning",
    inattention:false,
    prompt:"Which statement about the expression x + 4 when x = 0 must be true?",
    work:"Choose the logically correct conclusion.",
    options:[
      "Its value is 4.",
      "Its value is 0 because x is 0.",
      "It cannot be evaluated because x is a letter.",
      "Its value is 40."
    ],
    correctIndex:0,
    hint:"Replace x with 0 and then compute.",
    insight:"Logic note: substitution can produce zero, positive, or negative values depending on the expression. Here 0 + 4 = 4."
  }
  , // RATIO / PROPORTION SANITY PACK — 397-408
  {
    id:"68-op-133",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"unit-rate",
    inattention:false,
    prompt:"A student says 24 miles in 3 hours means the unit rate is 72 miles per hour.",
    work:"Student work: 24 × 3 = 72",
    options:[
      "They multiplied instead of dividing by the number of hours. The unit rate is 24 ÷ 3 = 8 miles per hour.",
      "They should add 24 and 3 to get 27 miles per hour.",
      "They should keep 72 because unit rate always gets larger.",
      "They should subtract 3 from 24 to get 21 miles per hour."
    ],
    correctIndex:0,
    hint:"A unit rate means 'for 1,' so divide by the number of hours.",
    insight:"Misconception: use multiplication instead of finding the amount for one unit. Principle: unit rate is total amount divided by number of units. Correct: 8 miles per hour."
  },
  {
    id:"68-reason-133",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"unit-price",
    inattention:false,
    prompt:"Which is the better buy?",
    work:"Compare 3 notebooks for $6 and 5 notebooks for $9.",
    options:[
      "5 notebooks for $9",
      "3 notebooks for $6",
      "They cost the same per notebook",
      "There is not enough information"
    ],
    correctIndex:0,
    hint:"Find the cost for 1 notebook in each deal.",
    insight:"Misconception: compare totals without finding the rate per item. Principle: use unit price to compare deals. Better buy: 5 notebooks for $9."
  },
  {
    id:"68-logic-133",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"constant-ratio",
    inattention:false,
    prompt:"Which statement must be true in a proportional relationship?",
    work:"Choose the logically valid statement.",
    options:[
      "For nonzero x-values, the ratio y/x stays constant.",
      "The difference y - x must stay constant.",
      "The graph must curve upward.",
      "The y-values must always be greater than the x-values."
    ],
    correctIndex:0,
    hint:"Proportional relationships are built on a constant multiplicative comparison.",
    insight:"Logic note: proportional relationships keep a constant ratio, not a constant difference."
  },
  {
    id:"68-op-134",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"scale-factor",
    inattention:false,
    prompt:"On a map, 1 centimeter represents 4 miles. A student says 6 centimeters represents 10 miles because 6 + 4 = 10.",
    work:"Student work: 6 cm → 10 miles",
    options:[
      "They added instead of scaling. Since each centimeter is 4 miles, 6 centimeters represents 6 × 4 = 24 miles.",
      "They should divide 6 by 4 and get 1.5 miles.",
      "They should keep 10 because maps always use addition.",
      "They should subtract 4 from 6 and get 2 miles."
    ],
    correctIndex:0,
    hint:"Each centimeter stands for 4 miles, so repeat that amount 6 times.",
    insight:"Misconception: additive thinking in a multiplicative scale situation. Principle: use the scale factor by multiplying. Correct: 24 miles."
  },
  {
    id:"68-reason-134",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"proportional-vs-nonproportional",
    inattention:false,
    prompt:"Which situation is proportional?",
    work:"Choose the relationship with a constant rate from the start.",
    options:[
      "Each movie ticket costs $8, so total cost = 8 × number of tickets.",
      "A gym charges a $20 sign-up fee plus $8 each month.",
      "A taxi charges $3 to start and then $2 per mile.",
      "A babysitter charges $10 for the first hour and $7 for each hour after."
    ],
    correctIndex:0,
    hint:"A proportional relationship has no starting amount and uses one constant multiplier.",
    insight:"Misconception: any increasing relationship is proportional. Principle: proportional relationships have the form y = kx with no extra fixed fee."
  },
  {
    id:"68-logic-134",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"Which example is a valid counterexample to the claim 'The greater total cost always has the greater unit price'?",
    work:"Choose the example that proves the claim false.",
    options:[
      "$20 for 10 items and $18 for 6 items",
      "$12 for 3 items and $8 for 2 items",
      "$15 for 5 items and $9 for 3 items",
      "$6 for 2 items and $3 for 1 item"
    ],
    correctIndex:0,
    hint:"Look for a case where the larger total cost has the smaller cost per item.",
    insight:"Logic note: one counterexample is enough to disprove an always-statement."
  },
  {
    id:"68-op-135",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"constant-of-proportionality",
    inattention:false,
    prompt:"A student uses y = 3x and says when x = 4, y = 7 because 3 + 4 = 7.",
    work:"Student work: y = 3x, so y = 7 when x = 4",
    options:[
      "They added instead of multiplying. Since y = 3x, substitute x = 4 to get y = 3 × 4 = 12.",
      "They should subtract 3 from 4 and get 1.",
      "They should keep 7 because equations join numbers together.",
      "They should divide 4 by 3 and stop."
    ],
    correctIndex:0,
    hint:"The 3 is a multiplier, not a number to add.",
    insight:"Misconception: treat a proportional equation additively. Principle: the constant of proportionality multiplies x. Correct: 12."
  },
  {
    id:"68-reason-135",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"unit-rate-comparison",
    inattention:false,
    prompt:"Which runner had the greater speed?",
    work:"Runner A goes 12 miles in 2 hours. Runner B goes 15 miles in 3 hours.",
    options:[
      "Runner A",
      "Runner B",
      "They have the same speed",
      "There is not enough information"
    ],
    correctIndex:0,
    hint:"Compare miles per 1 hour for each runner.",
    insight:"Misconception: compare only total miles. Principle: compare unit rates. Runner A: 6 mph; Runner B: 5 mph."
  },
  {
    id:"68-logic-135",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"equivalent-ratios",
    inattention:false,
    prompt:"A student says, 'If two quantities are in the ratio 3:4, then multiplying both by 5 changes the ratio.' What is the best response?",
    work:"Claim: 3:4 becomes a different ratio after multiplying both terms by 5",
    options:[
      "The claim is false because 3:4 becomes 15:20, and 15:20 simplifies back to 3:4.",
      "The claim is true because the numbers got larger.",
      "The claim is true because 15 and 20 are farther apart.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Equivalent ratios can look different but still represent the same comparison.",
    insight:"Misconception: different-looking ratios always mean different relationships. Principle: multiplying both terms by the same nonzero number keeps the ratio equivalent."
  },
  {
    id:"68-op-136",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"ratio-scaling",
    inattention:false,
    prompt:"The ratio of red beads to blue beads is 2:5. A student says if there are 10 red beads, there must be 13 blue beads because 10 + 3 = 13.",
    work:"Student work: 10 red → 13 blue",
    options:[
      "They used addition instead of scaling the ratio. Since 2 became 10 by multiplying by 5, 5 must also be multiplied by 5, giving 25 blue beads.",
      "They should divide 10 by 5 and get 2 blue beads.",
      "They should keep 13 because the difference in the ratio is 3.",
      "They should subtract 2 from 10 and get 8 blue beads."
    ],
    correctIndex:0,
    hint:"In equivalent ratios, both terms are scaled by the same factor.",
    insight:"Misconception: preserve the difference instead of the multiplicative relationship. Principle: equivalent ratios scale both terms by the same factor. Correct: 25 blue beads."
  },
  {
    id:"68-reason-136",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equivalent-ratio-justification",
    inattention:false,
    prompt:"Which statement best explains why 6/9 and 10/15 are equivalent ratios?",
    work:"Choose the best justification.",
    options:[
      "They both simplify to 2/3.",
      "They have different numerators, so they must be different.",
      "10/15 is greater because 10 is greater than 6.",
      "6/9 is greater because 9 is less than 15."
    ],
    correctIndex:0,
    hint:"Reduce each ratio to simplest form.",
    insight:"Misconception: compare raw numerators or denominators instead of the relationship. Principle: equivalent ratios simplify to the same value."
  },
  {
    id:"68-logic-136",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"valid-argument",
    inattention:false,
    prompt:"Which argument is logically valid?",
    work:"Choose the sound reasoning about ratios.",
    options:[
      "If 8/12 simplifies to 2/3 and 10/15 simplifies to 2/3, then 8/12 and 10/15 are equivalent ratios.",
      "If two ratios have different numerators, they cannot be equivalent.",
      "If one denominator is larger, that ratio must be smaller.",
      "If two ratios are both fractions, they must be equal."
    ],
    correctIndex:0,
    hint:"Equivalent ratios can be recognized by simplifying to the same form.",
    insight:"Logic note: a valid conclusion follows from equivalent simplified forms."
  }
  , // PERCENT / DISCOUNT / MARKUP / TAX REASONING PACK — 409-420
  {
    id:"68-op-137",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"percent-of-whole",
    inattention:false,
    prompt:"A student says 25% of 80 is 105 because 25 + 80 = 105.",
    work:"Student work: 25% of 80 = 105",
    options:[
      "They added instead of finding part of the whole. Since 25% = 0.25, compute 0.25 × 80 = 20.",
      "They should subtract 25 from 80 and get 55.",
      "They should keep 105 because percent means combine the numbers.",
      "They should divide 25 by 80 and get the answer."
    ],
    correctIndex:0,
    hint:"Percent means 'out of 100.' Convert 25% to 0.25.",
    insight:"Misconception: treat percent like a separate number to add. Principle: percent of a quantity means multiply by the decimal form. Correct: 20."
  },
  {
    id:"68-reason-137",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"equivalent-discount",
    inattention:false,
    prompt:"Which deal gives the lower price on a $60 item?",
    work:"Deal A: 20% off. Deal B: $12 off.",
    options:[
      "They give the same final price.",
      "Deal A gives the lower price.",
      "Deal B gives the lower price.",
      "There is not enough information."
    ],
    correctIndex:0,
    hint:"Find 20% of $60 first.",
    insight:"Reasoning step: 20% of 60 is 12, so both deals reduce the price by the same amount."
  },
  {
    id:"68-logic-137",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"discount-tax-order",
    inattention:false,
    prompt:"Which statement is logically correct about a 10% discount and a 5% tax applied to the same starting price?",
    work:"Choose the valid statement.",
    options:[
      "The final price is the same whether you multiply by 0.90 then 1.05 or by 1.05 then 0.90.",
      "The order must change the final price because subtraction always comes before addition.",
      "The discount always cancels the tax exactly.",
      "The tax must be larger because it comes later."
    ],
    correctIndex:0,
    hint:"Think of each change as multiplying by a factor.",
    insight:"Logic note: both orders use the same two factors, 0.90 and 1.05, and multiplication gives the same product either way."
  },
  {
    id:"68-op-138",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"sales-tax-decimal",
    inattention:false,
    prompt:"A student says an item costing $40 with 7.5% sales tax has tax of $300 because 40 × 7.5 = 300.",
    work:"Student work: tax = 300, total = 340",
    options:[
      "They forgot to convert percent to decimal. The tax is 40 × 0.075 = 3, so the total is $43.",
      "They should divide 40 by 7.5 and get about $5.33 tax.",
      "They should add 40 and 7.5 to get $47.50 total.",
      "They should subtract 7.5 from 40 and get $32.50 total."
    ],
    correctIndex:0,
    hint:"7.5% means 7.5 per 100, not 7.5 whole times the price.",
    insight:"Misconception: multiply by the percent number instead of its decimal form. Principle: 7.5% = 0.075. Correct total: $43."
  },
  {
    id:"68-reason-138",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"discount-then-tax",
    inattention:false,
    prompt:"An $80 jacket is 25% off, then 8% sales tax is added. What is the final price?",
    work:"Choose the best answer.",
    options:[
      "$64.80",
      "$60.00",
      "$66.00",
      "$86.40"
    ],
    correctIndex:0,
    hint:"Find the discount first, then apply tax to the discounted price.",
    insight:"Reasoning chain: 25% off $80 gives $60. Then 8% tax on $60 is $4.80, so the final price is $64.80."
  },
  {
    id:"68-logic-138",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample-percent-change",
    inattention:false,
    prompt:"Which example is a valid counterexample to the claim 'If a price goes up 20% and then down 20%, it returns to the original price'?",
    work:"Choose the example that proves the claim false.",
    options:[
      "A $100 item increases to $120, then decreases by 20% of $120 to $96.",
      "A $100 item increases to $120, then decreases by $20 to $100.",
      "A $50 item increases by $10 and then decreases by $10.",
      "A $30 item stays $30 the whole time."
    ],
    correctIndex:0,
    hint:"The second 20% is taken from the new price, not the original one.",
    insight:"Logic note: one counterexample disproves an always-claim. Here the final price is $96, not $100."
  },
  {
    id:"68-op-139",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"discount-amount",
    inattention:false,
    prompt:"A student says 30% off a $50 item means the new price is $20 because 50 - 30 = 20.",
    work:"Student work: new price = 20",
    options:[
      "They subtracted 30 dollars instead of 30%. Since 30% of 50 is 15, the new price is $35.",
      "They should add 30% to 50 and get $80.",
      "They should divide 50 by 30 and get the new price.",
      "They should keep $20 because sale prices always use subtraction."
    ],
    correctIndex:0,
    hint:"Find the discount amount first, then subtract it from the original price.",
    insight:"Misconception: confuse 30% with $30. Principle: 30% of $50 is $15, so the sale price is $35."
  },
  {
    id:"68-reason-139",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"identify-markup",
    inattention:false,
    prompt:"Which situation shows a markup?",
    work:"Choose the best description.",
    options:[
      "A store buys a backpack for $40 and sets the selling price at $50.",
      "A customer uses a coupon to pay $8 less.",
      "A city adds 7% sales tax at checkout.",
      "A restaurant gives 15% off lunch specials."
    ],
    correctIndex:0,
    hint:"Markup means raising the price above cost before selling.",
    insight:"Reasoning note: markup is the amount added to cost to set a higher selling price."
  },
  {
    id:"68-logic-139",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"equivalent-percent-fraction",
    inattention:false,
    prompt:"Which argument is logically valid?",
    work:"Choose the sound reasoning.",
    options:[
      "Since 12.5% = 1/8, 12.5% of 64 is the same as 1/8 of 64, which is 8.",
      "Since 12.5 is bigger than 8, 12.5% of 64 must be bigger than 8.",
      "Since 64 ÷ 12.5 is not 8, 12.5% of 64 cannot be 8.",
      "Since percent and fractions are different forms, they cannot represent the same amount."
    ],
    correctIndex:0,
    hint:"Percent, decimal, and fraction are different ways to show the same value.",
    insight:"Logic note: equivalent representations support a valid conclusion. Here 12.5% = 0.125 = 1/8."
  },
  {
    id:"68-op-140",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"easy",
    errorType:"markup-amount",
    inattention:false,
    prompt:"A store buys an item for $40 and marks it up 25%. A student says the selling price is $65 because 40 + 25 = 65.",
    work:"Student work: selling price = 65",
    options:[
      "They added 25 dollars instead of 25%. Since 25% of 40 is 10, the selling price is $50.",
      "They should subtract 25 from 40 and get $15.",
      "They should divide 40 by 25 and get the selling price.",
      "They should keep $65 because markup means add the percent number."
    ],
    correctIndex:0,
    hint:"Find 25% of the cost, then add that amount to the cost.",
    insight:"Misconception: treat 25% as $25. Principle: 25% of $40 is $10, so the marked-up price is $50."
  },
  {
    id:"68-reason-140",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"markup-comparison",
    inattention:false,
    prompt:"Which final price is greater?",
    work:"Store A marks up a $50 item by 10%. Store B adds a $6 markup to a $50 item.",
    options:[
      "Store B",
      "Store A",
      "They are the same",
      "There is not enough information"
    ],
    correctIndex:0,
    hint:"Find each final price, not just the percent or dollar amount alone.",
    insight:"Reasoning step: Store A ends at $55, while Store B ends at $56, so Store B is greater."
  },
  {
    id:"68-logic-140",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"tax-meaning",
    inattention:false,
    prompt:"A student claims, 'An 8% sales tax means add $8 to every price.' What is the best response?",
    work:"Choose the strongest correction.",
    options:[
      "That is false because 8% means 0.08 times the price, so the tax amount depends on the item's price.",
      "That is true because 8 is the tax number.",
      "That is true for all prices under $100 only.",
      "That cannot be checked without knowing the store."
    ],
    correctIndex:0,
    hint:"A percent is a rate, not a fixed dollar amount.",
    insight:"Logic note: the tax changes with the base price. For example, 8% of $10 is $0.80, not $8."
  }
  , // FRACTIONS / DECIMALS / PERCENTS DURABILITY PACK — 421-432
  {
    id:"68-op-141",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-percent-conversion",
    inattention:false,
    prompt:"A student says 0.8 = 8% because the decimal moved one place.",
    work:"Student work: 0.8 = 8%",
    options:[
      "They moved the decimal the wrong way. 0.8 = 80/100 = 80%.",
      "They should say 0.8 = 0.8%.",
      "They should say 0.8 = 800%.",
      "They should keep 8% because decimals are always smaller than percents."
    ],
    correctIndex:0,
    hint:"Percent means 'out of 100,' so multiply the decimal by 100.",
    insight:"Misconception: decimal-to-percent conversion moved only one place. Principle: multiply the decimal by 100. Correct: 80%."
  },
  {
    id:"68-reason-141",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"mixed-form-comparison",
    inattention:false,
    prompt:"Which value is greatest?",
    work:"Compare 3/5, 0.58, and 61%.",
    options:[
      "61%",
      "3/5",
      "0.58",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Rewrite each in the same form: 3/5 = 0.6 and 61% = 0.61.",
    insight:"Misconception: mixed forms hide size. Principle: compare in a common form. Greatest: 61%."
  },
  {
    id:"68-logic-141",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"percent-change-trap",
    inattention:false,
    prompt:"A student says, 'If a price goes up 20% and then down 20%, it comes back to the starting price.' What is the best response?",
    work:"Claim: up 20%, then down 20% means no net change",
    options:[
      "The claim is false. For example, $100 goes up to $120, then down 20% of $120 to $96.",
      "The claim is true because +20 and -20 cancel.",
      "The claim is true whenever the starting price is a multiple of 10.",
      "The claim cannot be checked with numbers."
    ],
    correctIndex:0,
    hint:"The second percent is taken from the new amount, not the original one.",
    insight:"Misconception: equal percent increase and decrease cancel automatically. Principle: the base changes after the first step. Counterexample: $100 → $120 → $96."
  },
  {
    id:"68-op-142",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-decimal-conversion",
    inattention:false,
    prompt:"A student says 3/8 = 0.38 because the fraction has a 3 and an 8.",
    work:"Student work: 3/8 = 0.38",
    options:[
      "They joined the digits instead of finding the value. 3/8 = 0.375.",
      "They should say 3/8 = 3.8.",
      "They should say 3/8 = 0.83.",
      "They should keep 0.38 because fractions turn into decimals by placing a point between the digits."
    ],
    correctIndex:0,
    hint:"Find the value of 3 ÷ 8.",
    insight:"Misconception: fraction digits are copied into decimal form. Principle: divide numerator by denominator. Correct: 0.375."
  },
  {
    id:"68-reason-142",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"percent-decrease",
    inattention:false,
    prompt:"A jacket price drops from $60 to $48. What is the percent decrease?",
    work:"Original price: $60. New price: $48.",
    options:[
      "20%",
      "12%",
      "25%",
      "80%"
    ],
    correctIndex:0,
    hint:"First find the decrease in dollars, then compare it to the original price.",
    insight:"Misconception: percent change is taken from the new amount or from the dollar change alone. Principle: percent decrease compares the change to the original. Here, $12 out of $60 is 20%."
  },
  {
    id:"68-logic-142",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"whole-matters",
    inattention:false,
    prompt:"A student says, 'A greater percent always means a greater amount.' What is the best response?",
    work:"Claim: larger percent always gives larger amount",
    options:[
      "The claim is false. For example, 50% of 10 is 5, but 25% of 40 is 10.",
      "The claim is true because 50 is greater than 25.",
      "The claim is true whenever both percents are under 100%.",
      "The claim cannot be tested unless the percents are equal."
    ],
    correctIndex:0,
    hint:"A percent amount depends on the whole it is taken from.",
    insight:"Misconception: percent size alone determines the amount. Principle: the whole matters too. Counterexample: 50% of 10 is less than 25% of 40."
  },
  {
    id:"68-op-143",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-decimal-conversion",
    inattention:false,
    prompt:"A student says 120% = 0.12 because they moved the decimal two places left.",
    work:"Student work: 120% = 0.12",
    options:[
      "They moved the decimal the wrong way. 120% = 120/100 = 1.2.",
      "They should say 120% = 12.",
      "They should say 120% = 0.012.",
      "They should keep 0.12 because percents are always less than 1."
    ],
    correctIndex:0,
    hint:"Percent means divide by 100, not by 1000.",
    insight:"Misconception: percents over 100 are forced below 1. Principle: divide by 100 carefully. Correct: 120% = 1.2."
  },
  {
    id:"68-reason-143",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"benchmark-comparison",
    inattention:false,
    prompt:"Which value is closest to one-half?",
    work:"Compare 49%, 0.52, and 5/8.",
    options:[
      "49%",
      "0.52",
      "5/8",
      "They are all the same distance from one-half"
    ],
    correctIndex:0,
    hint:"Rewrite one-half as 0.5 and compare distances.",
    insight:"Misconception: nearest benchmark is guessed from appearance. Principle: compare each value to 0.5. Closest: 49% = 0.49."
  },
  {
    id:"68-logic-143",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"comparison-principle",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Choose the logically valid statement about comparing fractions, decimals, and percents.",
    options:[
      "To compare numbers written in different forms, you can rewrite them in a common form or compare them to the same benchmark.",
      "A decimal is always greater than a percent.",
      "A fraction is always less than a decimal.",
      "The form with the most digits is always the greatest."
    ],
    correctIndex:0,
    hint:"Good comparison uses value, not appearance.",
    insight:"Misconception: form determines size. Principle: compare using equivalent forms or a shared benchmark."
  },
  {
    id:"68-op-144",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"discount",
    inattention:false,
    prompt:"A student says a $50 backpack with 30% off will cost $20 because 50 - 30 = 20.",
    work:"Student work: $50 with 30% off costs $20",
    options:[
      "They subtracted the percent number instead of finding 30% of $50. Since 30% of 50 is 15, the sale price is $35.",
      "They should add 30% to 50 and get $80.",
      "They should divide 50 by 30 and get the sale price.",
      "They should keep $20 because discount means subtract the percent from the dollars."
    ],
    correctIndex:0,
    hint:"Find the discount amount first, then subtract it from the original price.",
    insight:"Misconception: percent is subtracted like a plain number. Principle: find the percent of the original amount first. Correct sale price: $35."
  },
  {
    id:"68-reason-144",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"mixed-form-comparison",
    inattention:false,
    prompt:"Which value is greatest?",
    work:"Compare 0.75, 72%, and 7/10.",
    options:[
      "0.75",
      "72%",
      "7/10",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Rewrite each in decimal form: 72% = 0.72 and 7/10 = 0.7.",
    insight:"Misconception: mixed forms are hard to rank unless rewritten. Principle: compare in the same form. Greatest: 0.75."
  },
  {
    id:"68-logic-144",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"successive-percent-change",
    inattention:false,
    prompt:"A store marks an item up 10% and then takes 10% off the new price. Which statement must be true?",
    work:"Original price → up 10% → down 10%",
    options:[
      "The final price is 1% lower than the original price.",
      "The final price returns to the original price.",
      "The final price is 10% higher than the original price.",
      "There is not enough information to compare the final price to the original."
    ],
    correctIndex:0,
    hint:"Try an easy starting price like $100.",
    insight:"Misconception: equal percent up and down cancel. Principle: apply the percents step by step to changing bases. Example: $100 → $110 → $99, which is 1% below the original."
  }
  , // FDP / PERCENT-CHANGE DURABILITY PACK 2 — 433-444
  {
    id:"68-op-145",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-percent-conversion",
    inattention:false,
    prompt:"A student says 0.045 = 45% because they moved the decimal two places.",
    work:"Student work: 0.045 = 45%",
    options:[
      "They moved the decimal correctly but ignored place value. 0.045 = 4.5%.",
      "They should say 0.045 = 0.45%.",
      "They should say 0.045 = 45.0%.",
      "They should keep 45% because every decimal becomes a percent by removing the point."
    ],
    correctIndex:0,
    hint:"Multiply by 100 carefully: 0.045 × 100 = 4.5.",
    insight:"Misconception: decimal-to-percent conversion ignored place value. Principle: multiply by 100 carefully. Correct: 4.5%."
  },
  {
    id:"68-reason-145",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"mixed-form-comparison",
    inattention:false,
    prompt:"Which value is greatest?",
    work:"Compare 2/3, 66%, and 0.67.",
    options:[
      "0.67",
      "2/3",
      "66%",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Rewrite them in decimal form: 2/3 ≈ 0.666..., 66% = 0.66, and 0.67 = 0.67.",
    insight:"Misconception: mixed forms can look larger or smaller than they really are. Principle: compare in a common form. Greatest: 0.67."
  },
  {
    id:"68-logic-145",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"decimal-percent-equivalence",
    inattention:false,
    prompt:"A student says, '6% equals 0.6 because both have a 6.' What is the best response?",
    work:"Claim: 6% = 0.6",
    options:[
      "The claim is false. 6% means 6 out of 100, so it equals 0.06.",
      "The claim is true because percent and decimal forms only change the symbol.",
      "The claim is true whenever the number is less than 10.",
      "The claim cannot be checked without a calculator."
    ],
    correctIndex:0,
    hint:"Percent means 'per 100.'",
    insight:"Misconception: matching digits mean matching value. Principle: 6% = 6/100 = 0.06, not 0.6."
  },
  {
    id:"68-op-146",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-of-quantity",
    inattention:false,
    prompt:"A student says 25% of 80 is 25 because the percent is 25.",
    work:"Student work: 25% of 80 = 25",
    options:[
      "They used the percent as the answer. Since 25% = 1/4, one-fourth of 80 is 20.",
      "They should say 25% of 80 is 5.",
      "They should say 25% of 80 is 40.",
      "They should keep 25 because percent-of means copy the percent number."
    ],
    correctIndex:0,
    hint:"Think of 25% as one-fourth.",
    insight:"Misconception: the percent itself was treated as the amount. Principle: find the stated part of the whole. Correct: 25% of 80 = 20."
  },
  {
    id:"68-reason-146",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equivalent-forms",
    inattention:false,
    prompt:"Which value is least?",
    work:"Compare 0.4, 39%, and 2/5.",
    options:[
      "39%",
      "0.4",
      "2/5",
      "0.4 and 39% are equal and least"
    ],
    correctIndex:0,
    hint:"Rewrite them in the same form: 0.4 = 40% and 2/5 = 40%.",
    insight:"Misconception: mixed forms hide equality. Principle: compare equivalent values in one form. Least: 39%."
  },
  {
    id:"68-logic-146",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"discount-tax-sequence",
    inattention:false,
    prompt:"A student says, 'A 20% discount and a 10% sales tax cancel each other, so the final price is the original price.' What is the best response?",
    work:"Claim: 20% off and 10% tax cancel",
    options:[
      "The claim is false. For example, $100 goes to $80 after the discount, then 10% tax makes it $88.",
      "The claim is true because subtraction and addition cancel.",
      "The claim is true whenever the tax is smaller than the discount.",
      "The claim cannot be tested with an example."
    ],
    correctIndex:0,
    hint:"Apply each percent step by step to the changing amount.",
    insight:"Misconception: percent operations cancel like plain numbers. Principle: each percent uses a base amount. Example: $100 → $80 → $88."
  },
  {
    id:"68-op-147",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-percent-conversion",
    inattention:false,
    prompt:"A student says 1/8 = 8% because the denominator is 8.",
    work:"Student work: 1/8 = 8%",
    options:[
      "They used the denominator instead of the value. Since 1 ÷ 8 = 0.125, the percent is 12.5%.",
      "They should say 1/8 = 1.8%.",
      "They should say 1/8 = 80%.",
      "They should keep 8% because fractions always turn into percents using the denominator."
    ],
    correctIndex:0,
    hint:"Convert the fraction to a decimal first.",
    insight:"Misconception: denominator was copied into the percent. Principle: convert the fraction value, then convert to percent. Correct: 12.5%."
  },
  {
    id:"68-reason-147",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"benchmark-comparison",
    inattention:false,
    prompt:"Which value is closest to three-fourths?",
    work:"Compare 74%, 0.71, and 7/10.",
    options:[
      "74%",
      "0.71",
      "7/10",
      "They are all equally close"
    ],
    correctIndex:0,
    hint:"Three-fourths is 0.75.",
    insight:"Misconception: closeness is guessed from appearance. Principle: compare distance from the benchmark 0.75. Closest: 74%."
  },
  {
    id:"68-logic-147",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"percent-change-direction",
    inattention:false,
    prompt:"Which statement is correct?",
    work:"Compare the percent change from 50 to 60 and from 60 to 50.",
    options:[
      "50 to 60 is a 20% increase, but 60 to 50 is about a 16.7% decrease.",
      "Both changes are 20% because the difference is 10.",
      "50 to 60 is 10%, and 60 to 50 is 10%.",
      "Both changes are the same because they use the same two numbers."
    ],
    correctIndex:0,
    hint:"Percent change depends on the starting amount.",
    insight:"Misconception: reversing a change keeps the same percent. Principle: percent change uses the original amount as the base. The two directions can have different percents."
  },
    {
    id:"68-op-148",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"discount-then-tax",
    inattention:false,
    prompt:"An $80 item is 25% off, then 8% sales tax is added. What is the final price?",
    work:"Original price: $80",
    options:[
      "$64.80",
      "$60.00",
      "$66.40",
      "$86.40"
    ],
    correctIndex:0,
    hint:"Find the discount first, then apply tax to the discounted price.",
    insight:"Misconception: discount and tax are often applied to the wrong base. Principle: do the steps in order. $80 → $60 → $64.80."
  },
  {
    id:"68-reason-148",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"mixed-form-comparison",
    inattention:false,
    prompt:"Which value is greatest?",
    work:"Compare 0.105, 10%, and 1/9.",
    options:[
      "1/9",
      "0.105",
      "10%",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Rewrite them in decimal form: 10% = 0.10 and 1/9 ≈ 0.111...",
    insight:"Misconception: the longest decimal-looking number can seem largest. Principle: compare values in a common form. Greatest: 1/9."
  },
  {
    id:"68-logic-148",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"inverse-percent-change",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Think about percent increases and decreases that return to the starting amount.",
    options:[
      "A 25% increase can be undone by a 20% decrease.",
      "Any percent increase is undone by the same percent decrease.",
      "A 10% increase is undone by a 10% decrease.",
      "A 50% increase can only be undone by a 50% decrease."
    ],
    correctIndex:0,
    hint:"Try an easy number like 100.",
    insight:"Misconception: the same percent always reverses the change. Principle: the reversing percent depends on the new base. Example: 100 → 125 → 100, so +25% is undone by -20%."
  }
  , // FDP / PERCENT-CHANGE DURABILITY PACK 3 — 445-456
  {
    id:"68-op-149",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-percent-conversion",
    inattention:false,
    prompt:"A student says 0.375 = 375% because they moved the decimal three places.",
    work:"Student work: 0.375 = 375%",
    options:[
      "They moved the decimal too far. 0.375 = 37.5%.",
      "They should say 0.375 = 3.75%.",
      "They should say 0.375 = 0.375%.",
      "They should keep 375% because decimals less than 1 need three places."
    ],
    correctIndex:0,
    hint:"Multiply by 100, not by 1000.",
    insight:"Misconception: decimal-to-percent conversion moved the decimal too far. Principle: multiply the decimal by 100. Correct: 37.5%."
  },
  {
    id:"68-reason-149",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"mixed-form-comparison",
    inattention:false,
    prompt:"Which value is greatest?",
    work:"Compare 3/4, 74%, and 0.745.",
    options:[
      "3/4",
      "74%",
      "0.745",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Rewrite them in decimal form: 3/4 = 0.75 and 74% = 0.74.",
    insight:"Misconception: mixed forms can hide which value is largest. Principle: compare in a common form. Greatest: 3/4."
  },
  {
    id:"68-logic-149",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"small-percent-place-value",
    inattention:false,
    prompt:"A student says, '0.5% equals 0.5 because the digits match.' What is the best response?",
    work:"Claim: 0.5% = 0.5",
    options:[
      "The claim is false. 0.5% means 0.5 out of 100, so it equals 0.005.",
      "The claim is true because the percent sign does not change value.",
      "The claim is true whenever the number is less than 1.",
      "The claim cannot be checked without converting to a fraction."
    ],
    correctIndex:0,
    hint:"Percent means divide by 100.",
    insight:"Misconception: matching digits mean matching value. Principle: 0.5% = 0.5/100 = 0.005."
  },
  {
    id:"68-op-150",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-of-quantity",
    inattention:false,
    prompt:"What is 15% of 240?",
    work:"Find 15% of 240.",
    options:[
      "36",
      "24",
      "15",
      "48"
    ],
    correctIndex:0,
    hint:"Find 10% and 5%, then combine them.",
    insight:"Misconception: percent-of is sometimes treated like subtraction or copied digits. Principle: find the stated part of the whole. Here, 10% of 240 is 24 and 5% is 12, so 15% is 36."
  },
  {
    id:"68-reason-150",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"mixed-form-comparison",
    inattention:false,
    prompt:"Which value is least?",
    work:"Compare 7/8, 0.86, and 87%.",
    options:[
      "0.86",
      "7/8",
      "87%",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Rewrite them in decimal form: 7/8 = 0.875 and 87% = 0.87.",
    insight:"Misconception: mixed forms can hide small differences. Principle: compare in a common form. Least: 0.86."
  },
  {
    id:"68-logic-150",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"inverse-percent-change",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Think about percent changes that return to the starting amount.",
    options:[
      "A 50% increase can be undone by a 33 1/3% decrease.",
      "A 50% increase can be undone by a 50% decrease.",
      "Any percent increase is undone by the same percent decrease.",
      "A 25% increase can only be undone by a 25% decrease."
    ],
    correctIndex:0,
    hint:"Try a starting value of 100.",
    insight:"Misconception: the same percent always reverses the change. Principle: the reversing percent depends on the new base. Example: 100 → 150 → 100 means a 33 1/3% decrease undoes a 50% increase."
  },
  {
    id:"68-op-151",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-percent-conversion",
    inattention:false,
    prompt:"A student says 5/4 = 54% because they wrote the digits next to each other.",
    work:"Student work: 5/4 = 54%",
    options:[
      "They used the digits instead of the value. Since 5/4 = 1.25, the percent is 125%.",
      "They should say 5/4 = 5.4%.",
      "They should say 5/4 = 45%.",
      "They should keep 54% because fractions become percents by combining numerator and denominator."
    ],
    correctIndex:0,
    hint:"Convert the fraction to a decimal first.",
    insight:"Misconception: numerator and denominator were treated like digits to combine. Principle: convert the fraction value, then the percent. Correct: 5/4 = 125%."
  },
  {
    id:"68-reason-151",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"benchmark-comparison",
    inattention:false,
    prompt:"Which value is closest to 1?",
    work:"Compare 99%, 1.01, and 49/50.",
    options:[
      "99%",
      "1.01",
      "49/50",
      "They are all equally close"
    ],
    correctIndex:0,
    hint:"Rewrite them in decimal form and compare their distance from 1.",
    insight:"Misconception: values near 1 can look equally close. Principle: compare distance from the benchmark 1. Here, 99% = 0.99 and 49/50 = 0.98, so 0.99 is closest."
  },
  {
    id:"68-logic-151",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"whole-matters",
    inattention:false,
    prompt:"A student says, '30% of 50 must be greater than 20% of 80 because 30 is greater than 20.' What is the best response?",
    work:"Claim: 30% of 50 > 20% of 80 because 30 > 20",
    options:[
      "The claim is false. 30% of 50 is 15, but 20% of 80 is 16.",
      "The claim is true because a larger percent always means a larger amount.",
      "The claim is true whenever both numbers are less than 100.",
      "The claim cannot be checked without turning both percents into fractions."
    ],
    correctIndex:0,
    hint:"A percent amount depends on both the percent and the whole.",
    insight:"Misconception: the larger percent alone determines the larger amount. Principle: the whole matters too. Counterexample: 15 is less than 16."
  },
  {
    id:"68-op-152",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"successive-percent-change",
    inattention:false,
    prompt:"An item costs $200. It is marked up 15% and then discounted 15%. What is the final price?",
    work:"Original price: $200",
    options:[
      "$195.50",
      "$200.00",
      "$230.00",
      "$170.00"
    ],
    correctIndex:0,
    hint:"Apply each percent to the current price, not the original one.",
    insight:"Misconception: equal percent increase and decrease cancel. Principle: the base changes after the first step. $200 → $230 → $195.50."
  },
  {
    id:"68-reason-152",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"mixed-form-comparison",
    inattention:false,
    prompt:"Which value is greatest?",
    work:"Compare 5/6, 83%, and 0.82.",
    options:[
      "5/6",
      "83%",
      "0.82",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Rewrite them in decimal form: 5/6 ≈ 0.833..., 83% = 0.83.",
    insight:"Misconception: the form can distract from the value. Principle: compare in a common form. Greatest: 5/6."
  },
  {
    id:"68-logic-152",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"inverse-percent-change",
    inattention:false,
    prompt:"A student says, 'After a 20% discount, a 20% increase will bring the price back to the original.' What is the best response?",
    work:"Claim: -20% then +20% returns to the start",
    options:[
      "The claim is false. After a 20% discount, it takes a 25% increase to get back to the original price.",
      "The claim is true because 20 and 20 cancel.",
      "The claim is true whenever the original price is a multiple of 10.",
      "The claim cannot be checked without knowing the original price."
    ],
    correctIndex:0,
    hint:"Try a starting price of $100.",
    insight:"Misconception: equal percent decrease and increase reverse each other. Principle: the second percent uses a smaller base. Example: $100 → $80 → $96, so it takes +25% from $80 to return to $100."
  }
  , // FDP / PERCENT-CHANGE DURABILITY PACK 4 — 457-468
  {
    id:"68-op-153",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"decimal-percent-conversion",
    inattention:false,
    prompt:"A student says 0.062 = 62% because they moved the decimal two places.",
    work:"Student work: 0.062 = 62%",
    options:[
      "They ignored place value. 0.062 = 6.2%.",
      "They should say 0.062 = 0.62%.",
      "They should say 0.062 = 620%.",
      "They should keep 62% because every decimal becomes a percent by removing the point."
    ],
    correctIndex:0,
    hint:"Multiply by 100 carefully: 0.062 × 100 = 6.2.",
    insight:"Misconception: decimal-to-percent conversion ignored place value. Principle: multiply by 100 carefully. Correct: 6.2%."
  },
  {
    id:"68-reason-153",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"mixed-form-comparison",
    inattention:false,
    prompt:"Which value is greatest?",
    work:"Compare 7/20, 34%, and 0.349.",
    options:[
      "7/20",
      "34%",
      "0.349",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Rewrite them in decimal form: 7/20 = 0.35 and 34% = 0.34.",
    insight:"Misconception: mixed forms can hide very small differences. Principle: compare in a common form. Greatest: 7/20."
  },
  {
    id:"68-logic-153",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"percent-greater-than-100",
    inattention:false,
    prompt:"A student says, '200% cannot equal 2 because percents are always less than 100.' What is the best response?",
    work:"Claim: 200% cannot equal 2",
    options:[
      "The claim is false. 200% means 200 out of 100, which equals 2.",
      "The claim is true because percents stop at 100.",
      "The claim is true whenever the number has no decimal.",
      "The claim cannot be checked without a calculator."
    ],
    correctIndex:0,
    hint:"Percent means 'per 100.'",
    insight:"Misconception: percents are assumed to stay below 100. Principle: percents can be greater than 100. Here, 200% = 200/100 = 2."
  },
  {
    id:"68-op-154",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"sales-tax",
    inattention:false,
    prompt:"A $75 item has 6% sales tax. What is the final price?",
    work:"Original price: $75",
    options:[
      "$79.50",
      "$81.00",
      "$76.50",
      "$70.50"
    ],
    correctIndex:0,
    hint:"Find 6% of 75, then add it to 75.",
    insight:"Misconception: tax is often added as a plain number or taken from the wrong base. Principle: find the tax amount first. Since 6% of 75 is 4.50, the final price is $79.50."
  },
  {
    id:"68-reason-154",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equivalent-forms",
    inattention:false,
    prompt:"Which value is least?",
    work:"Compare 11/20, 54%, and 0.56.",
    options:[
      "54%",
      "11/20",
      "0.56",
      "11/20 and 54% are equal and least"
    ],
    correctIndex:0,
    hint:"Rewrite them in the same form: 11/20 = 0.55.",
    insight:"Misconception: mixed forms can hide which is smaller. Principle: compare equivalent values in one form. Least: 54%."
  },
  {
    id:"68-logic-154",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"whole-matters",
    inattention:false,
    prompt:"A student says, '10% of 200 must be less than 20% of 50 because 10 is less than 20.' What is the best response?",
    work:"Claim: 10% of 200 < 20% of 50 because 10 < 20",
    options:[
      "The claim is false. 10% of 200 is 20, but 20% of 50 is 10.",
      "The claim is true because the greater percent always gives the greater amount.",
      "The claim is true whenever both numbers are multiples of 10.",
      "The claim cannot be checked unless both percents are written as decimals."
    ],
    correctIndex:0,
    hint:"A percent amount depends on the whole as well as the percent.",
    insight:"Misconception: the larger percent alone determines the larger amount. Principle: the whole matters too. Counterexample: 20 is greater than 10."
  },
  {
    id:"68-op-155",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-percent-conversion",
    inattention:false,
    prompt:"A student says 7/5 = 75% because they used the digits 7 and 5.",
    work:"Student work: 7/5 = 75%",
    options:[
      "They used the digits instead of the value. Since 7/5 = 1.4, the percent is 140%.",
      "They should say 7/5 = 7.5%.",
      "They should say 7/5 = 57%.",
      "They should keep 75% because fractions become percents by combining numerator and denominator."
    ],
    correctIndex:0,
    hint:"Convert the fraction to a decimal first.",
    insight:"Misconception: numerator and denominator were treated like digits to combine. Principle: convert the fraction value, then the percent. Correct: 140%."
  },
  {
    id:"68-reason-155",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"benchmark-comparison",
    inattention:false,
    prompt:"Which value is closest to 25%?",
    work:"Compare 1/5, 0.24, and 23%.",
    options:[
      "0.24",
      "1/5",
      "23%",
      "They are all equally close"
    ],
    correctIndex:0,
    hint:"Rewrite 25% as 0.25 and compare distances.",
    insight:"Misconception: closeness to a benchmark is guessed from appearance. Principle: compare distance from the benchmark. Here, 0.24 is closest to 0.25."
  },
  {
    id:"68-logic-155",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"inverse-percent-change",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Think about percent increases and decreases that return to the starting amount.",
    options:[
      "A 20% increase can be undone by a 16 2/3% decrease.",
      "A 20% increase can be undone by a 20% decrease.",
      "Any percent increase is undone by the same percent decrease.",
      "A 10% increase can only be undone by a 10% decrease."
    ],
    correctIndex:0,
    hint:"Try a starting value of 100.",
    insight:"Misconception: the same percent always reverses the change. Principle: the reversing percent depends on the new base. Example: 100 → 120 → 100 requires a 16 2/3% decrease."
  },
  {
    id:"68-op-156",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"successive-percent-change",
    inattention:false,
    prompt:"An item costs $150. It is discounted 20% and then increased 20%. What is the final price?",
    work:"Original price: $150",
    options:[
      "$144",
      "$150",
      "$180",
      "$120"
    ],
    correctIndex:0,
    hint:"Apply each percent to the current price, not the original one.",
    insight:"Misconception: equal percent decrease and increase cancel. Principle: the base changes after the first step. $150 → $120 → $144."
  },
  {
    id:"68-reason-156",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"mixed-form-comparison",
    inattention:false,
    prompt:"Which value is greatest?",
    work:"Compare 9/10, 89%, and 0.905.",
    options:[
      "0.905",
      "9/10",
      "89%",
      "They are all equal"
    ],
    correctIndex:0,
    hint:"Rewrite them in decimal form: 9/10 = 0.9 and 89% = 0.89.",
    insight:"Misconception: mixed forms can hide very close values. Principle: compare in a common form. Greatest: 0.905."
  },
  {
    id:"68-logic-156",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"discount-markup-trap",
    inattention:false,
    prompt:"A student says, 'A 30% discount followed by a 30% markup returns the price to the original amount.' What is the best response?",
    work:"Claim: -30% then +30% returns to the start",
    options:[
      "The claim is false. For example, $100 goes to $70, then up 30% to $91.",
      "The claim is true because -30 and +30 cancel.",
      "The claim is true whenever the original price is a multiple of 10.",
      "The claim cannot be checked without knowing the original price."
    ],
    correctIndex:0,
    hint:"Try an easy starting price like $100.",
    insight:"Misconception: equal discount and markup reverse each other. Principle: the second percent uses a different base. Example: $100 → $70 → $91."
  }
  
, // FRACTION OPERATIONS / EQUATION-SENSE DURABILITY PACK — 469-480
  {
    id:"68-op-157",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-addition-unlike-denominators",
    inattention:false,
    prompt:"A student adds 1/2 + 1/3 and gets 2/5.",
    work:"Student work: 1/2 + 1/3 = 2/5",
    options:[
      "They added across. Use a common denominator: 1/2 = 3/6 and 1/3 = 2/6, so the sum is 5/6.",
      "They should multiply 2 and 3 and keep 2/5.",
      "They should subtract because the denominators are different.",
      "They should change the answer to 1/5."
    ],
    correctIndex:0,
    hint:"Fractions must name parts of the same-size whole before you add.",
    insight:"Misconception: add numerators and denominators straight across. Principle: rewrite with a common denominator first. Correct: 5/6."
  },
  {
    id:"68-reason-157",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"mixed-number-equivalence",
    inattention:false,
    prompt:"Which statement is correct?",
    work:"Compare 1 3/4 and 7/4.",
    options:[
      "They are equivalent because 1 whole = 4/4, and 4/4 + 3/4 = 7/4.",
      "1 3/4 is greater because mixed numbers are always larger than fractions.",
      "7/4 is greater because 7 is greater than 1.",
      "They are unrelated forms."
    ],
    correctIndex:0,
    hint:"Rewrite the whole number part using fourths.",
    insight:"Misconception: mixed numbers and improper fractions are treated as different values. Principle: equivalent forms can name the same amount. Correct: 1 3/4 = 7/4."
  },
  {
    id:"68-logic-157",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"operation-choice",
    inattention:false,
    prompt:"Which statement must be true?",
    work:"Think about adding versus multiplying fractions.",
    options:[
      "Adding fractions and multiplying fractions follow different rules, so the same steps do not always work for both.",
      "You should always add denominators in any fraction operation.",
      "You should always multiply denominators in any fraction operation.",
      "Fractions can only be compared, not operated on."
    ],
    correctIndex:0,
    hint:"Different operations ask different mathematical questions.",
    insight:"Logic note: one rule does not automatically fit every operation. Good reasoning starts by identifying the operation correctly."
  },
  {
    id:"68-op-158",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-multiplication-vs-addition",
    inattention:false,
    prompt:"A student says 2/3 × 3/5 = 5/8 because they added across.",
    work:"Student work: 2/3 × 3/5 = 5/8",
    options:[
      "They used addition thinking instead of multiplication. Multiply numerators and denominators: 2 × 3 = 6 and 3 × 5 = 15, so 6/15 = 2/5.",
      "They should keep 5/8 because multiplication means combine everything.",
      "They should subtract the denominators to get 2/2.",
      "They should change the answer to 6/8."
    ],
    correctIndex:0,
    hint:"For multiplication, think 'part of a part,' not 'put together.'",
    insight:"Misconception: add-across rule is wrongly used for multiplication. Principle: multiply numerators and denominators, then simplify. Correct: 2/5."
  },
  {
    id:"68-reason-158",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"fraction-division-concept",
    inattention:false,
    prompt:"Which interpretation best matches 3 ÷ 1/2 = 6?",
    work:"Choose the meaning of the quotient.",
    options:[
      "It asks how many one-halves fit into 3 wholes.",
      "It asks what half of 3 is.",
      "It asks to add 3 and 1/2.",
      "It asks to compare which number is larger."
    ],
    correctIndex:0,
    hint:"Division can mean 'how many groups of this size fit?'",
    insight:"Misconception: division by a fraction is confused with taking a fraction of a number. Principle: 3 ÷ 1/2 counts the number of halves in 3. Correct meaning: 6 halves."
  },
  {
    id:"68-logic-158",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"counterexample",
    inattention:false,
    prompt:"A student claims, 'Dividing always makes a number smaller.' What is the best response?",
    work:"Claim: division always makes numbers smaller",
    options:[
      "The claim is false because dividing by a number less than 1, such as 1/2, makes the result larger.",
      "The claim is always true because division means reduce.",
      "The claim is true only for whole numbers.",
      "The claim cannot be tested."
    ],
    correctIndex:0,
    hint:"Try 6 ÷ 1/2.",
    insight:"Misconception: division is overgeneralized from whole-number cases. Principle: a counterexample breaks an always-claim. Example: 6 ÷ 1/2 = 12."
  },
  {
    id:"68-op-159",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"fraction-division",
    inattention:false,
    prompt:"A student computes 3/4 ÷ 1/2 = 3/8.",
    work:"Student work: 3/4 ÷ 1/2 = 3/8",
    options:[
      "They divided as if both fractions should be divided straight across. Use the reciprocal: 3/4 × 2/1 = 6/4 = 3/2.",
      "They should keep 3/8 because division always makes fractions smaller.",
      "They should add instead and get 4/6.",
      "They should change the answer to 2/6."
    ],
    correctIndex:0,
    hint:"Dividing by 1/2 asks how many halves fit into 3/4.",
    insight:"Misconception: direct division across fractions. Principle: divide by a fraction by multiplying by its reciprocal. Correct: 3/2 or 1 1/2."
  },
  {
    id:"68-reason-159",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equation-balance",
    inattention:false,
    prompt:"A student solves x + 5 = 12 by subtracting 5 only on the left side and gets x = 12.",
    work:"Student work: x + 5 = 12, subtract 5 from left only",
    options:[
      "They broke the balance. The same operation must be done to both sides, so x = 7.",
      "They should add 5 to both sides and get x = 17.",
      "They should move the 5 across and change its sign without reason.",
      "They should multiply both sides by 5."
    ],
    correctIndex:0,
    hint:"An equation stays true only if both sides are treated equally.",
    insight:"Misconception: one side can be changed alone. Principle: preserve equation balance by doing the same thing to both sides. Correct: x = 7."
  },
  {
    id:"68-logic-159",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"balance-principle",
    inattention:false,
    prompt:"Which statement about solving equations must be true?",
    work:"Choose the logically valid statement.",
    options:[
      "If you add, subtract, multiply, or divide one side of an equation, you must do the same to the other side to keep it balanced.",
      "You may change one side only if the answer looks simpler.",
      "Only subtraction needs to be done to both sides.",
      "Balance matters for fractions but not for equations."
    ],
    correctIndex:0,
    hint:"An equation is a claim that two expressions are equal.",
    insight:"Logic note: equality is preserved only when both sides are transformed consistently."
  },
  {
    id:"68-op-160",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"inverse-operations",
    inattention:false,
    prompt:"A student solves 3x = 18 by subtracting 3 and gets x = 15.",
    work:"Student work: 3x = 18, so x = 15",
    options:[
      "They used the wrong inverse. Since 3x means 3 times x, divide both sides by 3 to get x = 6.",
      "They should add 3 and get x = 21.",
      "They should keep 15 because the 3 moved away.",
      "They should multiply 18 by 3."
    ],
    correctIndex:0,
    hint:"Ask what operation is happening to x first.",
    insight:"Misconception: inverse operation is chosen by habit instead of structure. Principle: undo multiplication with division. Correct: x = 6."
  },
  {
    id:"68-reason-160",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"inverse-operation-choice",
    inattention:false,
    prompt:"Which first step makes the most sense for solving 2x - 7 = 15?",
    work:"Choose the best first move.",
    options:[
      "Add 7 to both sides",
      "Divide both sides by 2",
      "Subtract 7 from both sides",
      "Multiply both sides by 2"
    ],
    correctIndex:0,
    hint:"Undo operations in reverse order of how they happen to x.",
    insight:"Misconception: students often divide first because they notice the coefficient before the subtraction. Principle: reverse the order of operations when isolating a variable. Best first step: add 7 to both sides."
  },
  {
    id:"68-logic-160",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"false-generalization",
    inattention:false,
    prompt:"A student says, 'Whenever I see a fraction problem, I should add the denominators.' What is the best response?",
    work:"Claim: always add denominators in fraction problems",
    options:[
      "The claim is false because different fraction operations use different rules; for example, multiplying fractions does not add denominators.",
      "The claim is true because denominators tell the whole story.",
      "The claim is true only for improper fractions.",
      "The claim cannot be checked unless decimals are used."
    ],
    correctIndex:0,
    hint:"One clear counterexample can disprove an always-rule.",
    insight:"Misconception: a single memorized step is over-applied to every fraction task. Principle: identify the operation before choosing a rule."
  }
  , // PROPORTIONAL REASONING / EQUATION TRANSLATION DURABILITY PACK — 481-492
  {
    id:"68-op-161",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"unit-rate-fraction-time",
    inattention:false,
    prompt:"A student says that traveling 6 miles in 3/4 hour means the speed is 6 ÷ 4 = 1.5 miles per hour.",
    work:"Student work: 6 miles in 3/4 hour → 6 ÷ 4 = 1.5 mph",
    options:[
      "They divided by 4 instead of by 3/4. To find miles per 1 hour, compute 6 ÷ 3/4 = 8 miles per hour.",
      "They should multiply 6 × 4 and get 24 miles per hour.",
      "They should add 6 + 3/4 and get 6.75 miles per hour.",
      "They should keep 1.5 because the denominator is 4."
    ],
    correctIndex:0,
    hint:"Unit rate means 'for 1 whole unit,' so divide by the full amount of time.",
    insight:"Misconception: the denominator of the fraction is used alone. Principle: divide by the entire fraction. Correct: 6 ÷ 3/4 = 8 mph."
  },
  {
    id:"68-reason-161",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equation-translation-proportional",
    inattention:false,
    prompt:"Which equation best matches the statement, 'The total cost y is $3 for each notebook x'?",
    work:"Translate a proportional situation into an equation.",
    options:[
      "y = 3x",
      "y = x + 3",
      "3y = x",
      "y = 3 + x/x"
    ],
    correctIndex:0,
    hint:"'For each' signals a constant rate multiplied by the number of items.",
    insight:"Misconception: proportional situations are written as addition. Principle: cost = rate × quantity. Correct equation: y = 3x."
  },
  {
    id:"68-logic-161",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"proportional-vs-additive",
    inattention:false,
    prompt:"A table shows (2,5), (4,7), and (6,9). A student says it is proportional because y goes up by 2 when x goes up by 2.",
    work:"Claim: equal increases mean proportional",
    options:[
      "The claim is false because proportional relationships must have a constant ratio, and 5/2, 7/4, and 9/6 are not equal.",
      "The claim is true because equal increases always mean proportional.",
      "The claim is true because the points make a pattern.",
      "The claim cannot be checked without a graph."
    ],
    correctIndex:0,
    hint:"Proportional means multiplicative, not just additive.",
    insight:"Misconception: additive growth is confused with proportionality. Principle: check for constant ratio or y = kx. This table is not proportional."
  },
  {
    id:"68-op-162",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"scale-ratio-up",
    inattention:false,
    prompt:"A recipe uses 3 cups of flour for 2 batches. A student says 5 batches need 6 cups because 5 is about twice 2.",
    work:"Student work: 3 cups for 2 batches → 5 batches need 6 cups",
    options:[
      "The scaling is off. Since 5 is 2.5 times 2, multiply 3 by 2.5 to get 7.5 cups.",
      "They should add 3 + 2 + 5 and get 10 cups.",
      "They should divide 5 by 3 and get 1.67 cups.",
      "They should keep 6 because doubling is close enough."
    ],
    correctIndex:0,
    hint:"Match the scale factor from batches to flour.",
    insight:"Misconception: students estimate with doubling instead of preserving the exact ratio. Principle: use the same scale factor on both quantities. Correct: 7.5 cups."
  },
  {
    id:"68-reason-162",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"equivalent-ratios",
    inattention:false,
    prompt:"Which pair of ratios is equivalent?",
    work:"Choose the pair that names the same relationship.",
    options:[
      "2:3 and 8:12",
      "2:3 and 6:8",
      "2:3 and 4:5",
      "2:3 and 3:2"
    ],
    correctIndex:0,
    hint:"Equivalent ratios come from multiplying or dividing both parts by the same number.",
    insight:"Misconception: any larger pair can look equivalent. Principle: preserve the same multiplicative relationship. Correct: 2:3 and 8:12."
  },
  {
    id:"68-logic-162",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"graph-origin-rule",
    inattention:false,
    prompt:"Which statement must be true for the graph of a proportional relationship?",
    work:"Think about y = kx.",
    options:[
      "It passes through the origin.",
      "It always slopes downward.",
      "It always uses whole numbers only.",
      "It must curve upward."
    ],
    correctIndex:0,
    hint:"What point appears when x = 0 in y = kx?",
    insight:"Logic note: if y = kx, then y = 0 when x = 0, so the graph includes the origin."
  },
  {
    id:"68-op-163",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"solve-proportion",
    inattention:false,
    prompt:"A student solves x/6 = 5/9 by writing x = 11/15.",
    work:"Student work: x/6 = 5/9 → x = 11/15",
    options:[
      "They combined numbers incorrectly. Multiply both sides by 6: x = 6 × 5/9 = 30/9 = 10/3.",
      "They should add 6 + 5 + 9 and keep 11/15.",
      "They should subtract 6 - 5 and get 1/9.",
      "They should flip both fractions and get 9/5."
    ],
    correctIndex:0,
    hint:"Undo the division by 6.",
    insight:"Misconception: numbers in a proportion are combined without preserving equivalence. Principle: use inverse operations or cross products carefully. Correct: x = 10/3."
  },
  {
    id:"68-reason-163",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"constant-of-proportionality",
    inattention:false,
    prompt:"A table shows x = 2, 4, 6 and y = 5, 10, 15. What is the constant of proportionality?",
    work:"Find k in y = kx.",
    options:[
      "2.5",
      "5",
      "3",
      "0.4"
    ],
    correctIndex:0,
    hint:"Compute y/x for any pair.",
    insight:"Misconception: students may choose the y-value or the difference instead of the ratio. Principle: in y = kx, k = y/x. Correct: 5/2 = 2.5."
  },
  {
    id:"68-logic-163",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"false-generalization-proportions",
    inattention:false,
    prompt:"A student says, 'If two quantities both increase by the same amount each time, the relationship is proportional.' What is the best response?",
    work:"Claim: same increase each time means proportional",
    options:[
      "The claim is false because equal increases show an additive pattern, but proportional relationships need a constant multiplier.",
      "The claim is true because patterns only depend on differences.",
      "The claim is true whenever the table starts with small numbers.",
      "The claim cannot be tested unless decimals are used."
    ],
    correctIndex:0,
    hint:"Compare additive change with multiplicative change.",
    insight:"Misconception: arithmetic patterns are mistaken for proportional ones. Principle: proportional relationships are multiplicative, not merely evenly increasing."
  },
  {
    id:"68-op-164",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"scale-map-distance",
    inattention:false,
    prompt:"On a map, 1 inch represents 5 miles. A student says 3.5 inches represents 8.5 miles because they added 5 + 3.5.",
    work:"Student work: 1 in = 5 mi, so 3.5 in = 8.5 mi",
    options:[
      "They added instead of scaling. Multiply 3.5 × 5 to get 17.5 miles.",
      "They should subtract 5 - 3.5 and get 1.5 miles.",
      "They should divide 5 by 3.5 and get about 1.4 miles.",
      "They should keep 8.5 because both numbers belong together."
    ],
    correctIndex:0,
    hint:"Each inch represents 5 miles, so use repeated groups or multiplication.",
    insight:"Misconception: additive combination replaces proportional scaling. Principle: scale by multiplying the number of inches by miles per inch. Correct: 17.5 miles."
  },
  {
    id:"68-reason-164",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"unit-rate-comparison",
    inattention:false,
    prompt:"Which is the better buy: 12 ounces for $3 or 20 ounces for $4?",
    work:"Compare using unit rates.",
    options:[
      "20 ounces for $4, because it gives 5 ounces per dollar while 12 ounces for $3 gives 4 ounces per dollar.",
      "12 ounces for $3, because 12 is less than 20.",
      "They are equal because both prices are multiples of 1.",
      "12 ounces for $3, because $3 is less than $4."
    ],
    correctIndex:0,
    hint:"Compare the amount you get for 1 dollar.",
    insight:"Misconception: students compare only total price or total amount. Principle: compare unit rates. Correct: 20 oz for $4 is the better buy."
  },
  {
    id:"68-logic-164",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"ratio-equivalence-rule",
    inattention:false,
    prompt:"Which statement correctly explains how to make an equivalent ratio?",
    work:"Choose the rule that always works.",
    options:[
      "Multiply or divide both parts of the ratio by the same nonzero number.",
      "Add the same number to both parts of the ratio.",
      "Switch the two parts of the ratio.",
      "Multiply one part and add to the other."
    ],
    correctIndex:0,
    hint:"Equivalent means the relationship stays the same.",
    insight:"Logic note: a ratio stays equivalent only when both terms are scaled by the same nonzero factor."
  }
  , // INTEGER / SIGNED-NUMBER DURABILITY PACK — 493-504
  {
    id:"68-op-165",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"subtract-negative",
    inattention:false,
    prompt:"A student says 7 - (-3) = 4.",
    work:"Student work: 7 - (-3) = 4",
    options:[
      "They treated subtracting a negative like ordinary subtraction. Subtracting a negative means add the opposite, so 7 - (-3) = 7 + 3 = 10.",
      "They should keep 4 because subtraction always makes numbers smaller.",
      "They should multiply and get -21.",
      "They should change the answer to -4."
    ],
    correctIndex:0,
    hint:"Taking away a negative is like removing a debt.",
    insight:"Misconception: subtracting a negative is treated like subtracting a positive. Principle: subtracting a negative is adding. Correct: 10."
  },
  {
    id:"68-reason-165",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"easy",
    errorType:"integer-comparison",
    inattention:false,
    prompt:"Which number is greater?",
    work:"Compare -4 and -7.",
    options:[
      "-4, because it is to the right of -7 on the number line.",
      "-7, because 7 is greater than 4.",
      "They are equal because both are negative.",
      "There is not enough information."
    ],
    correctIndex:0,
    hint:"Numbers farther right on the number line are greater.",
    insight:"Misconception: students compare only the absolute values. Principle: greater numbers lie farther right on the number line. Correct: -4 is greater."
  },
  {
    id:"68-logic-165",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"false-generalization-subtraction",
    inattention:false,
    prompt:"A student says, 'Subtraction always makes a number smaller.' What is the best response?",
    work:"Claim: subtraction always makes numbers smaller",
    options:[
      "The claim is false because subtracting a negative can make a number larger, such as 5 - (-2) = 7.",
      "The claim is true because subtraction means take away.",
      "The claim is true only for whole numbers.",
      "The claim cannot be tested."
    ],
    correctIndex:0,
    hint:"One counterexample is enough to disprove an always-rule.",
    insight:"Misconception: subtraction is overgeneralized from positive-number cases. Principle: subtracting a negative increases the value. Counterexample: 5 - (-2) = 7."
  },
  {
    id:"68-op-166",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"add-integers-opposite-signs",
    inattention:false,
    prompt:"A student computes -8 + 3 = -11.",
    work:"Student work: -8 + 3 = -11",
    options:[
      "They added the values and kept the negative sign. Since the signs are different, subtract 8 - 3 = 5 and keep the sign of the number with greater absolute value, so the answer is -5.",
      "They should keep -11 because one number is negative.",
      "They should multiply and get -24.",
      "They should change the answer to 11."
    ],
    correctIndex:0,
    hint:"For opposite signs, think difference, not total.",
    insight:"Misconception: opposite-sign addition is treated like same-sign addition. Principle: subtract absolute values and keep the sign of the larger absolute value. Correct: -5."
  },
  {
    id:"68-reason-166",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"absolute-value-meaning",
    inattention:false,
    prompt:"Which statement best describes |-6|?",
    work:"Interpret absolute value.",
    options:[
      "It is 6 because absolute value is distance from 0.",
      "It is -6 because the number inside is negative.",
      "It is 0 because the signs cancel.",
      "It is 12 because distance uses both directions."
    ],
    correctIndex:0,
    hint:"Distance is never negative.",
    insight:"Misconception: absolute value is confused with the original sign. Principle: absolute value is distance from 0, so it is nonnegative. Correct: |-6| = 6."
  },
  {
    id:"68-logic-166",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"opposite-vs-reciprocal",
    inattention:false,
    prompt:"Which statement is correct?",
    work:"Compare opposite and reciprocal.",
    options:[
      "The opposite of 3 is -3, while the reciprocal of 3 is 1/3.",
      "The opposite of 3 is 1/3, and the reciprocal is -3.",
      "The opposite and reciprocal of 3 are the same.",
      "Neither concept applies to positive numbers."
    ],
    correctIndex:0,
    hint:"Opposite changes additive direction; reciprocal changes multiplicative relationship.",
    insight:"Misconception: opposite and reciprocal are mixed up. Principle: opposite means additive inverse, reciprocal means multiplicative inverse."
  },
  {
    id:"68-op-167",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"multiply-integers-signs",
    inattention:false,
    prompt:"A student says (-4)(-2) = -8.",
    work:"Student work: (-4)(-2) = -8",
    options:[
      "They used the wrong sign rule. The product of two negatives is positive, so (-4)(-2) = 8.",
      "They should keep -8 because a negative is involved.",
      "They should add instead and get -6.",
      "They should change the answer to 2."
    ],
    correctIndex:0,
    hint:"Same signs multiply to a positive product.",
    insight:"Misconception: any negative factor is assumed to make the product negative. Principle: same signs give a positive result. Correct: 8."
  },
  {
    id:"68-reason-167",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"solve-negative-equation",
    inattention:false,
    prompt:"What is the best first step to solve x - 5 = -2?",
    work:"Choose the most sensible first move.",
    options:[
      "Add 5 to both sides",
      "Subtract 5 from both sides",
      "Multiply both sides by -5",
      "Divide both sides by 5"
    ],
    correctIndex:0,
    hint:"Undo subtraction first to isolate x.",
    insight:"Misconception: students often repeat the same operation instead of using the inverse. Principle: undo subtraction with addition. Best first step: add 5 to both sides."
  },
  {
    id:"68-logic-167",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"integer-sign-rule",
    inattention:false,
    prompt:"Which sign pattern always gives a negative product?",
    work:"Choose the always-true rule.",
    options:[
      "One factor is positive and the other is negative.",
      "Both factors are negative.",
      "Both factors are positive.",
      "Any product with 0 is negative."
    ],
    correctIndex:0,
    hint:"Different signs make a negative product.",
    insight:"Logic note: multiplying numbers with opposite signs always produces a negative result."
  },
  {
    id:"68-op-168",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"divide-integers-signs",
    inattention:false,
    prompt:"A student computes -18 ÷ 3 = 6.",
    work:"Student work: -18 ÷ 3 = 6",
    options:[
      "They ignored the sign. A negative divided by a positive is negative, so -18 ÷ 3 = -6.",
      "They should keep 6 because division removes negatives.",
      "They should multiply and get -54.",
      "They should change the answer to 3."
    ],
    correctIndex:0,
    hint:"Opposite signs give a negative quotient.",
    insight:"Misconception: the sign is dropped during division. Principle: different signs produce a negative quotient. Correct: -6."
  },
  {
    id:"68-reason-168",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"number-line-distance",
    inattention:false,
    prompt:"Which pair of numbers is farther apart on the number line?",
    work:"Compare the distance between -2 and 5 with the distance between -4 and 2.",
    options:[
      "-2 and 5, because their distance is 7 while the distance from -4 to 2 is 6.",
      "-4 and 2, because 4 is greater than 2.",
      "They are the same distance apart.",
      "There is not enough information."
    ],
    correctIndex:0,
    hint:"Distance between two numbers is how far apart they are on the number line.",
    insight:"Misconception: students compare only the endpoints separately. Principle: count or compute the total distance between the numbers. Correct: -2 and 5 are farther apart."
  },
  {
    id:"68-logic-168",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"absolute-value-generalization",
    inattention:false,
    prompt:"A student says, 'Absolute value makes every number bigger.' What is the best response?",
    work:"Claim: absolute value makes every number bigger",
    options:[
      "The claim is false because absolute value leaves nonnegative numbers like 4 unchanged: |4| = 4.",
      "The claim is true because absolute value removes the sign.",
      "The claim is true only for negative numbers.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Try both a positive number and a negative number.",
    insight:"Misconception: absolute value is thought to increase every input. Principle: absolute value gives distance from 0; it changes negatives but can leave positives unchanged."
  }
  , // EXPRESSION STRUCTURE / DISTRIBUTIVE / LIKE-TERMS DURABILITY PACK — 505-516
  {
    id:"68-op-169",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"distributive-property",
    inattention:false,
    prompt:"A student says 3(x + 4) = 3x + 4.",
    work:"Student work: 3(x + 4) = 3x + 4",
    options:[
      "They distributed the 3 to only one term. Multiply both terms inside: 3(x + 4) = 3x + 12.",
      "They should keep 3x + 4 because the 3 only touches x.",
      "They should add 3 + x + 4 and get x + 7.",
      "They should change the answer to 12x."
    ],
    correctIndex:0,
    hint:"The factor outside the parentheses multiplies every term inside.",
    insight:"Misconception: distribution is applied to only one term. Principle: multiply the outside factor by each term inside the parentheses. Correct: 3x + 12."
  },
  {
    id:"68-reason-169",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"combine-like-terms",
    inattention:false,
    prompt:"Which expression is equivalent to 4x + 2x?",
    work:"Combine like terms.",
    options:[
      "6x",
      "8x",
      "6x²",
      "4x + 2"
    ],
    correctIndex:0,
    hint:"Both terms have the same variable part.",
    insight:"Misconception: coefficients are multiplied or the exponent is changed. Principle: like terms add by combining coefficients. Correct: 6x."
  },
  {
    id:"68-logic-169",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"like-terms-rule",
    inattention:false,
    prompt:"Which pair of terms can be combined?",
    work:"Choose the pair that is like terms.",
    options:[
      "3x and 5x",
      "3x and 3y",
      "3x and 3",
      "x and x²"
    ],
    correctIndex:0,
    hint:"Like terms must have the same variable part raised to the same powers.",
    insight:"Logic note: terms can be combined only when their variable structure matches exactly."
  },
  {
    id:"68-op-170",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"subtract-terms",
    inattention:false,
    prompt:"A student simplifies 7x - 3x as 4.",
    work:"Student work: 7x - 3x = 4",
    options:[
      "They dropped the variable. Since both terms are x-terms, subtract the coefficients and keep x: 7x - 3x = 4x.",
      "They should keep 4 because the x cancels.",
      "They should multiply and get 21x.",
      "They should change the answer to x."
    ],
    correctIndex:0,
    hint:"The variable part stays when like terms are combined.",
    insight:"Misconception: students remove the variable when combining terms. Principle: combine coefficients and keep the shared variable part. Correct: 4x."
  },
  {
    id:"68-reason-170",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"order-of-operations",
    inattention:false,
    prompt:"What is the correct value of 2 + 3 × 4?",
    work:"Evaluate using order of operations.",
    options:[
      "14",
      "20",
      "24",
      "9"
    ],
    correctIndex:0,
    hint:"Multiply before adding.",
    insight:"Misconception: students work strictly left to right. Principle: multiplication is done before addition unless parentheses change the order. Correct: 14."
  },
  {
    id:"68-logic-170",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"equivalent-expressions",
    inattention:false,
    prompt:"Which statement is true?",
    work:"Compare x + x + x with 3x.",
    options:[
      "They are equivalent because x added three times is 3 groups of x.",
      "They are different because one has plus signs and the other does not.",
      "They are equal only when x = 1.",
      "They cannot both represent variable expressions."
    ],
    correctIndex:0,
    hint:"Repeated addition can be written as multiplication.",
    insight:"Logic note: multiplication is a compact way to write repeated addition. So x + x + x = 3x for all x."
  },
  {
    id:"68-op-171",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"distribute-negative",
    inattention:false,
    prompt:"A student says 4(x - 2) = 4x - 2.",
    work:"Student work: 4(x - 2) = 4x - 2",
    options:[
      "They distributed the 4 to only one term. Multiply both terms: 4(x - 2) = 4x - 8.",
      "They should keep 4x - 2 because subtraction stays the same.",
      "They should add 4 + x - 2 and get x + 2.",
      "They should change the answer to 8x."
    ],
    correctIndex:0,
    hint:"Distribution applies to every term inside the parentheses.",
    insight:"Misconception: the constant term is left unchanged during distribution. Principle: multiply the outside factor by each term. Correct: 4x - 8."
  },
  {
    id:"68-reason-171",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"translate-expression",
    inattention:false,
    prompt:"Which expression matches 'five more than twice a number x'?",
    work:"Translate words into an algebraic expression.",
    options:[
      "2x + 5",
      "5x + 2",
      "2(x + 5)",
      "x + 7"
    ],
    correctIndex:0,
    hint:"'Twice a number' comes first, then 'five more than' means add 5.",
    insight:"Misconception: students attach words in the wrong order. Principle: interpret the structure of the phrase carefully. Correct: 2x + 5."
  },
  {
    id:"68-logic-171",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"false-generalization-parentheses",
    inattention:false,
    prompt:"A student says, 'Parentheses always mean add first.' What is the best response?",
    work:"Claim: parentheses always mean add first",
    options:[
      "The claim is false because parentheses show what is grouped together, but the operation inside might be subtraction, multiplication, or something else.",
      "The claim is true because parentheses only surround sums.",
      "The claim is true in algebra but false in arithmetic.",
      "The claim cannot be tested."
    ],
    correctIndex:0,
    hint:"Look at examples like (7 - 2) or 3(x + 1).",
    insight:"Misconception: grouping symbols are overinterpreted as meaning addition. Principle: parentheses show a grouped expression, not a single operation type."
  },
  {
    id:"68-op-172",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"inverse-operations-parentheses",
    inattention:false,
    prompt:"A student solves 2(x + 3) = 14 by writing x + 3 = 12, then x = 9.",
    work:"Student work: 2(x + 3) = 14 → x + 3 = 12 → x = 9",
    options:[
      "They subtracted 2 instead of undoing multiplication. First divide both sides by 2 to get x + 3 = 7, then subtract 3 to get x = 4.",
      "They should keep 9 because the 2 moved across.",
      "They should add 3 first and get x = 17.",
      "They should distribute first and get x = 12."
    ],
    correctIndex:0,
    hint:"Ask what operation is happening to the grouped quantity first.",
    insight:"Misconception: students undo multiplication with subtraction. Principle: reverse the actual operations in order. Correct: x = 4."
  },
  {
    id:"68-reason-172",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"equivalent-expressions-check",
    inattention:false,
    prompt:"Which expression is equivalent to 2(x + 3) + x?",
    work:"Simplify the expression.",
    options:[
      "3x + 6",
      "2x + 3",
      "3x + 3",
      "2x + 6x"
    ],
    correctIndex:0,
    hint:"Distribute first, then combine like terms.",
    insight:"Misconception: students stop after distribution or combine incorrectly. Principle: simplify step by step. 2(x + 3) + x = 2x + 6 + x = 3x + 6."
  },
  {
    id:"68-logic-172",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"order-rule",
    inattention:false,
    prompt:"Which rule is correct when simplifying expressions?",
    work:"Choose the always-true statement.",
    options:[
      "Follow the order of operations and combine like terms only when they really are like terms.",
      "Always work left to right no matter what operations appear.",
      "Any terms with numbers in front can be combined.",
      "Parentheses can always be ignored first."
    ],
    correctIndex:0,
    hint:"A correct rule must work in every case.",
    insight:"Logic note: correct simplification depends on structure, not on a single shortcut. Order of operations and like-term rules both matter."
  }
  , // GEOMETRY / AREA-VOLUME / ANGLE-RELATIONSHIP DURABILITY PACK — 517-528
  {
    id:"68-op-173",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"area-vs-perimeter",
    inattention:false,
    prompt:"A student says the area of a rectangle with length 8 and width 3 is 22 square units.",
    work:"Student work: area = 8 + 8 + 3 + 3 = 22",
    options:[
      "They found perimeter instead of area. Area uses multiplication: 8 × 3 = 24 square units.",
      "They should keep 22 because area means the distance around.",
      "They should subtract 8 - 3 and get 5 square units.",
      "They should add 8 + 3 and get 11 square units."
    ],
    correctIndex:0,
    hint:"Area measures the space inside, not the distance around.",
    insight:"Misconception: perimeter and area are confused. Principle: rectangle area = length × width. Correct: 24 square units."
  },
  {
    id:"68-reason-173",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"triangle-angle-sum",
    inattention:false,
    prompt:"A triangle has two angles measuring 50° and 60°. What is the third angle?",
    work:"Use the angle-sum rule for triangles.",
    options:[
      "70°",
      "110°",
      "10°",
      "180°"
    ],
    correctIndex:0,
    hint:"The three interior angles of a triangle total 180°.",
    insight:"Misconception: students may add instead of subtracting from 180°. Principle: third angle = 180° - (50° + 60°). Correct: 70°."
  },
  {
    id:"68-logic-173",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"perimeter-area-rule",
    inattention:false,
    prompt:"Which statement is always true?",
    work:"Choose the correct geometric rule.",
    options:[
      "Perimeter measures distance around a figure, while area measures the space inside it.",
      "Perimeter and area are found the same way for every figure.",
      "Area is always larger than perimeter.",
      "Perimeter uses square units."
    ],
    correctIndex:0,
    hint:"Think about what each measurement describes.",
    insight:"Logic note: perimeter and area answer different questions, so they use different units and methods."
  },
  {
    id:"68-op-174",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"circle-area-vs-circumference",
    inattention:false,
    prompt:"A student says the area of a circle with radius 4 is 8π.",
    work:"Student work: area = 2πr = 8π",
    options:[
      "They used the circumference formula. Area is πr², so the area is 16π square units.",
      "They should keep 8π because radius means double.",
      "They should add 4 + 4 and get 8 square units.",
      "They should use πd² and get 64π."
    ],
    correctIndex:0,
    hint:"Area uses the radius squared.",
    insight:"Misconception: circumference and area formulas are mixed up. Principle: area = πr². Correct: 16π square units."
  },
  {
    id:"68-reason-174",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"supplementary-angles",
    inattention:false,
    prompt:"Two angles form a straight line. One angle measures 125°. What is the other angle?",
    work:"Use the relationship for supplementary angles.",
    options:[
      "55°",
      "65°",
      "125°",
      "305°"
    ],
    correctIndex:0,
    hint:"Angles on a straight line add to 180°.",
    insight:"Misconception: students may subtract from 90° instead of 180°. Principle: supplementary angles total 180°. Correct: 55°."
  },
  {
    id:"68-logic-174",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"surface-area-vs-volume",
    inattention:false,
    prompt:"Which statement correctly compares surface area and volume?",
    work:"Choose the accurate description.",
    options:[
      "Surface area measures the covering of a solid, while volume measures the space inside it.",
      "Surface area and volume both measure the space inside a solid.",
      "Volume is measured in square units.",
      "Surface area is measured in cubic units."
    ],
    correctIndex:0,
    hint:"Think 'wrapper' versus 'filling.'",
    insight:"Logic note: surface area describes exposed faces, while volume describes interior space."
  },
  {
    id:"68-op-175",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"prism-volume",
    inattention:false,
    prompt:"A student says the volume of a rectangular prism with length 5, width 2, and height 3 is 10 cubic units.",
    work:"Student work: volume = 5 × 2 = 10",
    options:[
      "They found the area of the base only. Volume = length × width × height = 5 × 2 × 3 = 30 cubic units.",
      "They should keep 10 because volume uses the front face only.",
      "They should add 5 + 2 + 3 and get 10 cubic units.",
      "They should double 10 and get 20 cubic units."
    ],
    correctIndex:0,
    hint:"Volume of a prism uses three dimensions.",
    insight:"Misconception: students stop at base area. Principle: prism volume = base area × height. Correct: 30 cubic units."
  },
  {
    id:"68-reason-175",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"complementary-angles",
    inattention:false,
    prompt:"Two angles are complementary. If one angle is 38°, what is the other?",
    work:"Use the relationship for complementary angles.",
    options:[
      "52°",
      "142°",
      "38°",
      "128°"
    ],
    correctIndex:0,
    hint:"Complementary angles total 90°.",
    insight:"Misconception: students may confuse complementary with supplementary. Principle: complementary angles add to 90°. Correct: 52°."
  },
  {
    id:"68-logic-175",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"triangle-sum-generalization",
    inattention:false,
    prompt:"A student says, 'The angles in any polygon always add to 180°.' What is the best response?",
    work:"Claim: every polygon has angle sum 180°",
    options:[
      "The claim is false because 180° is the angle sum for triangles, but polygons with more sides have larger angle sums.",
      "The claim is true because all closed shapes behave like triangles.",
      "The claim is true only for quadrilaterals.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Test the claim with a quadrilateral.",
    insight:"Misconception: a triangle rule is generalized to all polygons. Principle: different polygons have different interior-angle sums."
  },
  {
    id:"68-op-176",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"surface-area-cube",
    inattention:false,
    prompt:"A student says the surface area of a cube with side length 4 is 16 square units.",
    work:"Student work: surface area = 4 × 4 = 16",
    options:[
      "They found the area of one face only. A cube has 6 equal faces, so surface area = 6 × 4² = 6 × 16 = 96 square units.",
      "They should keep 16 because all faces together count as one square.",
      "They should add 4 + 4 + 4 + 4 and get 16 square units.",
      "They should multiply 4 × 6 and get 24 square units."
    ],
    correctIndex:0,
    hint:"Surface area adds the areas of all outer faces.",
    insight:"Misconception: students calculate one face and stop. Principle: total surface area is the sum of all face areas. Correct: 96 square units."
  },
  {
    id:"68-reason-176",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"circumference-reasoning",
    inattention:false,
    prompt:"Which change will double the circumference of a circle?",
    work:"Think about the formula C = 2πr.",
    options:[
      "Doubling the radius",
      "Doubling π",
      "Adding 2 to the radius in every circle",
      "Squaring the radius"
    ],
    correctIndex:0,
    hint:"Circumference is directly proportional to the radius.",
    insight:"Misconception: students may confuse linear and squared relationships. Principle: circumference changes linearly with radius. Doubling r doubles C."
  },
  {
    id:"68-logic-176",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"units-geometry",
    inattention:false,
    prompt:"Which unit pairing is correct?",
    work:"Match each measurement with its unit type.",
    options:[
      "Area uses square units, and volume uses cubic units.",
      "Area uses cubic units, and volume uses square units.",
      "Perimeter uses square units, and area uses plain units.",
      "Volume uses degrees, and angle measure uses cubic units."
    ],
    correctIndex:0,
    hint:"The dimension of the measurement affects the unit.",
    insight:"Logic note: two-dimensional measurements use square units, and three-dimensional measurements use cubic units."
  }
  , // COORDINATE PLANE / SLOPE / GRAPH INTERPRETATION DURABILITY PACK — 529-540
  {
    id:"68-op-177",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"ordered-pair-meaning",
    inattention:false,
    prompt:"A student plots the point (3, -2) by moving down 3 and right 2.",
    work:"Student work: (3, -2) means down 3, right 2",
    options:[
      "They reversed x and y. The point (3, -2) means move right 3 and down 2.",
      "They should keep it because negatives always come first.",
      "They should move left 3 and up 2.",
      "They should plot it on the y-axis."
    ],
    correctIndex:0,
    hint:"In an ordered pair, x comes first and y comes second.",
    insight:"Misconception: x- and y-coordinates are reversed. Principle: ordered pairs are written (x, y). Correct: right 3, down 2."
  },
  {
    id:"68-reason-177",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"quadrant-identification",
    inattention:false,
    prompt:"In which quadrant is the point (-4, 5)?",
    work:"Use the signs of x and y.",
    options:[
      "Quadrant II",
      "Quadrant I",
      "Quadrant III",
      "Quadrant IV"
    ],
    correctIndex:0,
    hint:"Negative x and positive y place a point in Quadrant II.",
    insight:"Misconception: quadrant names are confused or counted incorrectly. Principle: use the sign pattern of (x, y). Correct: Quadrant II."
  },
  {
    id:"68-logic-177",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"axes-rule",
    inattention:false,
    prompt:"Which statement is always true about a point on the x-axis?",
    work:"Choose the correct rule.",
    options:[
      "Its y-coordinate is 0.",
      "Its x-coordinate is 0.",
      "Both coordinates are always positive.",
      "It must also be on the y-axis."
    ],
    correctIndex:0,
    hint:"Points on an axis have no distance from that axis's direction partner.",
    insight:"Logic note: any point on the x-axis has y = 0."
  },
  {
    id:"68-op-178",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"slope-computation",
    inattention:false,
    prompt:"A student finds the slope between (2, 3) and (6, 11) and gets 2 because 11 - 3 = 8 and 6 - 2 = 4, then 4 ÷ 8 = 2.",
    work:"Student work: slope = 2",
    options:[
      "They reversed the division. Slope = rise/run = (11 - 3)/(6 - 2) = 8/4 = 2.",
      "They should change the answer to 1/2 because run goes first.",
      "They should add the differences and get 12.",
      "They should subtract 8 - 4 and get 4."
    ],
    correctIndex:0,
    hint:"Slope compares vertical change to horizontal change.",
    insight:"Misconception: rise and run are divided in the wrong order. Principle: slope = change in y divided by change in x. Correct: 2."
  },
  {
    id:"68-reason-178",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"slope-meaning",
    inattention:false,
    prompt:"A line has slope 3. What does that mean?",
    work:"Interpret the slope as a rate of change.",
    options:[
      "For every 1 unit increase in x, y increases by 3 units.",
      "For every 3 units increase in x, y increases by 1 unit.",
      "The line crosses the y-axis at 3.",
      "The line must be horizontal."
    ],
    correctIndex:0,
    hint:"Slope tells how much y changes for each 1 unit of x.",
    insight:"Misconception: slope is confused with intercept or with the reciprocal rate. Principle: slope is rate of change. Correct meaning: up 3 for every 1 right."
  },
  {
    id:"68-logic-178",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"linear-vs-nonlinear",
    inattention:false,
    prompt:"Which statement must be true for a linear relationship shown in a table?",
    work:"Choose the defining property.",
    options:[
      "The change in y is constant for equal changes in x.",
      "The y-values are always larger than the x-values.",
      "The x-values must start at 0.",
      "The table must show multiplication only."
    ],
    correctIndex:0,
    hint:"Linear relationships have a constant rate of change.",
    insight:"Logic note: linear patterns show equal first differences for equal x-steps."
  },
  {
    id:"68-op-179",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"y-intercept-reading",
    inattention:false,
    prompt:"A student sees y = 2x + 5 and says the slope is 5.",
    work:"Student work: slope = 5",
    options:[
      "They confused slope and intercept. In y = mx + b, the slope is 2 and the y-intercept is 5.",
      "They should keep 5 because it is the last number.",
      "They should add 2 and 5 to get slope 7.",
      "They should change the slope to x."
    ],
    correctIndex:0,
    hint:"In y = mx + b, m is the slope and b is the y-intercept.",
    insight:"Misconception: students swap slope and intercept. Principle: identify the roles of m and b in slope-intercept form. Correct: slope 2, intercept 5."
  },
  {
    id:"68-reason-179",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"table-to-equation",
    inattention:false,
    prompt:"A table shows x: 0, 1, 2 and y: 4, 7, 10. Which equation matches the pattern?",
    work:"Find the linear rule.",
    options:[
      "y = 3x + 4",
      "y = 4x + 3",
      "y = x + 4",
      "y = 7x"
    ],
    correctIndex:0,
    hint:"Look for the starting value and the constant increase.",
    insight:"Misconception: students mix up the starting value with the rate. Principle: identify y when x = 0 and the constant change. Correct: y = 3x + 4."
  },
  {
    id:"68-logic-179",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"graph-steepness",
    inattention:false,
    prompt:"Which statement is true about two positive-slope lines, one with slope 1 and one with slope 4?",
    work:"Compare their steepness.",
    options:[
      "The line with slope 4 is steeper because y changes more for each 1 unit of x.",
      "The line with slope 1 is steeper because 1 is simpler.",
      "They are equally steep because both slopes are positive.",
      "Steepness depends only on the y-intercept."
    ],
    correctIndex:0,
    hint:"Greater positive slope means faster upward change.",
    insight:"Logic note: slope size affects steepness. A larger positive slope means a steeper upward line."
  },
  {
    id:"68-op-180",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"horizontal-vertical-lines",
    inattention:false,
    prompt:"A student says the slope of the horizontal line y = -3 is -3.",
    work:"Student work: slope of y = -3 is -3",
    options:[
      "They used the y-value as the slope. A horizontal line has slope 0 because y does not change.",
      "They should keep -3 because the line is below the x-axis.",
      "They should change it to undefined because the line is flat.",
      "They should add x and y and get -2."
    ],
    correctIndex:0,
    hint:"Slope measures change in y compared with change in x.",
    insight:"Misconception: the constant y-value is mistaken for slope. Principle: horizontal lines have no rise, so slope = 0."
  },
  {
    id:"68-reason-180",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"intercept-meaning-context",
    inattention:false,
    prompt:"A taxi fare is modeled by y = 2x + 6, where x is miles and y is dollars. What does the 6 mean?",
    work:"Interpret the y-intercept in context.",
    options:[
      "It is the starting fee before any miles are driven.",
      "It is the cost per mile.",
      "It is the total cost for 2 miles.",
      "It is the slope plus the distance."
    ],
    correctIndex:0,
    hint:"The y-intercept is the value when x = 0.",
    insight:"Misconception: students may read the intercept as the rate. Principle: in context, the intercept is the starting value. Correct: $6 starting fee."
  },
  {
    id:"68-logic-180",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"undefined-slope-rule",
    inattention:false,
    prompt:"Which statement correctly describes a vertical line?",
    work:"Choose the always-true description.",
    options:[
      "Its slope is undefined because the run is 0.",
      "Its slope is 0 because it goes straight up.",
      "Its y-intercept is always 0.",
      "It can be written as y = b."
    ],
    correctIndex:0,
    hint:"Slope uses rise/run, and vertical lines have no horizontal change.",
    insight:"Logic note: dividing by zero is undefined, so vertical lines have undefined slope."
  }
  , // DATA / STATISTICS / PROBABILITY DURABILITY PACK — 541-552
  {
    id:"68-op-181",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"mean-computation",
    inattention:false,
    prompt:"A student says the mean of 4, 6, 8, and 10 is 7 because 4 + 10 = 14 and 14 ÷ 2 = 7.",
    work:"Student work: mean = 7",
    options:[
      "They averaged only the endpoints. Add all four numbers and divide by 4: (4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7.",
      "They should keep 7 because the mean always uses the first and last number only.",
      "They should add 4 + 6 and get 10.",
      "They should divide 10 by 4 and get 2.5."
    ],
    correctIndex:0,
    hint:"Mean uses all the data values, not just some of them.",
    insight:"Misconception: mean is computed from only part of the data set. Principle: add all values and divide by the number of values. Correct mean: 7."
  },
  {
    id:"68-reason-181",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"median-outlier",
    inattention:false,
    prompt:"Which measure of center is usually less affected by one very large outlier?",
    work:"Choose the best measure of center for data with an extreme value.",
    options:[
      "Median",
      "Mean",
      "Range",
      "Sum"
    ],
    correctIndex:0,
    hint:"Think about which measure depends less on the actual size of every data value.",
    insight:"Misconception: mean and median are treated as equally sensitive to outliers. Principle: median depends on middle position, so it is usually more resistant to extreme values."
  },
  {
    id:"68-logic-181",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"probability-limits",
    inattention:false,
    prompt:"Which statement is always true about probability?",
    work:"Choose the correct rule.",
    options:[
      "A probability must be between 0 and 1, inclusive.",
      "A probability must be greater than 1.",
      "A probability can never be 0.",
      "A probability must always equal 1/2."
    ],
    correctIndex:0,
    hint:"Impossible events and certain events help define the limits.",
    insight:"Logic note: probabilities range from 0 for impossible to 1 for certain."
  },
  {
    id:"68-op-182",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"range-computation",
    inattention:false,
    prompt:"A student says the range of 3, 9, 5, 12, 7 is 15 because 3 + 12 = 15.",
    work:"Student work: range = 15",
    options:[
      "They added the least and greatest values. Range is greatest minus least: 12 - 3 = 9.",
      "They should keep 15 because range means use the ends.",
      "They should subtract 9 - 5 and get 4.",
      "They should count the numbers and get 5."
    ],
    correctIndex:0,
    hint:"Range compares the spread from lowest to highest.",
    insight:"Misconception: students add the extremes instead of subtracting. Principle: range = maximum - minimum. Correct: 9."
  },
  {
    id:"68-reason-182",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"theoretical-probability",
    inattention:false,
    prompt:"A fair six-sided number cube is rolled once. What is the probability of rolling an even number?",
    work:"Find favorable outcomes over total equally likely outcomes.",
    options:[
      "1/2",
      "2/6",
      "4/6",
      "1/3"
    ],
    correctIndex:0,
    hint:"The even outcomes are 2, 4, and 6.",
    insight:"Misconception: students may count the wrong number of favorable outcomes or forget to simplify. Principle: probability = favorable/total. Correct: 3/6 = 1/2."
  },
  {
    id:"68-logic-182",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"certain-impossible-likely",
    inattention:false,
    prompt:"Which event is impossible when rolling a standard six-sided number cube?",
    work:"Choose the event that cannot happen.",
    options:[
      "Rolling a 7",
      "Rolling an even number",
      "Rolling a number less than 6",
      "Rolling a 3"
    ],
    correctIndex:0,
    hint:"Impossible means probability 0.",
    insight:"Logic note: a standard number cube has only outcomes 1 through 6, so rolling a 7 cannot happen."
  },
  {
    id:"68-op-183",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"mode-identification",
    inattention:false,
    prompt:"A student says the mode of 2, 4, 4, 5, 6, 6, 6, 8 is 8 because it is the greatest number.",
    work:"Student work: mode = 8",
    options:[
      "They chose the greatest value instead of the most frequent one. The mode is 6 because it appears most often.",
      "They should keep 8 because mode means highest number.",
      "They should average 2 and 8 and get 5.",
      "They should choose 4 because it repeats once."
    ],
    correctIndex:0,
    hint:"Mode is about frequency, not size.",
    insight:"Misconception: mode is confused with maximum. Principle: mode is the value that appears most often. Correct: 6."
  },
  {
    id:"68-reason-183",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"experimental-vs-theoretical",
    inattention:false,
    prompt:"A spinner is divided into 4 equal sections: red, blue, green, and yellow. After 20 spins, red occurs 8 times. Which statement is best?",
    work:"Compare experimental and theoretical probability.",
    options:[
      "The experimental probability of red is 8/20, while the theoretical probability is 1/4.",
      "The experimental and theoretical probabilities must both be 8/20.",
      "The theoretical probability of red is 8/4.",
      "The experimental probability cannot be found from the results."
    ],
    correctIndex:0,
    hint:"Experimental uses observed outcomes; theoretical uses the model of equally likely outcomes.",
    insight:"Misconception: experimental and theoretical probability are blended together. Principle: experimental comes from data, theoretical comes from the sample space."
  },
  {
    id:"68-logic-183",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"independent-events-rule",
    inattention:false,
    prompt:"Which statement is correct for two independent events?",
    work:"Choose the correct probability rule.",
    options:[
      "The probability of both events happening is found by multiplying their probabilities.",
      "The probability of both events happening is always found by adding their probabilities.",
      "Independent events must have the same probability.",
      "If events are independent, one event is certain."
    ],
    correctIndex:0,
    hint:"Independent events do not affect each other.",
    insight:"Logic note: for independent events, P(A and B) = P(A) × P(B)."
  },
  {
    id:"68-op-184",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"compound-probability",
    inattention:false,
    prompt:"A student says the probability of flipping heads on a fair coin and then rolling a 3 on a fair six-sided number cube is 3/12 because 1 + 2 = 3 and 2 × 6 = 12.",
    work:"Student work: P(heads and 3) = 3/12",
    options:[
      "They combined the numerators incorrectly. Multiply the probabilities: 1/2 × 1/6 = 1/12.",
      "They should keep 3/12 because two events need addition on top.",
      "They should add 1/2 + 1/6 and get 2/3.",
      "They should change the answer to 6/12."
    ],
    correctIndex:0,
    hint:"For independent events, multiply favorable-over-total fractions.",
    insight:"Misconception: compound probability is mixed with unrelated addition. Principle: multiply probabilities for independent events. Correct: 1/12."
  },
  {
    id:"68-reason-184",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"bar-graph-reading",
    inattention:false,
    prompt:"A bar graph shows 12 students prefer apples, 9 prefer bananas, 6 prefer grapes, and 3 prefer oranges. How many more students prefer apples than oranges?",
    work:"Interpret the graph data.",
    options:[
      "9",
      "15",
      "3",
      "6"
    ],
    correctIndex:0,
    hint:"Compare the two category counts by subtraction.",
    insight:"Misconception: students may add category counts instead of comparing them. Principle: 'how many more' means subtract. Correct: 12 - 3 = 9."
  },
  {
    id:"68-logic-184",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"sample-space-reasoning",
    inattention:false,
    prompt:"A student says, 'If an event has more favorable outcomes, it must have probability greater than 1.' What is the best response?",
    work:"Claim: more favorable outcomes means probability greater than 1",
    options:[
      "The claim is false because probability compares favorable outcomes to total outcomes, so it cannot exceed 1.",
      "The claim is true because favorable outcomes make the event certain.",
      "The claim is true only for spinners.",
      "The claim cannot be checked without data."
    ],
    correctIndex:0,
    hint:"Probability is a part-to-whole comparison.",
    insight:"Misconception: favorable outcomes are considered without reference to the total sample space. Principle: probability = favorable/total, so it cannot be greater than 1."
  }
  , // EXPONENTS / SCIENTIFIC NOTATION / ROOTS / PYTHAGOREAN DURABILITY PACK — 553-564
  {
    id:"68-op-185",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"exponent-evaluation",
    inattention:false,
    prompt:"A student says 2^4 = 8 because 2 × 4 = 8.",
    work:"Student work: 2^4 = 8",
    options:[
      "They multiplied the base by the exponent instead of using repeated multiplication. 2^4 = 2 × 2 × 2 × 2 = 16.",
      "They should keep 8 because exponents mean multiply the two written numbers.",
      "They should add 2 + 4 and get 6.",
      "They should change the answer to 4."
    ],
    correctIndex:0,
    hint:"An exponent tells how many equal factors of the base to use.",
    insight:"Misconception: the base is multiplied by the exponent. Principle: exponents mean repeated multiplication of the base. Correct: 16."
  },
  {
    id:"68-reason-185",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"scientific-notation-value",
    inattention:false,
    prompt:"Which number is equal to 3.6 × 10^4?",
    work:"Convert scientific notation to standard form.",
    options:[
      "36,000",
      "3,600",
      "360,000",
      "0.00036"
    ],
    correctIndex:0,
    hint:"A positive exponent moves the decimal point to the right.",
    insight:"Misconception: students move the decimal the wrong number of places or in the wrong direction. Principle: 10^4 means shift four places right. Correct: 36,000."
  },
  {
    id:"68-logic-185",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"exponent-meaning",
    inattention:false,
    prompt:"Which statement correctly explains 5^3?",
    work:"Choose the correct meaning of the exponent.",
    options:[
      "It means 5 × 5 × 5.",
      "It means 5 × 3.",
      "It means 5 + 5 + 5 + 5 + 5.",
      "It means 3 × 3 × 3 × 3 × 3."
    ],
    correctIndex:0,
    hint:"The base is repeated as a factor.",
    insight:"Logic note: in a power, the exponent tells how many copies of the base are multiplied."
  },
  {
    id:"68-op-186",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"square-root-meaning",
    inattention:false,
    prompt:"A student says √81 = 40.5 because 81 ÷ 2 = 40.5.",
    work:"Student work: √81 = 40.5",
    options:[
      "They treated square root like division by 2. The square root of 81 is 9 because 9 × 9 = 81.",
      "They should keep 40.5 because roots always divide.",
      "They should add 8 + 1 and get 9.",
      "They should change the answer to 18."
    ],
    correctIndex:0,
    hint:"A square root asks which number multiplied by itself gives the original number.",
    insight:"Misconception: square root is confused with dividing by 2. Principle: √n asks for a number whose square is n. Correct: 9."
  },
  {
    id:"68-reason-186",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"pythagorean-hypotenuse",
    inattention:false,
    prompt:"A right triangle has legs of length 5 and 12. What is the hypotenuse?",
    work:"Use the Pythagorean theorem.",
    options:[
      "13",
      "17",
      "7",
      "144"
    ],
    correctIndex:0,
    hint:"For a right triangle, a² + b² = c².",
    insight:"Misconception: students may add the side lengths directly instead of using squares. Principle: use the Pythagorean theorem. Correct: 5² + 12² = 13²."
  },
  {
    id:"68-logic-186",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"irrational-number-recognition",
    inattention:false,
    prompt:"Which number is irrational?",
    work:"Choose the number that cannot be written as a ratio of integers.",
    options:[
      "√2",
      "3/4",
      "0.5",
      "-7"
    ],
    correctIndex:0,
    hint:"Think about which numbers can be written exactly as fractions.",
    insight:"Logic note: √2 is irrational, while fractions, terminating decimals, and integers are rational."
  },
  {
    id:"68-op-187",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"scientific-notation-small-number",
    inattention:false,
    prompt:"A student writes 0.00072 as 7.2 × 10^4.",
    work:"Student work: 0.00072 = 7.2 × 10^4",
    options:[
      "They used the wrong sign on the exponent. 0.00072 = 7.2 × 10^-4.",
      "They should keep 7.2 × 10^4 because the decimal moved 4 places.",
      "They should change it to 72 × 10^-4.",
      "They should write 7.2 × 10^0."
    ],
    correctIndex:0,
    hint:"A number less than 1 needs a negative exponent in scientific notation.",
    insight:"Misconception: students move the decimal correctly but choose the wrong exponent sign. Principle: small numbers use negative powers of 10. Correct: 7.2 × 10^-4."
  },
  {
    id:"68-reason-187",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"square-root-geometry",
    inattention:false,
    prompt:"A square has area 64 square units. What is the side length?",
    work:"Use the relationship between side length and area of a square.",
    options:[
      "8 units",
      "16 units",
      "32 units",
      "4 units"
    ],
    correctIndex:0,
    hint:"For a square, area = side².",
    insight:"Misconception: students may divide or halve the area instead of taking the square root. Principle: if s² = 64, then s = 8."
  },
  {
    id:"68-logic-187",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"scientific-notation-exponent-sign",
    inattention:false,
    prompt:"Which statement is always true for a number written in scientific notation with a coefficient between 1 and 10?",
    work:"Choose the correct general rule.",
    options:[
      "A negative exponent means the number is less than 1.",
      "A negative exponent means the number is always negative.",
      "A positive exponent means the coefficient must be greater than 10.",
      "An exponent of 0 means the number equals 0."
    ],
    correctIndex:0,
    hint:"Compare 4.5 × 10^3 with 4.5 × 10^-3.",
    insight:"Logic note: with a standard scientific-notation coefficient, negative exponents produce small positive numbers less than 1."
  },
  {
    id:"68-op-188",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"pythagorean-add-sides",
    inattention:false,
    prompt:"A student says the hypotenuse of a right triangle with legs 8 and 15 is 23 because 8 + 15 = 23.",
    work:"Student work: hypotenuse = 23",
    options:[
      "They added the side lengths instead of using squares. The hypotenuse is 17 because 8² + 15² = 64 + 225 = 289, and √289 = 17.",
      "They should keep 23 because the longest side is always the sum of the shorter sides.",
      "They should multiply 8 × 15 and get 120.",
      "They should subtract 15 - 8 and get 7."
    ],
    correctIndex:0,
    hint:"The Pythagorean theorem relates squares of side lengths, not the raw lengths themselves.",
    insight:"Misconception: the hypotenuse is found by simple addition. Principle: use a² + b² = c². Correct: 17."
  },
  {
    id:"68-reason-188",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"scientific-notation-comparison",
    inattention:false,
    prompt:"Which number is greater?",
    work:"Compare 6 × 10^3 and 6 × 10^5.",
    options:[
      "6 × 10^5, because the larger positive exponent makes the value larger.",
      "6 × 10^3, because 3 is easier to work with than 5.",
      "They are equal because the coefficients are the same.",
      "There is not enough information."
    ],
    correctIndex:0,
    hint:"When the coefficients match, compare the powers of 10.",
    insight:"Misconception: students focus only on the coefficient. Principle: with equal coefficients, the larger positive exponent gives the larger number."
  },
  {
    id:"68-logic-188",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"pythagorean-conditions",
    inattention:false,
    prompt:"Which statement about the Pythagorean theorem is always true?",
    work:"Choose the correct rule.",
    options:[
      "It applies to right triangles and relates the squares of the side lengths.",
      "It applies to every triangle.",
      "It says the longest side is always the sum of the other two.",
      "It only works when all side lengths are whole numbers."
    ],
    correctIndex:0,
    hint:"Think about what kind of triangle the theorem describes.",
    insight:"Logic note: the Pythagorean theorem is specific to right triangles and compares squared side lengths."
  }
  , // TRANSFORMATIONS / CONGRUENCE / SIMILARITY DURABILITY PACK — 565-576
  {
    id:"68-op-189",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"translation-coordinates",
    inattention:false,
    prompt:"A student says translating the point (-2, 4) right 5 units and down 3 units gives (7, 1).",
    work:"Student work: (-2, 4) → (7, 1)",
    options:[
      "They ignored the negative x-value. Right 5 means add 5 to x, and down 3 means subtract 3 from y: (-2 + 5, 4 - 3) = (3, 1).",
      "They should keep (7, 1) because moving right always gives a large positive x-value.",
      "They should change it to (-7, 1).",
      "They should add 5 to both coordinates and get (3, 9)."
    ],
    correctIndex:0,
    hint:"A translation changes each coordinate by the stated amount.",
    insight:"Misconception: students may treat a negative coordinate as if it starts at 0. Principle: apply the movement to the actual coordinate values. Correct: (3, 1)."
  },
  {
    id:"68-reason-189",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"congruence-meaning",
    inattention:false,
    prompt:"Which statement best describes congruent figures?",
    work:"Choose the correct meaning of congruence.",
    options:[
      "They have the same size and shape.",
      "They have the same shape but not necessarily the same size.",
      "They have the same perimeter only.",
      "They must face the same direction."
    ],
    correctIndex:0,
    hint:"Congruent figures can be turned or flipped and still match exactly.",
    insight:"Misconception: students confuse congruent with similar. Principle: congruent figures match exactly in size and shape."
  },
  {
    id:"68-logic-189",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"rigid-transformations",
    inattention:false,
    prompt:"Which transformation always preserves side lengths and angle measures?",
    work:"Choose the correct type of transformation.",
    options:[
      "A rigid transformation such as a translation, rotation, or reflection",
      "A dilation with scale factor 2",
      "Any resizing transformation",
      "Only a dilation with scale factor 1/2"
    ],
    correctIndex:0,
    hint:"Rigid transformations do not stretch or shrink a figure.",
    insight:"Logic note: translations, rotations, and reflections preserve distance and angle measure, so they preserve congruence."
  },
  {
    id:"68-op-190",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"reflection-x-axis",
    inattention:false,
    prompt:"A student says reflecting the point (3, -4) across the x-axis gives (-3, -4).",
    work:"Student work: (3, -4) → (-3, -4)",
    options:[
      "They reflected across the y-axis instead. Reflecting across the x-axis keeps x the same and changes the sign of y, so the image is (3, 4).",
      "They should keep (-3, -4) because reflections always change x first.",
      "They should change it to (-3, 4).",
      "They should add the coordinates and get (7, 0)."
    ],
    correctIndex:0,
    hint:"Across the x-axis means the point keeps the same horizontal position.",
    insight:"Misconception: students swap x-axis and y-axis reflections. Principle: reflection across the x-axis changes only the sign of y. Correct: (3, 4)."
  },
  {
    id:"68-reason-190",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"dilation-effect",
    inattention:false,
    prompt:"A triangle is dilated by a scale factor of 2. What happens to the side lengths?",
    work:"Reason about the effect of dilation.",
    options:[
      "Each side length is doubled.",
      "Each side length stays the same.",
      "Each side length is cut in half.",
      "Only one side changes length."
    ],
    correctIndex:0,
    hint:"A dilation multiplies all lengths by the scale factor.",
    insight:"Misconception: students may think dilation changes only the position or just one side. Principle: all corresponding lengths are multiplied by the scale factor."
  },
  {
    id:"68-logic-190",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"similar-figures-rule",
    inattention:false,
    prompt:"Which statement is always true for similar figures?",
    work:"Choose the correct rule.",
    options:[
      "Corresponding angles are equal, and corresponding side lengths are proportional.",
      "Corresponding side lengths are always equal.",
      "They must be congruent.",
      "Their areas are always equal."
    ],
    correctIndex:0,
    hint:"Similarity keeps shape but may change size.",
    insight:"Logic note: similar figures preserve angle measures and constant side-length ratios, not necessarily equal lengths."
  },
  {
    id:"68-op-191",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"rotation-origin",
    inattention:false,
    prompt:"A student says rotating the point (2, 5) 90° clockwise about the origin gives (-5, 2).",
    work:"Student work: (2, 5) → (-5, 2)",
    options:[
      "They used the wrong direction. A 90° clockwise rotation maps (x, y) to (y, -x), so the image is (5, -2).",
      "They should keep (-5, 2) because any 90° rotation makes x negative.",
      "They should change it to (-2, -5).",
      "They should add the coordinates and get (7, 0)."
    ],
    correctIndex:0,
    hint:"For 90° clockwise about the origin, use (x, y) → (y, -x).",
    insight:"Misconception: clockwise and counterclockwise rules are mixed up. Principle: track how coordinates change under the stated rotation. Correct: (5, -2)."
  },
  {
    id:"68-reason-191",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"scale-factor",
    inattention:false,
    prompt:"A side of length 3 in one figure corresponds to a side of length 12 in a similar figure. What is the scale factor from the first figure to the second?",
    work:"Compare corresponding side lengths.",
    options:[
      "4",
      "3",
      "9",
      "1/4"
    ],
    correctIndex:0,
    hint:"Scale factor = image length ÷ original length.",
    insight:"Misconception: students may subtract instead of divide. Principle: similarity compares lengths multiplicatively. Correct: 12 ÷ 3 = 4."
  },
  {
    id:"68-logic-191",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"congruence-orientation",
    inattention:false,
    prompt:"A student says, 'If two figures are turned in different directions, they cannot be congruent.' What is the best response?",
    work:"Claim: different orientation means not congruent",
    options:[
      "The claim is false because figures can be rotated or reflected and still be congruent if size and shape stay the same.",
      "The claim is true because congruent figures must face the same direction.",
      "The claim is true only on a coordinate plane.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Orientation can change under a rigid transformation.",
    insight:"Misconception: congruence is tied to orientation instead of exact match. Principle: congruent figures may be translated, rotated, or reflected."
  },
  {
    id:"68-op-192",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"similar-figures-missing-side",
    inattention:false,
    prompt:"Two similar triangles have corresponding sides 4 and 10. Another side in the smaller triangle is 6. A student says the matching side in the larger triangle is 12 because 6 + 6 = 12.",
    work:"Student work: matching side = 12",
    options:[
      "They added instead of using the scale factor. Since 10/4 = 2.5, the matching side is 6 × 2.5 = 15.",
      "They should keep 12 because similar figures use repeated addition.",
      "They should subtract 10 - 4 and get 6.",
      "They should divide 6 by 2 and get 3."
    ],
    correctIndex:0,
    hint:"Use the same multiplicative scale factor for all corresponding sides.",
    insight:"Misconception: students apply additive thinking to similar figures. Principle: corresponding sides in similar figures are proportional. Correct: 15."
  },
  {
    id:"68-reason-192",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"congruence-vs-similarity",
    inattention:false,
    prompt:"Which statement is correct?",
    work:"Compare congruence and similarity.",
    options:[
      "All congruent figures are similar, but not all similar figures are congruent.",
      "All similar figures are congruent.",
      "Congruent figures can never be similar.",
      "Similarity and congruence mean exactly the same thing."
    ],
    correctIndex:0,
    hint:"Congruence is the stricter condition.",
    insight:"Misconception: congruence and similarity are treated as identical. Principle: congruent figures are a special case of similar figures with scale factor 1."
  },
  {
    id:"68-logic-192",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"dilation-congruence",
    inattention:false,
    prompt:"Which statement about dilations is always true?",
    work:"Choose the correct general rule.",
    options:[
      "A dilation preserves angle measures and changes lengths by a scale factor.",
      "A dilation always preserves congruence.",
      "A dilation changes angle measures but keeps side lengths the same.",
      "A dilation works only on triangles."
    ],
    correctIndex:0,
    hint:"Think about what resizing does to lengths and angles.",
    insight:"Logic note: dilations preserve shape by keeping angle measures the same, but they usually change size unless the scale factor is 1."
  }
  , // FUNCTIONS / INEQUALITIES / DEEPER LINEAR REASONING DURABILITY PACK — 577-588
  {
    id:"68-op-193",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"function-evaluation",
    inattention:false,
    prompt:"A student says that if f(x) = 2x + 3, then f(4) = 11 because 2 + 3 + 4 = 9, so then add 2 more.",
    work:"Student work: f(4) = 11",
    options:[
      "They did not substitute 4 correctly. f(4) = 2(4) + 3 = 8 + 3 = 11.",
      "They should keep 11 because function notation means add all the numbers you see.",
      "They should change it to 9 because 2 + 3 + 4 = 9.",
      "They should multiply 2 × 3 × 4 and get 24."
    ],
    correctIndex:0,
    hint:"Function notation means replace x with the given input.",
    insight:"Misconception: students may treat function notation as a string of separate numbers instead of substitution. Principle: substitute the input for x and evaluate. Correct: 11."
  },
  {
    id:"68-reason-193",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"independent-dependent-variables",
    inattention:false,
    prompt:"In the equation y = 5x + 2, which variable depends on the other?",
    work:"Interpret the relationship between x and y.",
    options:[
      "y depends on x",
      "x depends on y",
      "Neither variable depends on the other",
      "Both variables are always independent"
    ],
    correctIndex:0,
    hint:"The equation tells how to find y once x is known.",
    insight:"Misconception: students may reverse the dependency. Principle: the output depends on the input. Here, y is determined by x."
  },
  {
    id:"68-logic-193",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"function-definition",
    inattention:false,
    prompt:"Which statement must be true for a relation to be a function?",
    work:"Choose the defining rule.",
    options:[
      "Each input has exactly one output.",
      "Each output has exactly one input.",
      "The graph must be a straight line.",
      "The inputs and outputs must be the same numbers."
    ],
    correctIndex:0,
    hint:"A function rule is about what happens to each input.",
    insight:"Logic note: a relation is a function when every input is paired with one and only one output."
  },
  {
    id:"68-op-194",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"solve-one-step-inequality",
    inattention:false,
    prompt:"A student solves x + 6 < 10 and gets x < 16.",
    work:"Student work: x + 6 < 10 → x < 16",
    options:[
      "They added instead of using the inverse operation. Subtract 6 from both sides: x < 4.",
      "They should keep x < 16 because inequalities always get larger.",
      "They should multiply by 6 and get x < 60.",
      "They should change it to x > 4."
    ],
    correctIndex:0,
    hint:"Undo +6 by subtracting 6 from both sides.",
    insight:"Misconception: students may move numbers the wrong way in inequalities. Principle: use inverse operations just as with equations. Correct: x < 4."
  },
  {
    id:"68-reason-194",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"inequality-graph-meaning",
    inattention:false,
    prompt:"Which graph description matches x ≥ -2?",
    work:"Interpret the inequality on a number line.",
    options:[
      "A closed dot at -2 and shading to the right",
      "An open dot at -2 and shading to the right",
      "A closed dot at -2 and shading to the left",
      "An open dot at -2 and shading to the left"
    ],
    correctIndex:0,
    hint:"'Greater than or equal to' includes the endpoint and all larger numbers.",
    insight:"Misconception: students may confuse the direction or whether the endpoint is included. Principle: ≥ means closed dot and shade right from -2."
  },
  {
    id:"68-logic-194",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"inequality-negative-rule",
    inattention:false,
    prompt:"Which statement is always true when solving inequalities?",
    work:"Choose the correct rule.",
    options:[
      "If you multiply or divide both sides by a negative number, you must reverse the inequality sign.",
      "You reverse the inequality sign every time you add.",
      "You reverse the inequality sign every time you subtract.",
      "You never reverse the inequality sign."
    ],
    correctIndex:0,
    hint:"Test the rule with a simple example like -x > 3.",
    insight:"Logic note: multiplying or dividing by a negative reverses order on the number line, so the inequality sign must flip."
  },
  {
    id:"68-op-195",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"solve-negative-inequality",
    inattention:false,
    prompt:"A student solves -3x > 12 and gets x > -4.",
    work:"Student work: -3x > 12 → x > -4",
    options:[
      "They forgot to reverse the sign when dividing by -3. The correct solution is x < -4.",
      "They should keep x > -4 because division does not affect inequality direction.",
      "They should add 3 and get x > 15.",
      "They should change it to x = -4."
    ],
    correctIndex:0,
    hint:"Dividing by a negative changes the direction of the inequality.",
    insight:"Misconception: the sign is not reversed after dividing by a negative. Principle: reverse the inequality when dividing by a negative. Correct: x < -4."
  },
  {
    id:"68-reason-195",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"compare-linear-relationships",
    inattention:false,
    prompt:"Relationship A is y = 4x + 1. Relationship B is shown by the table x: 0, 1, 2 and y: 3, 6, 9. Which relationship has the greater rate of change?",
    work:"Compare the rates of change.",
    options:[
      "Relationship A, because its rate is 4 while Relationship B increases by 3 each time.",
      "Relationship B, because its y-values are larger.",
      "They have the same rate of change.",
      "There is not enough information."
    ],
    correctIndex:0,
    hint:"Compare the coefficient of x with the constant increase in the table.",
    insight:"Misconception: students may compare outputs instead of rates. Principle: rate of change is slope. A has slope 4 and B has slope 3, so A is greater."
  },
  {
    id:"68-logic-195",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"not-a-function-example",
    inattention:false,
    prompt:"Which relation is not a function?",
    work:"Choose the relation that breaks the function rule.",
    options:[
      "{(1, 2), (1, 5), (3, 4)}",
      "{(1, 2), (2, 5), (3, 4)}",
      "{(0, 1), (2, 1), (4, 1)}",
      "{(-1, 3), (0, 3), (1, 3)}"
    ],
    correctIndex:0,
    hint:"Look for an input that is paired with more than one output.",
    insight:"Logic note: a relation is not a function when one input maps to different outputs. Here, input 1 has outputs 2 and 5."
  },
  {
    id:"68-op-196",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"linear-input-output",
    inattention:false,
    prompt:"A student uses the rule y = 3x - 2 and says that when x = 5, y = 13 because 3 + 5 - 2 = 6.",
    work:"Student work: x = 5 gives y = 13",
    options:[
      "They should substitute first: y = 3(5) - 2 = 15 - 2 = 13.",
      "They should keep 13 because 3 + 5 - 2 = 13.",
      "They should change it to 6 because addition comes first.",
      "They should multiply 3 × 2 and get y = 6."
    ],
    correctIndex:0,
    hint:"Use multiplication with the input before subtracting 2.",
    insight:"Misconception: students may mix correct answers with faulty reasoning. Principle: evaluate the expression structurally: multiply, then subtract. Correct: 13."
  },
  {
    id:"68-reason-196",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"initial-value-context",
    inattention:false,
    prompt:"A gym charges according to y = 15x + 25, where x is the number of months and y is total dollars paid. What does 25 mean?",
    work:"Interpret the constant term in context.",
    options:[
      "It is the starting fee paid before any monthly charges.",
      "It is the monthly cost.",
      "It is the number of months included.",
      "It is the slope plus the total cost."
    ],
    correctIndex:0,
    hint:"Think about what y equals when x = 0.",
    insight:"Misconception: students may confuse initial value with rate. Principle: the constant term is the starting amount. Correct: a $25 starting fee."
  },
  {
    id:"68-logic-196",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"linear-representation-connection",
    inattention:false,
    prompt:"Which statement about a linear relationship is always true?",
    work:"Choose the correct general statement.",
    options:[
      "It has a constant rate of change, whether shown in a table, graph, equation, or context.",
      "Its graph must pass through the origin.",
      "Its y-values must always be positive.",
      "Its equation must use only whole numbers."
    ],
    correctIndex:0,
    hint:"Linear means the rate of change stays constant.",
    insight:"Logic note: constant rate of change is the key feature that ties together tables, graphs, equations, and real-world linear contexts."
  }
  , // SYSTEMS / INTERSECTION / TWO-VARIABLE LINEAR REASONING DURABILITY PACK — 589-600
  {
    id:"68-op-197",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"check-solution-system",
    inattention:false,
    prompt:"A student says the ordered pair (2, 5) is a solution to the system y = x + 3 and y = 2x + 1 because it works in the first equation.",
    work:"Student work: (2, 5) is a solution because 5 = 2 + 3",
    options:[
      "They checked only one equation. A solution to a system must make both equations true, and 5 = 2(2) + 1 is also true, so (2, 5) really is a solution.",
      "They should reject (2, 5) because a pair can never solve two equations at once.",
      "They should change the pair to (2, 3).",
      "They should add the equations and get y = 3x + 4."
    ],
    correctIndex:0,
    hint:"A system solution must satisfy both equations at the same time.",
    insight:"Misconception: students may think checking one equation is enough. Principle: a system solution makes every equation in the system true. Here, (2, 5) works in both."
  },
  {
    id:"68-reason-197",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"intersection-meaning",
    inattention:false,
    prompt:"What does the intersection point of two lines on a graph represent?",
    work:"Interpret the graph of a system.",
    options:[
      "The ordered pair that makes both equations true",
      "The place where both slopes are equal",
      "The y-intercept of the steeper line",
      "A point that belongs to neither line"
    ],
    correctIndex:0,
    hint:"At the intersection, the point lies on both graphs.",
    insight:"Misconception: students may see the intersection as a visual feature only. Principle: the intersection represents the common solution to both relationships."
  },
  {
    id:"68-logic-197",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"system-solution-definition",
    inattention:false,
    prompt:"Which statement must be true about a solution to a system of two linear equations?",
    work:"Choose the correct rule.",
    options:[
      "It is an ordered pair that satisfies both equations.",
      "It is always the y-intercept of one equation.",
      "It must have positive coordinates.",
      "It is found by adding the slopes."
    ],
    correctIndex:0,
    hint:"A solution is about truth in both equations, not just one.",
    insight:"Logic note: a system solution is defined by simultaneous truth in both equations."
  },
  {
    id:"68-op-198",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"substitution-check-pair",
    inattention:false,
    prompt:"A student checks whether (3, 7) solves y = 2x + 1 and y = x + 4 and says it does because 7 = 3 + 4.",
    work:"Student work: (3, 7) works because it fits y = x + 4",
    options:[
      "They checked only one equation. It also works in y = 2x + 1 because 7 = 2(3) + 1, so (3, 7) does solve the system.",
      "They should reject it because 3 and 7 are different numbers.",
      "They should change the pair to (4, 7).",
      "They should subtract the equations and get y = x - 3."
    ],
    correctIndex:0,
    hint:"Test the ordered pair in both equations.",
    insight:"Misconception: system checking stops after one equation. Principle: verify the pair in every equation. Here, (3, 7) fits both."
  },
  {
    id:"68-reason-198",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"same-slope-different-intercepts",
    inattention:false,
    prompt:"What happens when two lines have the same slope but different y-intercepts?",
    work:"Reason about the graph of the system.",
    options:[
      "They are parallel and have no solution.",
      "They intersect once and have one solution.",
      "They are the same line and have infinitely many solutions.",
      "They must cross on the x-axis."
    ],
    correctIndex:0,
    hint:"Same steepness but different starting heights means the lines never meet.",
    insight:"Misconception: students may expect all different lines to intersect. Principle: parallel lines do not meet, so the system has no solution."
  },
  {
    id:"68-logic-198",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"no-solution-rule",
    inattention:false,
    prompt:"Which statement correctly describes a system with no solution?",
    work:"Choose the accurate description.",
    options:[
      "Its graphs never intersect.",
      "Its graphs intersect at exactly one point.",
      "Its graphs are the same line.",
      "Its equations must both be false."
    ],
    correctIndex:0,
    hint:"No common point means no common solution.",
    insight:"Logic note: a system has no solution when there is no ordered pair that satisfies both equations, so the graphs do not intersect."
  },
  {
    id:"68-op-199",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"graph-read-solution",
    inattention:false,
    prompt:"A student looks at a graph where two lines cross at (4, 2) and says the solution is (2, 4) because the y-value should come first.",
    work:"Student work: solution = (2, 4)",
    options:[
      "They reversed the coordinates. Ordered pairs are written (x, y), so the solution is (4, 2).",
      "They should keep (2, 4) because graph answers always use y before x.",
      "They should change it to (4, 4).",
      "They should add the coordinates and get 6."
    ],
    correctIndex:0,
    hint:"Coordinate pairs are always written horizontal first, vertical second.",
    insight:"Misconception: x and y are reversed when reading graphs. Principle: ordered pairs are written (x, y). Correct: (4, 2)."
  },
  {
    id:"68-reason-199",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"same-line-infinite-solutions",
    inattention:false,
    prompt:"If two equations graph as the exact same line, how many solutions does the system have?",
    work:"Interpret overlapping graphs.",
    options:[
      "Infinitely many solutions",
      "No solutions",
      "Exactly one solution",
      "Exactly two solutions"
    ],
    correctIndex:0,
    hint:"Every point on that line belongs to both equations.",
    insight:"Misconception: students may think two equations must have just one common point. Principle: if the graphs are identical, every shared point is a solution."
  },
  {
    id:"68-logic-199",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"one-solution-rule",
    inattention:false,
    prompt:"Which statement is always true for a system with exactly one solution?",
    work:"Choose the correct description.",
    options:[
      "The two graphs intersect at exactly one point.",
      "The two graphs are parallel.",
      "The two equations must have the same y-intercept.",
      "Both equations must be written in standard form."
    ],
    correctIndex:0,
    hint:"One common point means one common ordered pair.",
    insight:"Logic note: a system has exactly one solution when the graphs cross once."
  },
  {
    id:"68-op-200",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"table-common-solution",
    inattention:false,
    prompt:"Table A has points (0, 2), (1, 4), (2, 6). Table B has points (0, 5), (1, 6), (2, 7), (3, 8). A student says the system has no solution because the tables are different.",
    work:"Student work: no solution because the tables are different",
    options:[
      "They should look for a common ordered pair. There is none shown in both tables, so based on the tables given, no shared solution is visible.",
      "They should say the solution is always the first row.",
      "They should add the y-values and get a new solution.",
      "They should change the answer to (2, 7)."
    ],
    correctIndex:0,
    hint:"A shared solution must appear in both relationships.",
    insight:"Misconception: students may ignore the meaning of a shared ordered pair. Principle: a common solution is an ordered pair present in both relationships. None is shown here."
  },
  {
    id:"68-reason-200",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"system-context-meaning",
    inattention:false,
    prompt:"One plan costs y = 5x + 10 dollars and another costs y = 3x + 20 dollars, where x is the number of visits. What does the system's solution mean in context?",
    work:"Interpret the solution of two cost relationships.",
    options:[
      "The number of visits and total cost where the two plans cost the same",
      "The slope of the cheaper plan",
      "The starting fee of both plans added together",
      "The number of visits where both plans are impossible"
    ],
    correctIndex:0,
    hint:"A solution to a system is where both relationships have the same output for the same input.",
    insight:"Misconception: context meaning is separated from the algebra. Principle: the system solution is the break-even point where both plans match."
  },
  {
    id:"68-logic-200",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"system-compare-lines",
    inattention:false,
    prompt:"Which statement is correct about two linear equations with different slopes?",
    work:"Choose the always-true rule.",
    options:[
      "Their graphs intersect at exactly one point, so the system has one solution.",
      "Their graphs can never intersect.",
      "They must be the same line.",
      "The system must have infinitely many solutions."
    ],
    correctIndex:0,
    hint:"Lines with different slopes are not parallel.",
    insight:"Logic note: different slopes force two lines to cross once, giving exactly one solution."
  }
  , // FINAL MIXED AUDIT / CONCEPT-DISCRIMINATION DURABILITY PACK — 601-612
  {
    id:"68-op-201",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"formula-discrimination-circle",
    inattention:false,
    prompt:"A student says the circumference of a circle with radius 6 is 36π because they used πr².",
    work:"Student work: circumference = 36π",
    options:[
      "They used the area formula instead of the circumference formula. Circumference is 2πr, so the answer is 12π.",
      "They should keep 36π because radius is always squared in circle problems.",
      "They should add 6 + 6 and get 12 square units.",
      "They should divide by 2 and get 18π."
    ],
    correctIndex:0,
    hint:"Ask whether the problem is about distance around or space inside.",
    insight:"Misconception: area and circumference formulas are confused. Principle: circumference measures distance around a circle, so use 2πr. Correct: 12π."
  },
  {
    id:"68-reason-201",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"percent-vs-probability",
    inattention:false,
    prompt:"A bag has 3 red marbles and 7 blue marbles. A student says the probability of red is 30% because 3 is 30% of 10. Which statement is best?",
    work:"Interpret the probability.",
    options:[
      "The student is correct because probability is favorable outcomes over total outcomes, and 3/10 = 30%.",
      "The probability is 3% because there are 3 red marbles.",
      "The probability is 70% because blue is more likely.",
      "Probability cannot be written as a percent."
    ],
    correctIndex:0,
    hint:"Probability is a part-to-whole comparison and can be expressed as a fraction, decimal, or percent.",
    insight:"Misconception: probability and percent are sometimes treated as unrelated ideas. Principle: 3 out of 10 is 3/10 = 0.3 = 30%."
  },
  {
    id:"68-logic-201",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"choose-correct-representation",
    inattention:false,
    prompt:"Which statement is always the best way to decide whether a relation is a function?",
    work:"Choose the strongest rule.",
    options:[
      "Check whether any input is paired with more than one output.",
      "Check whether the outputs are all different.",
      "Check whether the graph rises from left to right.",
      "Check whether the numbers are in order."
    ],
    correctIndex:0,
    hint:"The function rule is about inputs, not about whether outputs repeat.",
    insight:"Logic note: a relation fails to be a function when one input has multiple outputs."
  },
  {
    id:"68-op-202",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"equation-vs-inequality-sign",
    inattention:false,
    prompt:"A student solves -2x ≤ 8 and gets x ≤ -4.",
    work:"Student work: -2x ≤ 8 → x ≤ -4",
    options:[
      "They forgot to reverse the inequality when dividing by -2. The correct solution is x ≥ -4.",
      "They should keep x ≤ -4 because the negative sign does not matter.",
      "They should add 2 and get x ≤ 10.",
      "They should change it to x = -4."
    ],
    correctIndex:0,
    hint:"Dividing by a negative reverses the order.",
    insight:"Misconception: inequality-solving is treated like equation-solving without the sign flip. Principle: divide by -2 and reverse the inequality. Correct: x ≥ -4."
  },
  {
    id:"68-reason-202",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"congruent-vs-similar-context",
    inattention:false,
    prompt:"Two triangles have the same shape, but one is twice as large as the other. Which statement is correct?",
    work:"Classify the relationship.",
    options:[
      "They are similar but not congruent.",
      "They are congruent but not similar.",
      "They are neither similar nor congruent.",
      "They must have the same perimeter."
    ],
    correctIndex:0,
    hint:"Same shape allows resizing; same size does not.",
    insight:"Misconception: congruence and similarity are blended. Principle: same shape with different size means similar, not congruent."
  },
  {
    id:"68-logic-202",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"graph-table-equation-connection",
    inattention:false,
    prompt:"Which feature must match across a table, graph, and equation if they represent the same linear relationship?",
    work:"Choose the connecting idea.",
    options:[
      "The same constant rate of change",
      "The same exact x-values shown",
      "The same number of rows",
      "The same y-intercept written first"
    ],
    correctIndex:0,
    hint:"Equivalent representations keep the same relationship, not necessarily the same formatting.",
    insight:"Logic note: the constant rate of change is one core feature that remains the same across multiple representations of a linear relationship."
  },
  {
    id:"68-op-203",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"mixed-number-equation",
    inattention:false,
    prompt:"A student solves x + 1 1/2 = 4 by subtracting 1 and getting x = 3.",
    work:"Student work: x + 1 1/2 = 4 → x = 3",
    options:[
      "They subtracted only 1 instead of 1 1/2. The correct solution is x = 4 - 1 1/2 = 2 1/2.",
      "They should keep 3 because mixed numbers can be rounded down when solving.",
      "They should add 1 and get x = 5.",
      "They should divide 4 by 1 1/2 and get x = 8/3."
    ],
    correctIndex:0,
    hint:"Treat the mixed number as one complete quantity.",
    insight:"Misconception: students subtract only the whole-number part of a mixed number. Principle: subtract the full value 1 1/2. Correct: 2 1/2."
  },
  {
    id:"68-reason-203",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"slope-vs-intercept-context",
    inattention:false,
    prompt:"A babysitter charges according to y = 12x + 5, where x is hours and y is dollars. Which statement is correct?",
    work:"Interpret slope and intercept in context.",
    options:[
      "The sitter charges $12 per hour and a $5 starting fee.",
      "The sitter charges $5 per hour and a $12 starting fee.",
      "The sitter charges $17 per hour.",
      "The sitter charges only when x = 0."
    ],
    correctIndex:0,
    hint:"In y = mx + b, m is the rate and b is the starting amount.",
    insight:"Misconception: slope and intercept are swapped in context. Principle: coefficient of x is the rate, constant term is the initial fee."
  },
  {
    id:"68-logic-203",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"operation-selection-fractions",
    inattention:false,
    prompt:"A student says, 'Any time I see fractions, I should find a common denominator first.' What is the best response?",
    work:"Claim: always find a common denominator first",
    options:[
      "The claim is false because common denominators are needed for addition and subtraction, but not always for multiplication or division.",
      "The claim is true because fractions always require the same first step.",
      "The claim is true only for improper fractions.",
      "The claim cannot be checked."
    ],
    correctIndex:0,
    hint:"Different fraction operations require different reasoning.",
    insight:"Misconception: one fraction procedure is overgeneralized to every situation. Principle: identify the operation before choosing the method."
  },
  {
    id:"68-op-204",
    gradeBand:"6-8",
    track:"operations",
    difficulty:"medium",
    errorType:"percent-change-vs-simple-difference",
    inattention:false,
    prompt:"A price increases from $40 to $50. A student says the percent increase is 10% because the difference is 10.",
    work:"Student work: percent increase = 10%",
    options:[
      "They used the change but ignored the original amount. The percent increase is 10/40 = 25%.",
      "They should keep 10% because percent change is always just the difference.",
      "They should divide by 50 and get 20%.",
      "They should add 40 and 50 and get 90%."
    ],
    correctIndex:0,
    hint:"Percent change compares the change to the original value.",
    insight:"Misconception: percent change is confused with raw difference. Principle: percent increase = change ÷ original. Correct: 25%."
  },
  {
    id:"68-reason-204",
    gradeBand:"6-8",
    track:"reasoning",
    difficulty:"medium",
    errorType:"system-vs-single-equation-context",
    inattention:false,
    prompt:"One phone plan costs y = 20 + 5x and another costs y = 8x. What does the solution to this system represent?",
    work:"Interpret the system in context.",
    options:[
      "The number of units x and total cost y where the two plans cost the same",
      "The total starting fee of both plans",
      "The larger slope only",
      "The plan that is always cheaper"
    ],
    correctIndex:0,
    hint:"A system solution is the shared point of two relationships.",
    insight:"Misconception: students may separate context from algebra. Principle: the system solution is the break-even point."
  },
  {
    id:"68-logic-204",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"mixed-domain-discrimination",
    inattention:false,
    prompt:"Which strategy is best when a problem could fit more than one math topic?",
    work:"Choose the strongest problem-solving approach.",
    options:[
      "Identify what the question is asking before choosing a rule or formula.",
      "Use the last formula you learned.",
      "Always add the given numbers first.",
      "Ignore units and context so the math is faster."
    ],
    correctIndex:0,
    hint:"Good problem solving starts with understanding the structure of the task.",
    insight:"Logic note: concept discrimination begins by identifying the quantity or relationship the problem is actually asking about."
  }
  ];