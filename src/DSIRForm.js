import React, { useState } from 'react';

// DSI‑R React Component
const DSIRForm = () => {
  // 46 items
  const questions = [
    "People have remarked that I'm overly emotional.",
    "I have difficulty expressing my feelings to people I care for.",
    "I often feel inhibited around my family.",
    "I tend to remain pretty calm even under stress.",
    "I usually need a lot of encouragement from others when starting a big job or task.",
    "When someone close to me disappoints me, I withdraw from him/her for a time.",
    "No matter what happens in my life, I know that I'll never lose my sense of who I am.",
    "I tend to distance myself when people get too close to me.",
    "I want to live up to my parents' expectations of me.",
    "I wish that I weren't so emotional.",
    "I usually do not change my behavior simply to please another person.",
    "My spouse/partner could not tolerate it if I were to express to him/her my true feelings about some things.",
    "When my spouse/partner criticizes me, it bothers me for days.",
    "At times my feelings get the best of me and I have trouble thinking clearly.",
    "When I am having an argument with someone, I can separate my thoughts about the issue from my feelings about the person.",
    "I'm often uncomfortable when people get too close to me.",
    "I feel a need for approval from virtually everyone in my life.",
    "At times I feel as if I'm riding an emotional roller-coaster.",
    "There's no point in getting upset about things I cannot change.",
    "I'm concerned about losing my independence in intimate relationships.",
    "I'm overly sensitive to criticism.",
    "I try to live up to my parents' expectations.",
    "I'm fairly self-accepting.",
    "I often feel that my spouse/partner wants too much from me.",
    "I often agree with others just to appease them.",
    "If I have had an argument with my spouse/partner, I tend to think about it all day.",
    "I am able to say \"no\" to others even when I feel pressured by them.",
    "When one of my relationships becomes very intense, I feel the urge to run away from it.",
    "Arguments with my parent(s) or sibling(s) can still make me feel awful.",
    "If someone is upset with me, I can't seem to let it go easily.",
    "I'm less concerned that others approve of me than I am in doing what I think is right.",
    "I would never consider turning to any of my family members for emotional support.",
    "I often feel unsure when others are not around to help me make a decision.",
    "I'm very sensitive to being hurt by others.",
    "My self-esteem really depends on how others think of me.",
    "When I'm with my spouse/partner, I often feel smothered.",
    "When making decisions, I seldom worry about what others will think.",
    "I often wonder about the kind of impression I create.",
    "When things go wrong, talking about them usually makes it worse.",
    "I feel things more intensely than others do.",
    "I usually do what I believe is right regardless of what others say.",
    "Our relationship might be better if my spouse/partner would give me the space I need.",
    "I tend to feel pretty stable under stress.",
    "Sometimes I feel sick after arguing with my spouse/partner.",
    "I feel it's important to hear my parents' opinions before making decisions.",
    "I worry about people close to me getting sick, hurt, or upset."
  ];

  // Subscale definitions
  const subscales = {
    "Emotional Reactivity": [1, 6, 10, 14, 18, 21, 26, 30, 34, 38, 40],
    "I Position": [4, 7, 11, 15, 19, 23, 27, 31, 35, 41, 43],
    "Emotional Cutoff": [2, 3, 8, 12, 16, 20, 24, 28, 32, 36, 39, 42],
    "Fusion with Others": [5, 9, 13, 17, 22, 25, 29, 33, 37, 44, 45, 46]
  };

  // Reverse-scored items (all except these):
  const nonReverse = new Set([4, 7, 11, 15, 19, 23, 27, 31, 37, 41, 43]);

  // Component state for answers and results
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const handleChange = (qNum, value) => {
    setAnswers(prev => ({ ...prev, [qNum]: parseInt(value, 10) }));
  };

  const calculateScores = () => {
    // ensure all answered
    for (let i = 1; i <= questions.length; i++) {
      if (!(i in answers)) {
        alert(`Please answer question ${i}`);
        return;
      }
    }

    // apply reverse scoring & compute subscales
    const scored = {};
    let total = 0;

    Object.entries(subscales).forEach(([scale, items]) => {
      let sum = 0;
      items.forEach(num => {
        let val = answers[num];
        // reverse if not in nonReverse
        if (!nonReverse.has(num)) {
          val = 7 - val;
        }
        sum += val;
      });
      scored[scale] = sum;
      total += sum;
    });

    setResults({ ...scored, total });
  };

  // can't be bothered to extract these so I'm being lazy
  const buttonStyles = {
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#fff',
    backgroundColor: '#007bff',
    border: '1px solid #007bff',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    userSelect: 'none'
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h2>DSI-R Questionnaire</h2>
      <p>These are questions concerning your thoughts and feelings about yourself and relationships with others. Please read each statement carefully and decide how much the statement is generally true of you on a 1 (not at all) to 6 (very) scale. If you believe that an item does not pertain to you (e.g., you are not currently married or in a committed relationship, or one or both of your parents are deceased), please answer the item according to your best guess about what your thoughts and feelings would be in that situation. Be sure to answer every item and try to be as honest and accurate as possible in your responses.</p>
      <form>
        {questions.map((text, idx) => {
          const qNum = idx + 1;
          return (
            <div key={qNum} style={{ marginBottom: 16 }}>
              <div><strong>{qNum}.</strong> {text}</div>
              <div>
                {[1,2,3,4,5,6].map(val => (
                  <label key={val} style={{ marginRight: 12 }}>
                    <input
                      type="radio"
                      name={`q${qNum}`}
                      value={val}
                      checked={answers[qNum] === val}
                      onChange={e => handleChange(qNum, e.target.value)}
                    />{' '}{val}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
        <button type="button" style={buttonStyles} onClick={calculateScores}>Calculate Scores</button>
      </form>

      {results && (
        <div style={{ marginTop: 24 }}>
          {Object.entries(results).map(([key, val]) => (
            <div key={key}><strong>{key.replace('total', 'Total DSI-R Score')}:</strong> {val}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DSIRForm;

