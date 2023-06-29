describe('Demo test describe', () => {
    test("This test will not fail", () => {
        // Arrange
        const message1 = 'Hello world';
    
        // Act
        const message2 = message1.trim();
    
        // Assert
        expect(message1).toBe(message2);
    });
})
