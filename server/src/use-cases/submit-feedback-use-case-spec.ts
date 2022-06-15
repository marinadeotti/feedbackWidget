import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

describe ('Submit feedback', () => {
    it('Should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () => {} }
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'text.jpg',
        })).resolves.not.toThrow();
    });
});