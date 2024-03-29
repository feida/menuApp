/**
 * Created by chintec on 2018/2/1.
 */
import Toast from 'react-native-root-toast';
let toast;
export const toastShort = (content) => {
  if (toast !== undefined) {
    Toast.hide(toast);
  }
  toast = Toast.show(content.toString(), {
    // duration: Toast.durations.SHORT,
    duration: 3000,
    position: Toast.positions.CENTER,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0
  });
};