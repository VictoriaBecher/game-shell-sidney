import { useDispatch } from 'react-redux';
import { Button } from '../components/common/ui';
import { Creature } from '../components/profile/Creature';
import { ProfileForm } from '../components/profile/ProfileForm';
import { UserProfile } from '../components/profile/UserProfile';
import { AuthorizedLayout, Layout } from '../layouts';
import { deleteUserProfile } from '../store/actions/profileActions/profileActions';

export const Profile = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <AuthorizedLayout>
        <div className="container mx-auto px-6 mt-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Profile</h1>
          </header>

          <section className="grid grid-cols-12 mb-4">
            <div className="col-span-8">
              <UserProfile></UserProfile>
            </div>
            <div className="col-span-4 flex justify-center mt-8 lg:mt-0">
              <Creature></Creature>
            </div>
          </section>

          <section className="mt-4 lg:w-1/4 lg:mt-12 mx-auto">
            <ProfileForm></ProfileForm>
          </section>

          <section className="mt-4">
            <Button
              skin="primaryInverted"
              title="Delete profile"
              type="button"
              onClick={() => {
                dispatch(deleteUserProfile());
              }}
            >
              Delete
            </Button>
          </section>
        </div>
      </AuthorizedLayout>
    </Layout>
  );
};
