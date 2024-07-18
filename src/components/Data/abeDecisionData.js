const abeDecisionData = (
    // to do: create an "END" state - with a general reflection question.
   {
      "1": {
        question:
          `<p>You stop by Abe and Rebecca’s room at 10am, when you were told that Rebecca would be off-site on a group outing.</p><p>The door is ajar, and you can see Abe sitting in a recliner. You poke your head in and say, "Knock knock, may I come in?"</p><p>"Sure, he answers, looking up from his newspaper."</p> <p>How do you introduce yourself?</p>`,
        options: [
          { text: `"I’m the chaplain on staff. I heard that you’re worried about your wife. I’d love to talk with you about how I can help you through this challenging time."`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This statement is friendly and direct about the chaplain’s role, but it may come across as too direct right away.` },
          { text: `"I’m the chaplain on staff. Your doctor mentioned that you were interested in talking with someone about your wife. Is now a good time to talk?"`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice out of the three options. You are friendly and asks Abe if he is in a good place to talk, which will allow you to meet him where he is at in this moment.` },
          { text: `“I’m the chaplain on staff. I provide religious guidance for residents. What’s your religious background?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This statement may put Abe on edge, as he identifies as non-religious. It could signify that chaplains only serve people who have a strong, or shared, religious background.` },
        ],
        multipleSelect: false,
      }, 
      "2": {
        question: `<strong>You say, “I’m the chaplain on staff. Your doctor mentioned that you were interested in talking with someone about your wife. Is now a good time to talk?"</strong><br/><p>Abe shifts in his chair and slowly puts his newspaper down on his lap.</p><p>“Sure, I can talk now,” he replies. “I’m not really religious though. And I’m Jewish."</p>`, 
        options: [
            {text: `“That sounds like a really scary - and stressful - situation. What kind of support is she receiving through the care team here already?”`, conditions: {type: null, command: '', index: null}, feedback: `This is the best choice out of the three options. You affirm Abe’s feelings and the situation he and Rebecca are in while seeking additional information about the care plan. You need this background information to get a deeper sense of Abe’s needs.`},
            {text: `“That sounds like a really scary - and stressful - situation. Does Rebecca have any religious or spiritual beliefs that she leans on in times like this?”
            `, conditions: {type: null, command: '', index: null}, feedback: `This isn’t the best choice in this situation. While it’s okay to ask about Rebecca’s religious or spiritual needs, you only recently calmed Abe’s resistance to you as a chaplain. Take some more time with Abe to learn about the situation before jumping back into a sensitive topic.`},
            {text: `“That sounds like a really scary - and stressful - situation. Sometimes religion can help make sense of these big challenges in life.”`, conditions: {type: null, command: '', index: null}, feedback: `This is a poor choice and may shut the conversation with Abe down. Don’t attempt to convince Abe that he needs religion to get through this situation.`},
        ],
        multipleSelect: false
    }, 
    "3": {
        question: `<strong>You say, “That sounds like a really scary - and stressful - situation. What kind of support is she receiving through the care team here already?” </strong><br/><p>Abe describes the plan the medical team put together, but mentions that he is most worried about the emotional impacts on Rebecca. “She seems sad and scared.”</p><p>You affirm Abe: “It can be a very scary and lonely situation to be in - for both of you. What kind of support does Rebecca currently have outside of her medical care team here?”</p>

        <p>Abe explains that unlike him, Rebecca is religious and she used to enjoy attending her synagogue. They moved away from it to be in the senior living facility, and she hasn’t been able to reconnect with a new community. At this point, you have established trust with Abe that you are genuinely interested in what he’s going through and who he and Rebecca already have on their support team. He felt comfortable enough to open up to you about Rebecca’s religious needs.</p>
        
        <p>You mention that you can connect Rebecca with a local synagogue, or that she can attend services at the facility. “We also have a program that you may want to attend called Caring Partners, which is for partners of people with dementia.”</p>
        
        <p>Abe smiles at the mention of this group. “That would be great, actually. It’s been really hard to deal with this alone.”</p>
        
        <p>“The group meets every Thursday at 9am. I’ll send your name over to the leader and they’ll get you the information you need to start attending.”</p>
        
        <p>Abe thanks you and you let him know that you are available if he or Rebecca needs you for anything.</p>
        
        `,
        options: [ 
           
            {text: `You make a plan to stop by again after the first Caring Partners group meeting.`, conditions: {type: "end", command: "SET_ACTIVE_SCENE", index: null}, feedback: `Great choice - following up with Abe will help him to know that you are still available to him.`},{text: `You set Abe up with meeting and then let him be.`, conditions: {type: "end", command: "SET_ACTIVE_SCENE", index: null}, feedback: `This is an okay choice, but consider staying connected with Abe by checking in with him at a later date.`}
           
        ], 
        multipleSelect: false
    }
    }
  )
  export default abeDecisionData;