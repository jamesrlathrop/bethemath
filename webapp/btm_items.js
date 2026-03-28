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
    id:"68-logic-31",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"easy",
    errorType:"pattern",
    inattention:false,
    prompt:"A student says the next term after 8, 16, 24, 32 is 36.",
    work:"Student work: 8, 16, 24, 32, 36",
    options:[
      "They changed the rule. The sequence adds 8 each time, so the next term is 40.",
      "They should double 32.",
      "They should subtract 4.",
      "They should square 32."
    ],
    correctIndex:0,
    hint:"Check the repeated difference.",
    insight:"Misconception: switch rules near the end. Principle: keep the same pattern rule. Correct: 40."
  },
  {
    id:"68-logic-32",
    gradeBand:"6-8",
    track:"logic",
    difficulty:"medium",
    errorType:"changing-difference",
    inattention:false,
    prompt:"A student says the next term after 2, 5, 9, 14 is 18.",
    work:"Student work: 2, 5, 9, 14, 18",
    options:[
      "They missed the changing differences. The increases are +3, +4, +5, so next is +6, giving 20.",
      "They should always add 4.",
      "They should double 14.",
      "They should subtract 1."
    ],
    correctIndex:0,
    hint:"Look at how the differences themselves change.",
    insight:"Misconception: use a constant-difference rule on a changing-difference pattern. Principle: track the differences. Correct: 20."
  },
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
];
