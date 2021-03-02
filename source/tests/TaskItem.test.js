import TaskItem from '../src/components/TaskItem';

test(('toggle checked from false to true'), () => {
    const testItem = new TaskItem({ id: 1, checked: false, text: 'First Item' });
    testItem.click();
    expect(testItem.getAttribute('checked')).toBe('true');
});
