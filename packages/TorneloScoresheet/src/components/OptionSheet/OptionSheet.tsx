import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import Sheet from '../Sheet/Sheet';
import { styles } from './style';
import { colours } from '../../style/colour';
import PrimaryText, { FontWeight } from '../PrimaryText/PrimaryText';
import React from 'react';
import TextIconButton, {
  TextIconButtonProps,
} from '../TextIconButton/TextIconButton';

type Option = {
  icon?: React.FC<SvgProps>;
  text?: string;
  onPress: () => void;
  style?: TextIconButtonProps['style'];
};
type OptionSheetProps = {
  message: string;
  options: Option[];
  visible: boolean;
  onCancel: () => void;
};

const OptionSheet: React.FC<OptionSheetProps> = ({
  message,
  options,
  visible,
  onCancel,
}) => {
  return (
    <Sheet dismiss={onCancel} visible={visible}>
      <View style={styles.mainContainer}>
        <PrimaryText
          style={styles.messageText}
          weight={FontWeight.Bold}
          size={30}
          colour={colours.darkenedElements}>
          {message}
        </PrimaryText>
        <View style={styles.buttonArea}>
          {options.map((option, i) => (
            <TextIconButton
              Icon={option.icon}
              text={option.text}
              buttonHeight={60}
              onPress={option.onPress}
              key={'button-' + i.toString()}
              buttonTextStyle={styles.buttonText}
              style={[styles.button, option.style]}
            />
          ))}
        </View>
      </View>
    </Sheet>
  );
};

export default OptionSheet;
