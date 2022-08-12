import { View } from 'react-native';
import { Text } from 'react-native-web';

function ExpensesSummary({ expenses, periodName }) {
  const expenseSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>{expenseSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
