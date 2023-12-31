"""empty message

Revision ID: 57479526decd
Revises: 7a980f672949
Create Date: 2023-10-13 14:17:09.698658

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '57479526decd'
down_revision = '7a980f672949'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('salt',
               existing_type=sa.BOOLEAN(),
               type_=sa.String(length=80),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('salt',
               existing_type=sa.String(length=80),
               type_=sa.BOOLEAN(),
               nullable=True)

    # ### end Alembic commands ###
