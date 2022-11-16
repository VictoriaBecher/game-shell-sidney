import { useDispatch, useSelector } from 'react-redux';
import { setCreatureColor } from '../../store/actions/profileActions/profileActions';
import { Button } from '../common/ui';

export const ProfileForm = () => {
  const { mainColor, eyeColor, secondaryColor } = useSelector(({ profile }) => {
    const { mainColor, eyeColor, secondaryColor } = profile.creature;

    return { mainColor, eyeColor, secondaryColor };
  });

  const dispatch = useDispatch();

  const onColorPickerChange = (event) => {
    const element = event.currentTarget;

    const targetKey = element.id;

    const colorValue = element.value;

    dispatch(setCreatureColor(targetKey, colorValue));
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex justify-between">
        <label htmlFor="">Main Color</label>
        <input
          type="color"
          name="mainColor"
          id="mainColor"
          value={mainColor}
          onChange={onColorPickerChange}
        ></input>
      </div>

      <div className="flex justify-between">
        <label htmlFor="">Secondary Color</label>
        <input
          type="color"
          name="secondaryColor"
          id="secondaryColor"
          value={secondaryColor}
          onChange={onColorPickerChange}
        ></input>
      </div>

      <div className="flex justify-between">
        <label htmlFor="">Eye Color</label>
        <input
          type="color"
          name="eyeColor"
          id="eyeColor"
          value={eyeColor}
          onChange={onColorPickerChange}
        ></input>
      </div>

      <div className="text-center">
        <Button type="submit" title="save">
          Save
        </Button>
      </div>
    </form>
  );
};
